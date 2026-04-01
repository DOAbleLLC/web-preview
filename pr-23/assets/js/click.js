document.addEventListener('keydown', function (event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === 'Enter') {
        // Trigger the click event based on the focused element
        const focusedElement = document.activeElement;

        if (focusedElement.classList.contains('scroll-to-top')) {
            document.querySelector('.scroll-to-top').click();
        } else if (focusedElement.classList.contains('mobile-nav-toggler')) {
            document.querySelector('.mobile-nav-toggler').click();
        } else if (focusedElement.classList.contains('close-btn')) {
            document.querySelector('.close-btn').click();
        } else if (focusedElement.classList.contains('slider-icon-scroll')) {
            document.querySelector('.slider-icon-scroll').click();
        } else if (focusedElement.classList.contains('team-block')) {
            // Assuming 'team-block' is the class for the block you want to handle
            focusedElement.focus(); // Add focus to the 'team-block'
        }
    }
});




