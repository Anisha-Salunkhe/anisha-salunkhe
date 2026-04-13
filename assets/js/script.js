/**
 * Portfolio Website JavaScript
 * Author: Anisha Salunkhe
 * Description: Interactive features for professional portfolio website
 */

// ============================================
// CUSTOM CURSOR — lag-free via rAF + transform
// ============================================
function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.custom-cursor-dot');
    if (!cursor || !cursorDot) return;

    let mouseX = 0, mouseY = 0;
    let rafId = null;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (!rafId) {
            rafId = requestAnimationFrame(updateCursor);
        }
    });

    function updateCursor() {
        // Use transform instead of left/top to avoid layout reflow
        cursor.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`;
        cursorDot.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`;
        rafId = null;
    }
}

// ============================================
// PARTICLE ANIMATION
// ============================================
function initParticles() {
    const particles = document.querySelector('.particles');
    if (!particles) return;
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        particles.appendChild(particle);
    }
}

// ============================================
// ABOUT ME SLIDER
// ============================================
let currentSlideIndex = 0;

function changeSlide(n) { showSlide(currentSlideIndex + n); }
function currentSlide(n) { showSlide(n); }

function showSlide(n) {
    const cards = document.querySelectorAll('.about-card');
    const dots = document.querySelectorAll('.dot');
    if (n >= cards.length) currentSlideIndex = 0;
    else if (n < 0) currentSlideIndex = cards.length - 1;
    else currentSlideIndex = n;

    cards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    cards[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

// ============================================
// EXPANDABLE SECTIONS
// ============================================
function initExpandButtons() {
    document.querySelectorAll('.expand-btn').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const details = this.nextElementSibling;
            const summary = this.previousElementSibling;
            details.classList.toggle('show');
            if (summary && summary.classList.contains('project-summary')) {
                summary.classList.toggle('hide');
            }
            if (this.textContent.includes('Details')) {
                this.textContent = this.textContent === '+ Details' ? '\u2212 Less' : '+ Details';
            } else {
                this.textContent = this.textContent === '+ Show More' ? '\u2212 Show Less' : '+ Show More';
            }
        });
    });
}

// ============================================
// SKILLS GRID — wheel + drag scroll
// ============================================
function initSkillsScroll() {
    document.querySelectorAll('.skills-grid').forEach(grid => {
        // Wheel/trackpad horizontal scroll
        grid.addEventListener('wheel', function (e) {
            if (grid.scrollWidth <= grid.clientWidth) return;
            e.preventDefault();
            // Smooth horizontal scrolling
            grid.scrollLeft += e.deltaY;
        }, { passive: false });

        // Mouse drag scrolling
        let isDown = false;
        let startX;
        let scrollLeft;
        let velocity = 0;
        let lastX = 0;
        let momentumID;

        grid.addEventListener('mousedown', (e) => {
            isDown = true;
            grid.classList.add('active-drag');
            grid.style.cursor = 'grabbing';
            startX = e.pageX - grid.offsetLeft;
            scrollLeft = grid.scrollLeft;
            lastX = e.pageX;
            velocity = 0;
            cancelMomentumTracking();
        });

        grid.addEventListener('mouseleave', () => {
            if (isDown) {
                isDown = false;
                grid.classList.remove('active-drag');
                grid.style.cursor = 'grab';
                beginMomentumTracking();
            }
        });

        grid.addEventListener('mouseup', () => {
            if (isDown) {
                isDown = false;
                grid.classList.remove('active-drag');
                grid.style.cursor = 'grab';
                beginMomentumTracking();
            }
        });

        grid.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            
            const x = e.pageX - grid.offsetLeft;
            const walk = (x - startX) * 2; // Scroll speed multiplier
            const prevScrollLeft = grid.scrollLeft;
            
            grid.scrollLeft = scrollLeft - walk;
            
            velocity = grid.scrollLeft - prevScrollLeft;
            lastX = e.pageX;
        });

        // Momentum scrolling
        function beginMomentumTracking() {
            cancelMomentumTracking();
            momentumID = requestAnimationFrame(momentumLoop);
        }

        function cancelMomentumTracking() {
            if (momentumID) cancelAnimationFrame(momentumID);
        }

        function momentumLoop() {
            grid.scrollLeft -= velocity;
            velocity *= 0.95; // Friction
            
            if (Math.abs(velocity) > 0.5) {
                momentumID = requestAnimationFrame(momentumLoop);
            }
        }

        // Touch support for mobile
        let touchStartX = 0;
        let touchScrollLeft = 0;

        grid.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].pageX - grid.offsetLeft;
            touchScrollLeft = grid.scrollLeft;
        }, { passive: true });

        grid.addEventListener('touchmove', (e) => {
            const x = e.touches[0].pageX - grid.offsetLeft;
            const walk = (x - touchStartX) * 2;
            grid.scrollLeft = touchScrollLeft - walk;
        }, { passive: true });
    });
}

// ============================================
// EXPERIENCE ITEMS COLLAPSE/EXPAND
// ============================================
function initExperienceItems() {
    document.querySelectorAll('.experience-item').forEach(item => {
        // Set all to collapsed initially
        item.classList.add('collapsed');
        
        // Click handler for the entire box
        item.addEventListener('click', function(e) {
            // Don't toggle if clicking on expand button
            if (e.target.classList.contains('expand-btn')) return;
            
            this.classList.toggle('collapsed');
        });
    });
}

// ============================================
// PROJECT CARDS COLLAPSE/EXPAND
// ============================================
function initProjectCards() {
    document.querySelectorAll('.project-card').forEach(card => {
        // Hide details initially
        const details = card.querySelector('.project-details');
        const summary = card.querySelector('.project-summary');
        if (details) details.classList.remove('show');
        if (summary) summary.classList.remove('hide');
        
        // Click handler for the entire card
        card.addEventListener('click', function(e) {
            // Don't toggle if clicking on a link or specific interactive element
            if (e.target.tagName === 'A' || e.target.closest('a')) return;
            
            const details = this.querySelector('.project-details');
            const summary = this.querySelector('.project-summary');
            
            // Toggle expanded state
            this.classList.toggle('expanded');
            
            if (details) details.classList.toggle('show');
            if (summary) summary.classList.toggle('hide');
        });
    });
}

// ============================================
// ACHIEVEMENT ITEMS COLLAPSE/EXPAND
// ============================================
function initAchievementItems() {
    document.querySelectorAll('.achievement-item').forEach(item => {
        // Set all to collapsed initially
        item.classList.add('collapsed');
        
        // Click handler for the entire box
        item.addEventListener('click', function(e) {
            this.classList.toggle('collapsed');
        });
    });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    initCustomCursor();
    initParticles();
    initSkillsScroll();
    initExperienceItems();
    initProjectCards();
    initAchievementItems();
});
