// Enable horizontal scroll with mouse wheel
const profiles = document.querySelector('.profile-container');

profiles.addEventListener('wheel', (event) => {
  event.preventDefault();
  profiles.scrollLeft += event.deltaY;
});
