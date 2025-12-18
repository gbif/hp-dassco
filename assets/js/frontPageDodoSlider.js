const container = document.getElementById('dodo-compare');
const beforeWrapper = container.querySelector('.image-before-wrapper');
const handle = container.querySelector('.slider-handle');

let isDragging = false;

function updatePosition(clientX) {
    const rect = container.getBoundingClientRect();
    let x = clientX - rect.left;

    x = Math.max(0, Math.min(x, rect.width));

    const percentage = (x / rect.width) * 100;

    beforeWrapper.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
}

container.addEventListener('mousedown', () => isDragging = true);
window.addEventListener('mouseup', () => isDragging = false);

window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
        updatePosition(e.clientX);
});

container.addEventListener('touchstart', () => isDragging = true);
window.addEventListener('touchend', () => isDragging = false);

window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
        updatePosition(e.touches[0].clientX);
});