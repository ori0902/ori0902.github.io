// ===================================
// RESEARCH PORTFOLIO - INTERACTIVE JS
// ===================================

// Particle Animation Background
class ParticleBackground {
    constructor() {
        this.canvas = document.getElementById('particle-canvas');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mousePosition = { x: 0, y: 0 };
        
        this.init();
    }
    
    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => {
            this.mousePosition.x = e.clientX;
            this.mousePosition.y = e.clientY;
        });
        
        // Create particles
        const particleCount = window.innerWidth < 768 ? 30 : 60;
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                color: Math.random() > 0.5 ? 'rgba(70, 29, 124, 0.5)' : 'rgba(253, 208, 35, 0.3)'
            });
        }
        
        this.animate();
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw particles
        this.particles.forEach((particle, i) => {
            // Move particles
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Boundary check
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color;
            this.ctx.fill();
            
            // Connect nearby particles
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[j].x - particle.x;
                const dy = this.particles[j].y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.strokeStyle = `rgba(70, 29, 124, ${0.2 * (1 - distance / 150)})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            }
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Smooth Scrolling
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

// Navigation Background on Scroll
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Active Navigation Link
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section, .hero');

function updateActiveLink() {
    let current = '';
    const scrollPos = window.pageYOffset + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.project-card, .publication-card, .skill-category').forEach(el => {
    observer.observe(el);
});

// Project Modal Functions
function openProjectModal(projectId) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    
    const projects = {
        'dnk': {
            title: 'Deep Neural Kernel Flamelet Modeling',
            description: `
                <h2>Revolutionary Machine Learning for Combustion</h2>
                <p><strong>Problem:</strong> Traditional flamelet tables for turbulent combustion modeling suffer from exponentially 
                growing memory requirements as dimensionality increases. A 4D table requires 4-7 GB, making higher-dimensional 
                tables infeasible for practical simulations.</p>
                
                <h3>The Solution: Hybrid DNK Framework</h3>
                <p>This research introduces a groundbreaking hybrid approach that combines:</p>
                <ul>
                    <li><strong>Deep Neural Networks:</strong> Transform control variables into optimized latent space</li>
                    <li><strong>Kernel Regression:</strong> RBF kernels with anchor points ensure stability during time integration</li>
                    <li><strong>SOBC Clustering:</strong> Species grouped by correlation for efficient training</li>
                </ul>
                
                <h3>Key Results</h3>
                <ul>
                    <li>✅ <strong>99.99% memory reduction:</strong> 7 GB → 800 KB</li>
                    <li>✅ <strong>7240× compression ratio</strong> across temperatures</li>
                    <li>✅ <strong>High accuracy:</strong> 1.4% ignition delay error</li>
                    <li>✅ <strong>Validated:</strong> ECN Spray A simulations (800K-1100K)</li>
                </ul>
                
                <h3>Impact & Applications</h3>
                <p>This framework enables:</p>
                <ul>
                    <li>High-dimensional flamelet tables (5D, 6D+) previously infeasible</li>
                    <li>GPU acceleration for faster simulations</li>
                    <li>Scalability to complex fuel mechanisms</li>
                    <li>Foundation for next-generation combustion models</li>
                </ul>
                
                <div class="modal-cta">
                    <a href="https://doi.org/10.1016/j.combustflame.2025.114635" class="btn btn-primary" target="_blank">
                        Read Full Paper in Combustion & Flame →
                    </a>
                </div>
            `
        },
        'plasma': {
            title: 'Plasma-Assisted Combustion Kinetics',
            description: `
                <h2>Non-Equilibrium Plasma Effects on Iso-Octane</h2>
                <p><strong>Objective:</strong> Investigate plasma-assisted pyrolysis and oxidation kinetics using a 
                custom-built plasma flow reactor to understand low-temperature chemistry enhancement.</p>
                
                <h3>Experimental Setup</h3>
                <ul>
                    <li><strong>Flow Reactor:</strong> Plasma-coupled design with nanosecond pulses</li>
                    <li><strong>Temperature Range:</strong> 300K - 1300K (isothermal conditions)</li>
                    <li><strong>Plasma:</strong> 20kV pulses at 0.9-3 kHz</li>
                    <li><strong>Analysis:</strong> GC-MS with FID/TCD detection</li>
                </ul>
                
                <h3>Key Findings</h3>
                <ul>
                    <li>✅ Enhanced fuel decomposition at T < 900K</li>
                    <li>✅ Linear rate vs. temperature for plasma-assisted pyrolysis</li>
                    <li>✅ Transition in reactivity mechanism at T > 550K</li>
                    <li>✅ Formation of acetone, acetaldehyde, iso-butenal from plasma reactions</li>
                </ul>
                
                <h3>Significance</h3>
                <p>This work provides crucial experimental data for developing plasma-specific kinetic mechanisms, 
                advancing low-temperature plasma (LTP) ignition technology for multi-mode engines.</p>
            `
        },
        'tls': {
            title: 'Two-Level Simulation for Premixed Flames',
            description: `
                <h2>Multi-Scale Turbulence Modeling</h2>
                <p><strong>Goal:</strong> Assess the Two-Level Simulation (TLS) model for capturing large-scale and 
                small-scale physics in turbulent premixed flames.</p>
                
                <h3>TLS Methodology</h3>
                <ul>
                    <li><strong>Scale Decomposition:</strong> Flow variables split into large-scale (LS) and small-scale (SS) components</li>
                    <li><strong>3D + 1D Grid:</strong> LS solved on 3D grid, SS on embedded 1D lines</li>
                    <li><strong>No Filtering:</strong> Unlike LES, avoids filtering challenges</li>
                </ul>
                
                <h3>Validation Approach</h3>
                <p>A priori analysis performed on turbulent premixed planar flame:</p>
                <ul>
                    <li>DNS dataset for validation</li>
                    <li>Methane-air chemistry (4-step, 8-species mechanism)</li>
                    <li>256³ grid resolution</li>
                    <li>Progress variable tracking (c = 0.2, 0.8, 0.95)</li>
                </ul>
                
                <h3>Results</h3>
                <ul>
                    <li>✅ <strong>High correlation:</strong> χ = 0.89-0.96 for velocity derivatives</li>
                    <li>✅ <strong>Assumption validation:</strong> Both TLS assumptions verified</li>
                    <li>✅ Captured SS physics: vorticity dynamics, scalar dissipation</li>
                </ul>
            `
        }
    };
    
    if (projects[projectId]) {
        modalBody.innerHTML = `
            <h2 class="modal-title">${projects[projectId].title}</h2>
            ${projects[projectId].description}
        `;
        modal.style.display = 'block';
    }
}

function closeProjectModal() {
    document.getElementById('project-modal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target == modal) {
        closeProjectModal();
    }
}

// Initialize particle background
document.addEventListener('DOMContentLoaded', () => {
    new ParticleBackground();
    
    // Initial active link update
    updateActiveLink();
});

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = counter.innerText;
        const isPercentage = target.includes('%');
        const isMultiplier = target.includes('×');
        const numericValue = parseFloat(target);
        
        let current = 0;
        const increment = numericValue / 50;
        const duration = 2000;
        const stepTime = duration / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
                clearInterval(timer);
                current = numericValue;
            }
            
            if (isPercentage) {
                counter.innerText = Math.floor(current) + '%';
            } else if (isMultiplier) {
                counter.innerText = Math.floor(current) + '×';
            } else {
                counter.innerText = Math.floor(current);
            }
        }, stepTime);
    });
}

// Trigger counter animation when hero is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            heroObserver.unobserve(entry.target);
        }
    });
});

const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroObserver.observe(heroSection);
}
