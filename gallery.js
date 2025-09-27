document.addEventListener("DOMContentLoaded", () => {
  const polaroids = document.querySelectorAll('.polaroid');

  polaroids.forEach(card => {
    const randomColor = getDarkPastel();
    card.style.backgroundColor = randomColor;
  });

  function getDarkPastel() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 60%, 75%)`;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const viewer = document.getElementById('fullscreen-view');
  const fullImg = document.getElementById('fullscreen-img');
  const polaroidImages = document.querySelectorAll('.polaroid img');

  polaroidImages.forEach(img => {
    img.addEventListener('click', () => {
      fullImg.src = img.src;
      viewer.classList.add('active');
    });
  });

  viewer.addEventListener('click', (e) => {
    if (!e.target.closest('#fullscreen-container')) {
      viewer.classList.remove('active');
      fullImg.src = '';
    }
  });
});