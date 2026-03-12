// CAROUSEL FUNCTIONALITY
let currentIndex = 0;
const images = document.querySelectorAll('.hero-right img');

function showNextImage() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
}
setInterval(showNextImage, 3000);