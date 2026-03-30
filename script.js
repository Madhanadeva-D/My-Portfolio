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