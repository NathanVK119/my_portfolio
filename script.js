 // Project Details
        const projectDetails = {
            project1: {
                title: "Local Web-Based School Portal for Poblacion Elementary School",
                description: "This project was a requirement for my On-the-Job Training (OJT) from February 19, 2025, to June 16, 2025, completing a total of 486 hours. I was assigned to Poblacion Elementary School, where I proposed and developed a local web-based School Portal System. The system was built to provide a more organized and accessible way for the school to manage student data and teaching resources. It consists of two main modules:<br>1. Student Registration Module – This module stores the student’s complete information, including section, year level, adviser, and enrollment status. It features a search and filtering function for easier management. This module was suggested and is now handled by the Administrative Officer II, Mr. Dexter T. Sales.<br>2. Data Management Module – This was requested by the school principal, Mrs. Maria Reishelle Dueñas. It functions like a simplified Google Drive or file manager for teachers, solving the issue of missing or disorganized files from DepEd's online system. Since it is locally hosted, uploading and retrieving files is much faster and does not require internet, only a connection to the same Wi-Fi network within the school.",
                challenges: [
                    "I was the sole developer of this project, which meant I had to handle everything, from backend to frontend, design, database, and even testing.",
                    "I was not very experienced in backend development and full system setup.",
                    "Due to my limited time and hours, I was not able to implement a role-based access system for admin and teachers.",
                    "Designing the system for responsiveness (mobile/tablet) was not prioritized, so it only performs well on laptops/desktops."
                ],
                solutions: [
                    "I utilized AI tools like ChatGPT, Cursor AI, and Codeium to improve productivity, especially in the backend part where I had less experience. These tools helped me generate and fix code faster and also improve logic.",
                    "I created a BAT script file that runs the local server (XAMPP) and opens the system automatically, so the admin no longer needs to manually launch it through VSCode or command line. The system acts like a web app with a shortcut icon on the server laptop/PC.",
                    "For network setup, I used basic networking knowledge, ensuring that client laptops could access the system using the server’s IP address (e.g., http://192.168.x.x/POBLACION) as long as they are connected to the same Wi-Fi.",
                ],
                technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL", "Cypress", "VSCode","XAMPP", "AI Tools", "BAT Script"],
                results: [
                    "The system was successfully deployed and installed on the school’s server Laptop/PC.",
                    "Teachers now have a reliable file storage system, and student registration has become more organized and easier to manage.",
                    "The project was well-received by both the principal and the administrative officer, and it is now actively being used in the school.",
                    "It served as a real-world contribution during my OJT, which made my experience meaningful."
                ],
                additionals: [
                    "Timeline: February 19, 2025 – June 16, 2025",
                    "Location: Poblacion Elementary School",
                    "System Type: Local Web-Based School Portal",
                    "Modules: Student Registration and File Management",
                    "Hosting: Local server via XAMPP",
                    "Access: IP-based access through the same Wi-Fi network",
                    "Reference:<br>Mrs. Maria Reishelle Dueñas<br>Principal II – Poblacion Elementary School<br>Contact: 09190937804<br>Mr. Dexter T. Sales<br>Administrative Officer II – Poblacion Elementary School<br>Contact: 09175037019"
                ],
                learned: [
                    "This project significantly helped me grow as a full-stack web developer and introduced me to the field of QA testing. Through manual and automated testing, I was able to find and fix bugs, improve input validation, and analyze system flaws. I also gained experience in basic cybersecurity practices, particularly in securing local systems. Despite the technical challenges and limited time, the system was successfully delivered and is now in use. I am proud to say that I left a real-world contribution to the school while developing both my technical and problem-solving skills.<br>In the future, I plan to improve this system by adding Role-Based Access Control (RBAC) for better security, improving its responsive design, and upgrading its UI/UX for a more user-friendly experience."
                ]
            },
            project2: {
                title: "QA Manual and Automation Testing for Poblacion Elementary School Portal",
                description: "This QA project was part of my On-the-Job Training (OJT) from February 19, 2025, to June 16, 2025, completing a total of 486 hours. Aside from developing the Poblacion Elementary School Portal System, I also performed Manual and Automation QA testing. I created and executed test cases, bug reports, and test data using Excel, ensuring that the system was validated before deployment. In addition, I developed Cypress automation scripts for end-to-end testing of the Student Registration and Data Management modules. The QA testing helped reduce bugs, resolve issues in both functionality and UI, and allowed me to gain valuable knowledge in QA Manual and Automation practices.",
                challenges: [
                    "I was the sole developer and tester of the project, handling both development and QA tasks.",
                    "Limited time during the OJT period, which made balancing development and testing difficult.",
                    "I was still learning automation testing and proper test case design while applying them in real time.",
                ],
                solutions: [
                    "Conducted QA testing before deployment to ensure fewer bugs and better functionality.",
                    "Applied manual testing through detailed test cases, bug reports, and test data to improve reliability.",
                    "Used Cypress automation scripts to validate critical flows in the Student Registration and Data Management modules.",
                ],
                technologies: ["VSCode","Cypress", "Excel", "Jira", "Chrome", "Firefox", "Browser DevTools"],
                results: [
                    "The system was delivered with fewer bugs and improved functionality due to QA testing.",
                    "UI issues and system flaws were identified and resolved before deployment.",
                    "QA practices supported the overall success of the system implementation.",
                ],
                additionals: [
                    "Timeline: February 19, 2025 – June 16, 2025",
                    "Location: Poblacion Elementary School",
                    "System Type: QA Testing for Local Web-Based School Portal",
                    "Modules Tested: Student Registration and Data Management",
                    "Testing Tools: Excel (Manual Test Case Documentation), Cypress (Automation)",
                    "Reference:<br>Mrs. Maria Reishelle Dueñas<br>Principal II – Poblacion Elementary School<br>Contact: 09190937804<br>Mr. Dexter T. Sales<br>Administrative Officer II – Poblacion Elementary School<br>Contact: 09175037019"
                ],
                learned: [
                    "Through this project, I gained hands-on experience in both manual and automated QA testing. I created and executed test cases for the student registration and data management modules, documented issues through bug reports, and validated fixes to ensure system reliability. By using Cypress for automation, I learned how to implement end-to-end testing that improved testing efficiency and accuracy. I also became more familiar with QA documentation practices, which can be managed through tools like Jira. Overall, this project taught me the importance of thorough testing in delivering a stable system and strengthened my skills in identifying issues, analyzing system performance, and ensuring quality before deployment."
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

                        <div>
                            <h4 class="text-lg font-semibold mb-2">Project Details</h4>
                            <ul class="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                                ${project.additionals.map(additional => `<li>${additional}</li>`).join('')}
                            </ul>
                        </div>

                        <div>
                            <h4 class="text-lg font-semibold mb-2">What I Learned</h4>
                            <p class="text-gray-700 dark:text-gray-300">${project.learned}</p>
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