<<<<<<< HEAD
// =====================================================
// MADHANADEVA D — PORTFOLIO JS  v2
// =====================================================

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('open');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.classList.remove('open');
    });
});

// Hero floating particles
function initParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;
    const count = 24;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        const size = Math.random() * 2.5 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 14 + 10;
        const delay = Math.random() * 8;
        const colors = ['rgba(0,212,255,0.45)', 'rgba(124,58,237,0.35)', 'rgba(16,185,129,0.35)'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        p.style.cssText = `
            position:absolute; width:${size}px; height:${size}px;
            background:${color}; border-radius:50%;
            left:${x}%; top:${y}%;
            animation:floatUp ${duration}s ${delay}s ease-in-out infinite;
            pointer-events:none;
        `;
        container.appendChild(p);
    }
    if (!document.getElementById('particleStyle')) {
        const style = document.createElement('style');
        style.id = 'particleStyle';
        style.textContent = `
            @keyframes floatUp {
                0%,100%{ transform:translateY(0) scale(1); opacity:0.4; }
                50%{ transform:translateY(-28px) scale(1.25); opacity:0.75; }
            }
        `;
        document.head.appendChild(style);
    }
}
initParticles();

// Scroll Reveal via IntersectionObserver
const revealEls = document.querySelectorAll('.reveal, .reveal-fast');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// Trigger hero reveals on load
window.addEventListener('load', () => {
    document.querySelectorAll('.hero .reveal-fast').forEach(el => {
        setTimeout(() => el.classList.add('active'), 120);
    });
});

// Active nav link highlighting on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
        if (window.pageYOffset >= s.offsetTop - 130) current = s.getAttribute('id');
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active-link', link.getAttribute('href') === '#' + current);
    });
});

// Scroll to top
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('active', window.pageYOffset > 400);
});
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const btn = document.getElementById('submitBtn');
    const btnText = btn.querySelector('.btn-text');
    const btnIcon = btn.querySelector('.btn-icon');

    btn.disabled = true;
    btnText.textContent = 'Sending...';
    btnIcon.className = 'fas fa-circle-notch fa-spin btn-icon';

    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        mode: 'no-cors'
    });

    setTimeout(() => {
        btn.classList.add('success');
        btnText.textContent = 'Message Sent!';
        btnIcon.className = 'fas fa-check-circle btn-icon';
        form.reset();

        setTimeout(() => {
            btn.classList.remove('success');
            btn.disabled = false;
            btnText.textContent = 'Send Message';
            btnIcon.className = 'fas fa-paper-plane btn-icon';
        }, 3000);
    }, 900);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
=======
// Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Scroll Reveal Animation
        const reveals = document.querySelectorAll('.reveal');

        function checkReveal() {
            reveals.forEach(reveal => {
                const windowHeight = window.innerHeight;
                const revealTop = reveal.getBoundingClientRect().top;
                const revealPoint = 80;

                if (revealTop < windowHeight - revealPoint) {
                    reveal.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', checkReveal);
        checkReveal();

        // Scroll to top button
        const scrollTopBtn = document.getElementById('scrollTop');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('active');
            } else {
                scrollTopBtn.classList.remove('active');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Form theme toggle
        document.getElementById('formThemeToggle').addEventListener('change', function() {
            const contactForm = document.querySelector('.contact-form');
            if (this.checked) {
                contactForm.classList.add('light-mode');
            } else {
                contactForm.classList.remove('light-mode');
            }
        });

        // Form submission with simple reliable animation
        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            
            const form = e.target;
            const submitBtn = document.querySelector('.submit-btn');
            const btnText = document.querySelector('.btn-text');
            const btnIcon = document.querySelector('.btn-icon');
            
            // Start sending animation
            submitBtn.disabled = true;
            submitBtn.classList.add('sending');
            
            // Submit form
            const formData = new FormData(form);
            fetch(form.action, {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            });
            
            // Show success after plane animation
            setTimeout(() => {
                submitBtn.classList.remove('sending');
                submitBtn.classList.add('success');
                btnText.textContent = 'Sent Successfully!';
                btnIcon.className = 'fas fa-check-circle btn-icon';
                
                form.reset();
                
                // Reset button
                setTimeout(() => {
                    submitBtn.classList.remove('success');
                    submitBtn.disabled = false;
                    btnText.textContent = 'Send Message';
                    btnIcon.className = 'fas fa-paper-plane btn-icon';
                }, 2500);
            }, 800);
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                  if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
>>>>>>> 4a1e3a0777c3959ba7cc9f786b6b422f81da922b
