 // Project Details
        const projectDetails = {
            project1: {
                title: "University Management System Test Framework",
                description: "Developed a comprehensive test automation framework for a university management system as part of my senior project. The framework enabled automated testing of critical functions including student registration, course management, grade tracking, and administrative tasks.",
                challenges: [
                    "Creating a maintainable and scalable test framework architecture",
                    "Handling dynamic content and AJAX-based page updates",
                    "Managing test data across different test environments",
                    "Implementing proper reporting mechanisms for test results"
                ],
                solutions: [
                    "Implemented Page Object Model design pattern for better maintainability",
                    "Created custom wait strategies to handle dynamic content",
                    "Developed a test data management system using database integration",
                    "Integrated ExtentReports for comprehensive test reporting"
                ],
                technologies: ["Selenium WebDriver", "Java", "TestNG", "Maven", "Jenkins", "ExtentReports", "MySQL"],
                results: [
                    "Achieved 85% test automation coverage for critical system functions",
                    "Reduced manual testing effort by 60%",
                    "Identified and fixed 20+ critical issues before system deployment",
                    "Received an A grade and recognition from the university's IT department"
                ]
            },
            project2: {
                title: "E-commerce Website with Cypress Tests",
                description: "Created a full-stack e-commerce website with comprehensive automated tests using Cypress for the frontend. The project included user authentication, product browsing, shopping cart functionality, and checkout process.",
                challenges: [
                    "Implementing end-to-end testing for complex user flows",
                    "Testing asynchronous operations like API calls and state updates",
                    "Managing test data for different test scenarios",
                    "Ensuring cross-browser compatibility"
                ],
                solutions: [
                    "Created custom Cypress commands for common operations",
                    "Implemented proper waiting strategies for asynchronous operations",
                    "Used fixtures and database seeding for consistent test data",
                    "Set up cross-browser testing with Cypress Dashboard"
                ],
                technologies: ["React", "Node.js", "Express", "MongoDB", "Cypress", "JavaScript", "Tailwind CSS"],
                results: [
                    "Developed a fully functional e-commerce platform with 90% test coverage",
                    "Implemented CI/CD pipeline with GitHub Actions for continuous testing",
                    "Created 50+ automated test cases covering critical user journeys",
                    "Received positive feedback from course instructor and peers"
                ]
            },
            project3: {
                title: "API Testing Framework",
                description: "Designed and implemented an API testing framework using Postman and Newman for a RESTful service. The framework enabled comprehensive testing of API endpoints, request/response validation, and integration testing.",
                challenges: [
                    "Testing complex API dependencies and workflows",
                    "Validating dynamic response schemas",
                    "Managing test data and environment variables",
                    "Integrating API tests into CI/CD pipeline"
                ],
                solutions: [
                    "Created modular test collections for different API functionalities",
                    "Implemented JSON Schema validation for response verification",
                    "Used environment variables for different testing environments",
                    "Set up Newman for command-line execution and CI integration"
                ],
                technologies: ["Postman", "Newman", "JavaScript", "Jenkins", "JSON Schema", "GitHub Actions"],
                results: [
                    "Achieved 95% test coverage for all API endpoints",
                    "Reduced API testing time by 70%",
                    "Identified and fixed 15 API issues during development",
                    "Successfully integrated API tests into the CI/CD pipeline"
                ]
            },
            project4: {
                title: "Student Collaboration App Testing",
                description: "Conducted manual and automated testing for a student collaboration mobile application using Appium. The app allowed students to form study groups, share resources, and schedule study sessions.",
                challenges: [
                    "Testing on both Android and iOS platforms",
                    "Handling different device sizes and orientations",
                    "Testing push notifications and real-time features",
                    "Managing test environments for mobile testing"
                ],
                solutions: [
                    "Implemented a cross-platform test framework using Appium",
                    "Created responsive tests that work across different screen sizes",
                    "Set up mock servers for testing notifications and real-time features",
                    "Used BrowserStack for testing on multiple real devices"
                ],
                technologies: ["Appium", "Java", "TestNG", "Android", "iOS", "BrowserStack", "Maven"],
                results: [
                    "Developed 30+ automated test cases for critical app functions",
                    "Identified and reported 25 bugs during testing",
                    "Improved app stability and user experience",
                    "Received recognition from the development team for quality contributions"
                ]
            },
            project5: {
                title: "Test Case Management System",
                description: "Developed a web-based test case management system for organizing and tracking test cases and results. The system allowed testers to create, organize, and execute test cases, and generate reports on test coverage and results.",
                challenges: [
                    "Designing an intuitive user interface for test management",
                    "Implementing a flexible test case organization system",
                    "Creating comprehensive reporting features",
                    "Ensuring data persistence and reliability"
                ],
                solutions: [
                    "Used React for building a responsive and interactive UI",
                    "Implemented a hierarchical structure for test organization",
                    "Created customizable dashboards and reports",
                    "Used MongoDB for flexible data storage and retrieval"
                ],
                technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "Tailwind CSS", "JWT Authentication"],
                results: [
                    "Created a fully functional test management system",
                    "Implemented features for test case creation, execution, and reporting",
                    "Developed user authentication and role-based access control",
                    "Used the system for managing test cases in other academic projects"
                ]
            },
            project6: {
                title: "Security Testing Project",
                description: "Implemented basic security testing for a web application to identify common vulnerabilities. The project focused on detecting OWASP Top 10 vulnerabilities and implementing security best practices.",
                challenges: [
                    "Understanding different types of security vulnerabilities",
                    "Setting up automated security scanning tools",
                    "Interpreting and validating scan results",
                    "Recommending appropriate security fixes"
                ],
                solutions: [
                    "Used OWASP ZAP for automated security scanning",
                    "Created Python scripts to automate scanning processes",
                    "Implemented manual verification of potential vulnerabilities",
                    "Documented findings and recommended security improvements"
                ],
                technologies: ["OWASP ZAP", "Python", "Selenium", "Jenkins", "HTML/CSS", "JavaScript"],
                results: [
                    "Identified 10+ security vulnerabilities in the target application",
                    "Created a comprehensive security testing report",
                    "Implemented fixes for critical security issues",
                    "Developed a security testing checklist for future projects"
                ]
            }
        };
        
        // Theme Toggle
        const themeToggle = document.getElementById('theme-toggle');
        const html = document.documentElement;
        
        // Check for saved theme preference or use device preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
        
        // Theme toggle button click handler
        themeToggle.addEventListener('click', () => {
            html.classList.toggle('dark');
            localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
        });
        
        // Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Smooth Scrolling for Navigation Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            });
        });
        
        // Active Navigation Link Highlighting
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('text-primary-600', 'dark:text-primary-400');
                link.classList.add('text-gray-600', 'dark:text-gray-300');
                
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.remove('text-gray-600', 'dark:text-gray-300');
                    link.classList.add('text-primary-600', 'dark:text-primary-400');
                }
            });
        });
        
        // Project Modal
        const projectModal = document.getElementById('project-modal');
        const modalContainer = document.getElementById('modal-container');
        const modalTitle = document.getElementById('modal-title');
        const modalContent = document.getElementById('modal-content');
        const closeModal = document.getElementById('close-modal');
        const projectDetailsBtns = document.querySelectorAll('.project-details-btn');
        
        // Open Project Modal
        projectDetailsBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const projectId = btn.getAttribute('data-project');
                const project = projectDetails[projectId];
                
                modalTitle.textContent = project.title;
                
                modalContent.innerHTML = `
                    <div class="space-y-6">
                        <div>
                            <h4 class="text-lg font-semibold mb-2">Project Overview</h4>
                            <p class="text-gray-700 dark:text-gray-300">${project.description}</p>
                        </div>
                        
                        <div>
                            <h4 class="text-lg font-semibold mb-2">Challenges</h4>
                            <ul class="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                                ${project.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div>
                            <h4 class="text-lg font-semibold mb-2">Solutions</h4>
                            <ul class="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                                ${project.solutions.map(solution => `<li>${solution}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div>
                            <h4 class="text-lg font-semibold mb-2">Technologies Used</h4>
                            <div class="flex flex-wrap gap-2">
                                ${project.technologies.map(tech => `<span class="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium">${tech}</span>`).join('')}
                            </div>
                        </div>
                        
                        <div>
                            <h4 class="text-lg font-semibold mb-2">Results</h4>
                            <ul class="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                                ${project.results.map(result => `<li>${result}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                            <a href="https://github.com/johndoe/${projectId}" target="_blank" class="flex-1 bg-gray-800 dark:bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-300 text-center">
                                <i class="fab fa-github mr-2"></i>View on GitHub
                            </a>
                            <a href="https://demo-${projectId}.example.com" target="_blank" class="flex-1 bg-green-600 dark:bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors duration-300 text-center">
                                <i class="fas fa-external-link-alt mr-2"></i>Live Demo
                            </a>
                        </div>
                    </div>
                `;
                
                projectModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
                
                // Animate modal opening
                setTimeout(() => {
                    modalContainer.classList.remove('scale-95', 'opacity-0');
                    modalContainer.classList.add('scale-100', 'opacity-100');
                }, 10);
            });
        });
        
        // Close Project Modal
        closeModal.addEventListener('click', closeProjectModal);
        
        // Close Modal on Outside Click
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                closeProjectModal();
            }
        });
        
        function closeProjectModal() {
            modalContainer.classList.remove('scale-100', 'opacity-100');
            modalContainer.classList.add('scale-95', 'opacity-0');
            
            setTimeout(() => {
                projectModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 300);
        }
        
        // Contact Form Submission
        const contactForm = document.getElementById('contact-form');
        const formMessage = document.getElementById('form-message');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                formMessage.classList.remove('hidden', 'bg-green-100', 'text-green-800', 'dark:bg-green-900', 'dark:text-green-200');
                formMessage.classList.add('bg-red-100', 'text-red-800', 'dark:bg-red-900', 'dark:text-red-200');
                formMessage.textContent = 'Please fill in all fields.';
                return;
            }
            
            // Simulate form submission (in a real application, this would send data to a server)
            formMessage.classList.remove('hidden', 'bg-red-100', 'text-red-800', 'dark:bg-red-900', 'dark:text-red-200');
            formMessage.classList.add('bg-green-100', 'text-green-800', 'dark:bg-green-900', 'dark:text-green-200');
            formMessage.textContent = 'Thank you! Your message has been sent successfully.';
            
            // Reset form
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 5000);
        });
        
        // Back to Top Button
        const backToTopButton = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('hidden');
            } else {
                backToTopButton.classList.add('hidden');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Animate elements when they come into view
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.fade-in').forEach(el => {
            el.classList.remove('fade-in');
            observer.observe(el);
        });
        
        // Initialize skill bars animation
        window.addEventListener('load', () => {
            // Trigger skill bar animations when in view
            const skillBarsObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const skillBars = entry.target.querySelectorAll('.skill-bar');
                        skillBars.forEach(bar => {
                            const width = bar.style.width;
                            bar.style.width = '0%';
                            setTimeout(() => {
                                bar.style.width = width;
                            }, 100);
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            
            const skillSection = document.querySelector('.skill-bar').closest('div').closest('div');
            skillBarsObserver.observe(skillSection);
        });
        
        // Ensure hero section takes full viewport height on all devices
        function adjustHeroHeight() {
            const heroSection = document.getElementById('home');
            const navHeight = document.querySelector('nav').offsetHeight;
            heroSection.style.minHeight = `calc(100vh - ${navHeight}px)`;
        }
        
        window.addEventListener('load', adjustHeroHeight);
        window.addEventListener('resize', adjustHeroHeight);
    
        // Cloudflare Web Analytics
        (function() {
    function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
            var d = b.createElement('script');
            d.innerHTML = "window.__CF$cv$params={r:'9662d46ea431bc4f',t:'MTc1MzY4OTQ5MC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
            b.getElementsByTagName('head')[0].appendChild(d);
        }
    }
    if (document.body) {
        var a = document.createElement('iframe');
        a.height = 1;
        a.width = 1;
        a.style.position = 'absolute';
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 'none';
        a.style.visibility = 'hidden';
        document.body.appendChild(a);
        if ('loading' !== document.readyState)
            c();
        else if (window.addEventListener)
            document.addEventListener('DOMContentLoaded', c);
        else {
            var e = document.onreadystatechange || function() {};
            document.onreadystatechange = function(b) {
                e(b);
                'loading' !== document.readyState && (document.onreadystatechange = e, c());
            };
        }
    }
})();