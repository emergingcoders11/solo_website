document.querySelectorAll('.accordion-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        
        const item = this.parentElement;

        // Toggle the 'active' class on the clicked item
        item.classList.toggle('active');

        // Collapse other open items if necessary
        document.querySelectorAll('.accordion-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
    });
});


function setActiveNav() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentURL = window.location.href;

    navLinks.forEach(link => {
        if (link.href === currentURL) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Call the function on page load
window.onload = setActiveNav;
