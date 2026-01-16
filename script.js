const btn = document.getElementById('backToTop');
const container = document.querySelector('.container');

const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // When the container is NOT intersecting (scrolled past), show the button
            if (!entry.isIntersecting) {
                btn.classList.add('show');
            } else {
                btn.classList.remove('show');
            }
        });
    }, { 
        threshold: 0 // Trigger as soon as the container leaves the screen
    });

observer.observe(container);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Aligns the top of the element to the top of the viewport
            });
        }
    });
});