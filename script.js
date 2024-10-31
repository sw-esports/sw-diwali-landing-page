const body = document.querySelector('body');
const audio = document.getElementById('background-audio');

// Function to create a star element at specified position
function createStar(x, y) {
    const size = Math.random() * 100;
    const star = document.createElement('span');

    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.left = x + "px";
    star.style.top = y + "px";

    body.append(star);
    setTimeout(() => {
        star.remove();
    }, 5000);
}

// Handle mouse move on desktop
body.addEventListener('mousemove', function (event) {
    createStar(event.offsetX, event.offsetY);
});

// Handle touch move on mobile
body.addEventListener('touchmove', function (event) {
    event.preventDefault(); // Prevent scrolling during touchmove
    const touch = event.touches[0];
    createStar(touch.clientX, touch.clientY);
}, { passive: false });

// Play audio when the page loads
window.addEventListener('load', function () {
    audio.play().catch(() => {
        console.log("User interaction needed to play the audio.");
    });
});
