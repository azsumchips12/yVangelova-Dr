function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  document.body.appendChild(heart);

  // Random horizontal start position
  heart.style.left = Math.random() * 100 + "vw";

  // Random size
  let size = Math.random() * 15 + 10 + "px";
  heart.style.width = size;
  heart.style.height = size;

  // Random animation speed
  heart.style.animationDuration = (Math.random() * 3 + 4) + "s";

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

// Keep generating floating hearts
setInterval(createHeart, 400);
