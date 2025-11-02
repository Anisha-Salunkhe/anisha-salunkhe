/**
 * Portfolio Website JavaScript
 * Author: Anisha Salunkhe
 * Description: Interactive features for professional portfolio website
 */

// ============================================
// CUSTOM CURSOR
// ============================================
/**
 * Creates a custom cursor that follows mouse movement
 * Provides enhanced visual feedback for user interactions
 */
function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.custom-cursor-dot');
    
    document.addEventListener('mousemove', (e) => {
        // Update cursor position to follow mouse
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
    });
}

// ============================================
// PARTICLE ANIMATION
// ============================================
/**
 * Generates floating particles in the hero section
 * Creates dynamic background animation effect
 */
function initParticles() {
    const particles = document.querySelector('.particles');
    const particleCount = 50; // Number of particles to generate
    
    for(let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Randomize particle position and animation timing
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        
        particles.appendChild(particle);
    }
}

// ============================================
// ABOUT ME SLIDER
// ============================================
/**
 * Manages the About Me section carousel
 * Allows navigation between different professional highlights
 */
let currentSlideIndex = 0;

/**
 * Changes slide by a given increment
 * @param {number} n - Direction to move (-1 for previous, 1 for next)
 */
function changeSlide(n) {
    showSlide(currentSlideIndex + n);
}

/**
 * Jumps to a specific slide
 * @param {number} n - Index of slide to show
 */
function currentSlide(n) {
    showSlide(n);
}

/**
 * Displays the specified slide and updates navigation
 * @param {number} n - Index of slide to display
 */
function showSlide(n) {
    const cards = document.querySelectorAll('.about-card');
    const dots = document.querySelectorAll('.dot');
    
    // Handle wraparound for slide navigation
    if (n >= cards.length) { 
        currentSlideIndex = 0; 
    } else if (n < 0) { 
        currentSlideIndex = cards.length - 1; 
    } else { 
        currentSlideIndex = n; 
    }
    
    // Remove active class from all cards and dots
    cards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current slide and dot
    cards[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

// ============================================
// EXPANDABLE SECTIONS
// ============================================
/**
 * Toggles visibility of expandable content sections
 * Used for experience details and project descriptions
 * Note: This functionality is handled inline in HTML for simplicity
 * onclick="this.nextElementSibling.classList.toggle('show')"
 */

// ============================================
// SMOOTH SCROLL
// ============================================
/**
 * Enables smooth scrolling for anchor links
 * Already handled by CSS: html { scroll-behavior: smooth; }
 */

// ============================================
// INITIALIZATION
// ============================================
/**
 * Initialize all interactive features when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize custom cursor
    initCustomCursor();
    
    // Initialize particle animation
    initParticles();
    
    // Log successful initialization
    console.log('Portfolio website initialized successfully!');
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Adds animation class when element enters viewport
 * Can be used for scroll-triggered animations
 */
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe all sections for scroll animations
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Optional: Uncomment to enable scroll animations
// observeElements();
