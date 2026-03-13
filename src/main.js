import './style.css'

// --- Smooth Scrolling & Progress Helpers ---

// Create Scroll Progress Bar
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);

// Create Back to Top Button
const backToTop = document.createElement('div');
backToTop.className = 'back-to-top';
backToTop.innerHTML = '&uarr;';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    // Progress Bar
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.width = progress + '%';

    // Back to Top Visibility
    if (window.pageYOffset > 400) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Global Smooth Scroll for all internal links
document.querySelectorAll('a[href^="#"], a[href^="/#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Handle logo click on home page
        if (href === '/' && window.location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        if (href.includes('#')) {
            const targetId = href.split('#')[1] || 'body';
            const targetElement = document.getElementById(targetId) || document.body;
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

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

// Intersection Observer for Reveal Animations
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Once revealed, we can stop observing this element
            // revealObserver.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.1, // Trigger when 10% of element is visible
    rootMargin: '0px 0px -50px 0px' // Slight offset to feel more natural
});

window.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => revealObserver.observe(el));
});

console.log('Maruti Brass Industries Website Initialized');
