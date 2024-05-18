// script.js
if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", handleOrientation, true);
}

function handleOrientation(event) {
    const video = document.getElementById("video");
    const gamma = event.gamma; // In degree in the range [-90,90]
    const beta = event.beta; // In degree in the range [-180,180]

    // Normalize the values
    const rotateX = beta;
    const rotateY = gamma;

    // Apply the rotation to the video
    video.style.transform = rotateX(${-rotateX}deg) rotateY(${rotateY}deg);
}
