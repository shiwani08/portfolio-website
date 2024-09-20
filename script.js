// Function to underline the active navigation link based on the current URL
document.addEventListener('DOMContentLoaded', function() {
    // Get the current page's file name from the URL
    const currentPage = window.location.pathname.split('/').pop();

    // Map of page names to corresponding link IDs
    const pageLinks = {
        'home.html': 'home-link',
        'about.html': 'about-link',
        'projects.html': 'projects-link',
        'hobbies.html': 'hobbies-link',
        'contact.html': 'contact-link'
    };

    // Get the corresponding link ID for the current page
    const activeLinkId = pageLinks[currentPage];

    // Add the 'active' class to the current link, if it exists
    if (activeLinkId) {
        document.getElementById(activeLinkId).classList.add('active');
    }
});
