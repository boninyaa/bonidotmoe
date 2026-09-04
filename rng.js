document.addEventListener("DOMContentLoaded", () => {
  const rngImg = document.getElementById("rng-img");
  if (rngImg) {
    const randomNum = Math.floor(Math.random() * 36) + 1;
    rngImg.src = `https://bunny.boni.moe/rng/${randomNum}.jpg`;
  }
});