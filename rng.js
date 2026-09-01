document.addEventListener("DOMContentLoaded", () => {
  const rngImg = document.getElementById("rng-img");
  if (rngImg) {
    const randomNum = Math.floor(Math.random() * 30) + 1;
    rngImg.src = `https://boobies.shiver.mom/random${randomNum}.png`;
  }
});