/*
 * Shards of a Paradox - Landing Page Scripts
 * A fantasy roleplaying server in Conan Exiles
 */

document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const navContainer = document.querySelector('.nav-container');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const fadeElements = document.querySelectorAll('.fade-in');
    const scaleElements = document.querySelectorAll('.scale-in');
    const galleryImages = document.querySelectorAll('.gallery-image img');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeModal = document.querySelector('.close-modal');
    
    // Add mobile menu to the DOM
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = `
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#characters">Characters</a></li>
            <li><a href="#community">Community</a></li>
            <li><a href="#events-gallery">Events</a></li>
            <li><a href="#world">World</a></li>
            <li><a href="#server">Server Details</a></li>
        </ul>
        <a href="#discord" class="btn-primary">Join Discord</a>
    `;
    navContainer.appendChild(mobileMenu);
    
    // Image Gallery Modal
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.getAttribute('data-full') || this.src;
            modalCaption.innerHTML = this.alt;
            
            // Prevent scrolling when modal is open
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal when clicking X
    closeModal.addEventListener('click', function() {
        modal.style.display = "none";
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modal with escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" && modal.style.display === "block") {
            modal.style.display = "none";
            document.body.style.overflow = 'auto';
        }
    });
    
    // Navigation scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navContainer.classList.add('scrolled');
        } else {
            navContainer.classList.remove('scrolled');
        }
        
        // Animate elements when they come into view
        animateOnScroll();
    });
    
    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        
        // Toggle between hamburger and close icon
        const icon = mobileMenuToggle.querySelector('i');
        if (mobileMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && !mobileMenuToggle.contains(event.target) && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Close mobile menu when clicking on a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            // Skip for links with href="#"
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Ensure smooth scrolling is enabled globally on HTML element
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Animate elements when they come into view
    function animateOnScroll() {
        const windowHeight = window.innerHeight;
        const triggerPoint = windowHeight * 0.8;
        
        // Fade in animations
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerPoint) {
                element.classList.add('visible');
            }
        });
        
        // Scale in animations
        scaleElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerPoint) {
                element.classList.add('visible');
            }
        });
    }
    
    // Initialize animations on page load
    setTimeout(animateOnScroll, 300);
    
    // Add animation classes to elements
    addAnimationClasses();
    
    // Function to add animation classes to elements
    function addAnimationClasses() {
        // Add fade-in class to section headings and make them visible immediately
        document.querySelectorAll('.section-heading').forEach(heading => {
            heading.classList.add('fade-in');
            heading.classList.add('visible');
        });
        
        // Add fade-in class to feature cards
        document.querySelectorAll('.feature-card').forEach((card, index) => {
            card.classList.add('fade-in');
            card.style.transitionDelay = `${index * 0.1}s`;
        });
        
        // Add fade-in class to testimonials
        document.querySelectorAll('.testimonial').forEach((testimonial, index) => {
            testimonial.classList.add('fade-in');
            testimonial.style.transitionDelay = `${index * 0.1}s`;
        });
        
        // Add scale-in class to gallery items
        document.querySelectorAll('.gallery-item').forEach((item, index) => {
            item.classList.add('scale-in');
            item.style.transitionDelay = `${index * 0.1}s`;
        });
        
        // Add fade-in class to news cards
        document.querySelectorAll('.news-card').forEach((card, index) => {
            card.classList.add('fade-in');
            card.style.transitionDelay = `${index * 0.1}s`;
        });
        
        // Add fade-in class to event items
        document.querySelectorAll('.event-item').forEach((item, index) => {
            item.classList.add('fade-in');
            item.style.transitionDelay = `${index * 0.1}s`;
        });
    }
    
    // Initialize animations on page load
    setTimeout(animateOnScroll, 300);
}); 