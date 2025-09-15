        document.addEventListener('DOMContentLoaded', function() {
            // Smooth scroll and fade-in animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    }
                });
            }, observerOptions);

            // Observe all screenshot containers
            document.querySelectorAll('.screenshot-container').forEach(el => {
                observer.observe(el);
            });

            // Back button functionality
            document.querySelector('.back-button').addEventListener('click', function() {
                window.history.back();
            });

            // Back to top functionality
            document.querySelector('.back-to-top').addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });

            // Show/hide back to top button based on scroll
            window.addEventListener('scroll', function() {
                const backToTop = document.querySelector('.back-to-top');
                if (window.scrollY > 500) {
                    backToTop.style.opacity = '1';
                    backToTop.style.visibility = 'visible';
                } else {
                    backToTop.style.opacity = '0';
                    backToTop.style.visibility = 'hidden';
                }
            });

            // Initialize back to top button as hidden
            document.querySelector('.back-to-top').style.transition = 'all 0.3s ease';
            document.querySelector('.back-to-top').style.opacity = '0';
            document.querySelector('.back-to-top').style.visibility = 'hidden';
        });

        (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'96ab970975debc57',t:'MTc1NDQ1MjQzNS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();