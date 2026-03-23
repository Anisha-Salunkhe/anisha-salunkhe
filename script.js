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
        grid.addEventListener('wheel', function (e) {
            if (grid.scrollWidth <= grid.clientWidth) return;
            e.preventDefault();
            grid.scrollLeft += e.deltaY;
        }, { passive: false });

        let isDown = false, startX, scrollLeft;

        grid.addEventListener('mousedown', (e) => {
            isDown = true;
            grid.style.cursor = 'grabbing';
            startX = e.pageX - grid.offsetLeft;
            scrollLeft = grid.scrollLeft;
        });
        grid.addEventListener('mouseleave', () => { isDown = false; grid.style.cursor = 'grab'; });
        grid.addEventListener('mouseup', () => { isDown = false; grid.style.cursor = 'grab'; });
        grid.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - grid.offsetLeft;
            grid.scrollLeft = scrollLeft - (x - startX) * 2;
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
    console.log('Portfolio initialized.');
});
