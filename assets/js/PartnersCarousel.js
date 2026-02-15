function updateScrollSpeed() {
  const track = document.querySelector('.partners-track');
  const trackWidth = track.scrollWidth;
  
  const pixelsPerSecond = 100;
  const duration = trackWidth / pixelsPerSecond;
  
  track.style.setProperty('--scroll-duration', `${duration}s`);
}

window.addEventListener('load', updateScrollSpeed);
window.addEventListener('resize', updateScrollSpeed);