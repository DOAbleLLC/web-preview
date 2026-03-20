// hoverEffect.js
document.addEventListener("DOMContentLoaded", function() {
    const footerImage = document.getElementById('footer-image');
    const footerLink = document.getElementById('footer-link');

    // Store the original image source
    const originalSrc = footerImage.src;

    // Define a new image source for the hover state
    const newSrc = 'assets/images/logo/footer-hover.png';

    // Create a new image element for the hover image
    const hoverImage = new Image();
    hoverImage.src = newSrc;
    hoverImage.alt = 'Doable Group logo';
    hoverImage.style.position = 'absolute';
    hoverImage.style.opacity = 0;
    hoverImage.style.transition = 'opacity 0.3s';
    hoverImage.style.zIndex = '1'; // Ensure the overlay image is above the original image
    hoverImage.style.top = '0'; // Adjust as needed
    hoverImage.style.left = 'auto'; // Reset the left position to its default (centered)
    hoverImage.style.right = '0'; // Align the hover image to the right

    // Append the hover image to the same parent as the original image
    footerImage.parentNode.appendChild(hoverImage);

    // Add a mouseover event listener to fade in the hover image
    footerLink.addEventListener('mouseover', () => {
        hoverImage.style.opacity = 1;
    });

    // Add a mouseout event listener to fade out the hover image
    footerLink.addEventListener('mouseout', () => {
        hoverImage.style.opacity = 0;
    });
});