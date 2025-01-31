// Example of a simple interactive feature
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            alert('You clicked on ' + this.textContent);
        });
    });
});
