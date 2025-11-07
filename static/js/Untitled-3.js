// bonus-wheel.js
// Show bonus wheel once per login (server-tracked)

document.addEventListener("DOMContentLoaded", async function () {
  const modal = document.getElementById("bonusModal");
  const card = document.getElementById("card");
  const canvas = document.getElementById("wheelCanvas");
  const ctx = canvas.getContext("2d");
  const spinBtn = document.getElementById("spinButton");
  const finalPrize = document.getElementById("finalPrize");

  const prizes = ["$0.00", "$0.50", "$1.00", "$2.00", "$5.00", "$0.50", "$1.00", "$0.00", "$2.00", "$0.50"];
  const colors = ["#ff6384", "#36a2eb", "#cc65fe", "#ffce56", "#4bc0c0", "#9966ff", "#ff9f40", "#ff6384", "#4bc0c0", "#ffce56"];
  const arc = Math.PI * 2 / prizes.length;

  function drawWheel() {
    for (let i = 0; i < prizes.length; i++) {
      const angle = i * arc;
      ctx.fillStyle = colors[i];
      ctx.beginPath();
      ctx.moveTo(85, 85);
      ctx.arc(85, 85, 85, angle, angle + arc);
      ctx.lineTo(85, 85);
      ctx.fill();

      ctx.save();
      ctx.fillStyle = "#fff";
      ctx.translate(
        85 + Math.cos(angle + arc / 2) * 45,
        85 + Math.sin(angle + arc / 2) * 45
      );
      ctx.rotate(angle + arc / 2 + Math.PI / 2);
      ctx.font = "10px Arial";
      ctx.fillText(prizes[i], -10, 0);
      ctx.restore();
    }
  }

  async function getWheelStatus() {
    try {
      const res = await fetch("/api/user/bonus-wheel-status", {
        credentials: "include",
      });
      const data = await res.json();
      return data.showWheel === true;
    } catch (err) {
      console.error("Failed to check wheel status:", err);
      return false;
    }
  }

  async function claimPrize(prize) {
    try {
      await fetch("/api/user/bonus-wheel-claim", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prize }),
      });
      console.log("Prize submitted:", prize);
    } catch (err) {
      console.error("Failed to submit prize:", err);
    }
  }

  async function spinWheel() {
    const spins = Math.floor(Math.random() * 4) + 5;
    const prizeIndex = Math.floor(Math.random() * prizes.length);
    const degrees =
      spins * 360 + (360 - prizeIndex * (360 / prizes.length));

    canvas.style.transition = "transform 4s ease-out";
    canvas.style.transform = `rotate(${degrees}deg)`;

    setTimeout(async () => {
      const prize = prizes[prizeIndex];
      finalPrize.textContent = prize;

      card.classList.add("flip");

      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });

      await claimPrize(prize);
    }, 4200);
  }

  const shouldShow = await getWheelStatus();

  if (shouldShow) {
    drawWheel();
    modal.style.display = "flex";

    spinBtn.addEventListener("click", () => {
      spinWheel();
      spinBtn.disabled = true;
    });
  }
});
