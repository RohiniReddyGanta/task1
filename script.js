// Select all sections and navigation links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Add scroll event listener to window
window.onscroll = () => {
    // Loop through each section
    sections.forEach(sec => {
        // Get the current scroll position
        let top = window.scrollY;
        // Get the offset position of the section
        let offset = sec.offsetTop;
        // Get the height of the section
        let height = sec.offsetHeight;
        // Get the id of the section
        let id = sec.getAttribute('id');

        // Check if the current scroll position is within the bounds of the section
        if (top >= offset && top < offset + height) {
            // Loop through each navigation link
            navLinks.forEach(link => {
                // Remove 'active' class from all navigation links
                link.classList.remove('active');
            });
            // Add 'active' class to the navigation link corresponding to the current section
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });
};
