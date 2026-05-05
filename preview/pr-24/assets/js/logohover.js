// hoverEffect.js
document.addEventListener("DOMContentLoaded", function() {
    const logoImage = document.getElementById('logo-image');
    const logoLink = document.getElementById('logo-link');

    // Store the original image source
    const originalSrc = logoImage.src;

    // Define a new image source for the hover state
    const newSrc = 'assets/images/logo/logohover.png';

    // Create a new image element for the hover image
    const hoverImage = new Image();
    hoverImage.src = newSrc;
    hoverImage.style.position = 'absolute';
    hoverImage.alt = 'Doable Group logo';
    hoverImage.style.opacity = 0;
    hoverImage.style.transition = 'opacity 0.3s';
    hoverImage.style.zIndex = '1'; // Ensure the overlay image is above the original image
    hoverImage.style.top = '10'; // Adjust as needed
    hoverImage.style.left = '0'; // Adjust as needed

    // Append the hover image to the same parent as the original image
    logoImage.parentNode.appendChild(hoverImage);

    // Add a mouseover event listener to fade in the hover image
    logoLink.addEventListener('mouseover', () => {
        hoverImage.style.opacity = 1;
    });

    // Add a mouseout event listener to fade out the hover image
    logoLink.addEventListener('mouseout', () => {
        hoverImage.style.opacity = 0;
    });
});

