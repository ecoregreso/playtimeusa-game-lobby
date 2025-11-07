async function playerLogin(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const pin = document.getElementById("pin").value;

  const res = await fetch("http://localhost:10000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, pin })
  });
  
  const cors = require('cors');
    app.use(cors({
    origin: '*' // allows all origins, or replace '*' with your Netlify URL for security
}));

  const data = await res.json();
  if (res.ok) {
    localStorage.setItem("token", data.token);
    window.location.href = "games.html";
  } else {
    alert("Login failed");
  }
}

function logout() {
  localStorage.removeItem("token");
  window.location.href = "index.html";
}
