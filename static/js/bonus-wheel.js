// bonus-wheel.js
// Welcome bonus spin handling. Embeds server-backed one-time spin logic into the lobby card.

(function () {
  const PLAYER_STORE_KEY = 'player';
  const PLAYER_UPDATE_EVENT = 'ptu:player-update';
  const STATUS_ENDPOINT = '/api/player/bonus-wheel/status';
  const SPIN_ENDPOINT = '/api/player/bonus-wheel/spin';

  const prizeFallbacks = [
    { amount: 1.0, label: '$1.00' },
    { amount: 0.5, label: '$0.50' },
    { amount: 5.0, label: '$5.00' },
    { amount: 0, label: '$0.00' },
    { amount: 10.0, label: '$10.00' },
    { amount: 2.0, label: '$2.00' },
  ];

  const pickFallbackPrize = () => {
    const idx = Math.floor(Math.random() * prizeFallbacks.length);
    return prizeFallbacks[idx];
  };

  function loadPlayer() {
    try {
      const raw = localStorage.getItem(PLAYER_STORE_KEY);
      if (!raw) {
        return null;
      }
      const parsed = JSON.parse(raw);
      if (!parsed || !parsed.sessionToken) {
        return null;
      }
      return parsed;
    } catch (err) {
      console.warn('Unable to read player cache:', err);
      return null;
    }
  }

  function storePlayer(next) {
    try {
      localStorage.setItem(PLAYER_STORE_KEY, JSON.stringify(next));
    } catch (err) {
      console.warn('Unable to persist player cache:', err);
    }
    window.dispatchEvent(new CustomEvent(PLAYER_UPDATE_EVENT, { detail: next }));
    return next;
  }

  function updatePlayer(partial) {
    const current = loadPlayer();
    if (!current) {
      return null;
    }
    return storePlayer({ ...current, ...partial });
  }

  function formatCurrency(value) {
    const amount = Number(value);
    if (!Number.isFinite(amount)) {
      return '$0.00';
    }
    return `$${amount.toFixed(2)}`;
  }

  function normalisePrize(prize) {
    if (!prize) {
      return pickFallbackPrize();
    }
    const amount = Number(prize.amount ?? prize.value ?? 0);
    const label =
      typeof prize.label === 'string' && prize.label.trim().length > 0
        ? prize.label.trim()
        : formatCurrency(amount);
    return {
      amount: Number.isFinite(amount) ? amount : 0,
      label,
      spunAt: prize.spunAt ? new Date(prize.spunAt) : null,
    };
  }

  function setStatus(el, message, type) {
    if (!el) {
      return;
    }
    el.textContent = message || '';
    el.classList.remove('success', 'error');
    if (type) {
      el.classList.add(type);
    }
  }

  function syncDisplayFromPlayer(player) {
    const balanceEl = document.querySelector('.user-balance-amount');
    if (balanceEl) {
      balanceEl.textContent = formatCurrency(player?.mainBalance ?? 0).replace('$', '');
    }
    const usernameLabel = document.querySelector('.user-widget__label');
    if (usernameLabel && player?.username) {
      usernameLabel.textContent = player.username;
    }
  }

  function applyBalances(balances) {
    if (!balances) {
      return;
    }
    const next = updatePlayer({
      mainBalance:
        balances.mainBalance ?? balances.main ?? loadPlayer()?.mainBalance ?? 0,
      bonusBalance:
        balances.bonusBalance ?? balances.bonus ?? loadPlayer()?.bonusBalance ?? 0,
    });
    if (next) {
      syncDisplayFromPlayer(next);
    }
  }

  async function fetchStatus(token) {
    const res = await fetch(STATUS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 401) {
      throw Object.assign(new Error('Session expired. Please log in again.'), {
        code: 'UNAUTHENTICATED',
      });
    }

    if (!res.ok) {
      const payload = await res.json().catch(() => ({}));
      const message = payload.error || 'Unable to check bonus status.';
      throw new Error(message);
    }

    return res.json();
  }

  async function requestSpin(token) {
    const res = await fetch(SPIN_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const payload = await res.json().catch(() => ({}));

    if (res.status === 409) {
      const error = new Error(payload.error || 'Bonus spin already claimed.');
      error.code = 'ALREADY_CLAIMED';
      error.payload = payload;
      throw error;
    }

    if (res.status === 401) {
      const error = new Error(payload.error || 'Session expired. Please log in again.');
      error.code = 'UNAUTHENTICATED';
      throw error;
    }

    if (!res.ok) {
      const error = new Error(payload.error || 'Unable to process bonus spin right now.');
      error.code = 'SPIN_FAILED';
      throw error;
    }

    return payload;
  }

  function fireConfetti(amount) {
    if (typeof confetti !== 'function' || amount <= 0) {
      return;
    }
    try {
      confetti({
        particleCount: 160,
        spread: 70,
        origin: { y: 0.6 },
        scalar: 1.1,
      });
    } catch (err) {
      console.warn('Confetti failed:', err);
    }
  }

  function describeClaimMessage(prize) {
    if (prize.amount > 0) {
      return `We added ${prize.label} to your balance. Enjoy your games!`;
    }
    return 'No win this time, but you are all set to play!';
  }

  document.addEventListener('DOMContentLoaded', async () => {
    const card = document.getElementById('bonusCard');
    const spinButton = document.getElementById('spinButton');
    const finalPrizeEl = document.getElementById('finalPrize');
    const congratsEl = document.getElementById('congratsText');
    const statusEl = document.getElementById('spinStatus');

    if (!card || !spinButton || !finalPrizeEl || !congratsEl || !statusEl) {
      return;
    }

    const player = loadPlayer();
    if (!player) {
      setStatus(statusEl, 'Log in to claim your welcome spin.', 'error');
      spinButton.disabled = true;
      return;
    }

    syncDisplayFromPlayer(player);

    let hasSpun = false;
    let busy = false;

    function lockButton(state) {
      busy = state;
      spinButton.disabled = state || hasSpun;
    }

    function revealPrize(prize) {
      finalPrizeEl.textContent = prize.label;
      congratsEl.textContent =
        prize.amount > 0 ? 'Congratulations, you won!' : 'Thanks for playing!';
      card.classList.add('flip');
      fireConfetti(prize.amount);
    }

    async function initialiseStatus() {
      setStatus(statusEl, 'Checking welcome bonus…');
      try {
        const payload = await fetchStatus(player.sessionToken);
        applyBalances(payload.balances);

        if (payload.eligible === false || payload.alreadyClaimed === true) {
          hasSpun = true;
          lockButton(false);
          const prize = normalisePrize(payload.prize);
          if (payload.prize) {
            revealPrize(prize);
            const claimedDate = prize.spunAt
              ? ` on ${prize.spunAt.toLocaleDateString()}`
              : '';
            const message = prize.amount > 0
              ? `Bonus spin already claimed${claimedDate}. ${describeClaimMessage(prize)}`
              : `Bonus spin already claimed${claimedDate}.`;
            setStatus(statusEl, message.trim(), prize.amount > 0 ? 'success' : undefined);
          } else {
            setStatus(statusEl, 'Bonus spin already claimed.', 'error');
          }
        } else {
          hasSpun = false;
          lockButton(false);
          setStatus(statusEl, 'Claim your welcome spin to boost your balance!');
        }
      } catch (err) {
        console.error('Bonus wheel status failed:', err);
        if (err.code === 'UNAUTHENTICATED') {
          setStatus(statusEl, err.message, 'error');
          spinButton.disabled = true;
        } else {
          setStatus(
            statusEl,
            err.message || 'Unable to reach the bonus service. Please try again shortly.',
            'error'
          );
          spinButton.disabled = true;
        }
      }
    }

    async function handleSpin() {
      if (busy || hasSpun) {
        return;
      }
      lockButton(true);
      setStatus(statusEl, 'Spinning…');

      try {
        const payload = await requestSpin(player.sessionToken);
        const prize = normalisePrize(payload.prize);
        applyBalances(payload.balances);
        revealPrize(prize);
        setStatus(statusEl, describeClaimMessage(prize), prize.amount > 0 ? 'success' : undefined);
        hasSpun = true;
      } catch (err) {
        console.error('Bonus spin failed:', err);
        if (err.code === 'ALREADY_CLAIMED') {
          const prize = normalisePrize(err.payload?.prize);
          applyBalances(err.payload?.balances);
          revealPrize(prize);
          setStatus(statusEl, describeClaimMessage(prize), prize.amount > 0 ? 'success' : undefined);
          hasSpun = true;
        } else if (err.code === 'UNAUTHENTICATED') {
          setStatus(statusEl, err.message, 'error');
        } else {
          setStatus(
            statusEl,
            err.message || 'We ran into a problem awarding your bonus. Please try again.',
            'error'
          );
          lockButton(false);
          return;
        }
      }

      lockButton(false);
    }

    spinButton.addEventListener('click', handleSpin);
    initialiseStatus().catch((err) => {
      console.error('Initial bonus load failed:', err);
    });
  });
})();
