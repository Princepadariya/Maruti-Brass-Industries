import './style.css'

// Menu Toggle Logic
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const menuOverlay = document.getElementById('menu-overlay');

if (menuToggle && menuOverlay && menuClose) {
    menuToggle.addEventListener('click', () => {
        menuOverlay.classList.add('active');
    });

    menuClose.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
    });

    // Close menu when clicking links
    document.querySelectorAll('.overlay-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuOverlay.classList.remove('active');
        });
    });
}

// Initial state and smooth scroll logic
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

console.log('Maruti Brass Industries Website Initialized');
