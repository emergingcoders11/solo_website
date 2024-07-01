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
