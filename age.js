(function () {
  const bday = new Date('2006-01-27T00:00:00Z');
  const mspy = 1000 * 60 * 60 * 24 * 365.242199;
  const age = document.getElementById('js-age');

  function rotting() {
    if (!age) return;

    const now = new Date();
    const ageMs = now.getTime() - bday.getTime();
    const deci = ageMs / mspy;
    age.textContent = deci.toFixed(4);

    requestAnimationFrame(rotting);
  }

  requestAnimationFrame(rotting);
})();