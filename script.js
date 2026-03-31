// ── Navbar scroll ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ── Mobile hamburger ──
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach(l => {
    l.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('active');
    });
});

// ── CV Dropdown (click-based) ──
const cvMainBtn  = document.querySelector('.cv-main-btn');
const cvDropdown = document.querySelector('.cv-dropdown');
if (cvMainBtn && cvDropdown) {
    cvMainBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        cvDropdown.classList.toggle('open');
    });
    // Close when clicking outside
    document.addEventListener('click', () => {
        cvDropdown.classList.remove('open');
    });
    cvDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    // Close after selecting a CV option
    cvDropdown.querySelectorAll('.cv-option').forEach(opt => {
        opt.addEventListener('click', () => {
            cvDropdown.classList.remove('open');
        });
    });
}

// ── Floating particles ──
(function initParticles() {
    const el = document.getElementById('particles');
    if (!el) return;
    const colors = ['rgba(0,212,255,.45)', 'rgba(124,58,237,.35)', 'rgba(16,185,129,.35)'];
    for (let i = 0; i < 26; i++) {
        const p = document.createElement('div');
        const s = Math.random() * 2.5 + 1;
        p.style.cssText = `
            position:absolute;
            width:${s}px;height:${s}px;
            background:${colors[i % 3]};
            border-radius:50%;
            left:${Math.random()*100}%;
            top:${Math.random()*100}%;
            animation:fup ${Math.random()*14+9}s ${Math.random()*8}s ease-in-out infinite;
            pointer-events:none;
        `;
        el.appendChild(p);
    }
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fup {
            0%,100%{transform:translateY(0) scale(1);opacity:.4}
            50%{transform:translateY(-28px) scale(1.2);opacity:.75}
        }
    `;
    document.head.appendChild(style);
})();

// ── Scroll reveal (IntersectionObserver) ──
const revealAll = document.querySelectorAll('.reveal, .reveal-fast');
const revObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
}, { threshold: 0.07, rootMargin: '0px 0px -36px 0px' });
revealAll.forEach(el => revObs.observe(el));

// trigger hero immediately after load
window.addEventListener('load', () => {
    document.querySelectorAll('.hero .reveal-fast').forEach(el => {
        setTimeout(() => el.classList.add('active'), 100);
    });
});

// ── Active nav on scroll ──
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => {
        if (window.pageYOffset >= s.offsetTop - 140) cur = s.id;
    });
    document.querySelectorAll('.nav-link').forEach(l => {
        l.classList.toggle('active-link', l.getAttribute('href') === '#' + cur);
    });
}, { passive: true });

// ── Scroll-to-top ──
const topBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
    topBtn.classList.toggle('active', window.pageYOffset > 400);
}, { passive: true });
topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ── Contact form ──
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        const form = e.target;
        const btn  = document.getElementById('submitBtn');
        const txt  = btn.querySelector('.btn-text');
        const ico  = btn.querySelector('.btn-icon');

        btn.disabled = true;
        txt.textContent = 'Sending…';
        ico.className   = 'fas fa-circle-notch fa-spin btn-icon';

        fetch(form.action, { method: 'POST', body: new FormData(form), mode: 'no-cors' });

        setTimeout(() => {
            btn.classList.add('success');
            txt.textContent = 'Message Sent!';
            ico.className   = 'fas fa-check-circle btn-icon';
            form.reset();
            setTimeout(() => {
                btn.classList.remove('success');
                btn.disabled    = false;
                txt.textContent = 'Send Message';
                ico.className   = 'fas fa-paper-plane btn-icon';
            }, 3000);
        }, 900);
    });
}

// ── Smooth anchor scroll ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
        e.preventDefault();
        const t = document.querySelector(this.getAttribute('href'));
        if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});