// Smooth scrolling for navigation links
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

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Reveal animations
function revealElements() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;

  reveals.forEach(reveal => {
    const elementTop = reveal.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealElements);
revealElements(); // Initial check

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Simulate form submission
  setTimeout(() => {
    document.getElementById('successModal').style.display = 'flex';
    this.reset();
  }, 1000);
});

function closeModal() {
  document.getElementById('successModal').style.display = 'none';
}

// Close modal when clicking outside
document.getElementById('successModal').addEventListener('click', function (e) {
  if (e.target === this) {
    closeModal();
  }
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 150);
  }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Skills animation on scroll
const skillCards = document.querySelectorAll('.skill-card');
const animateSkills = () => {
  skillCards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 100) {
      setTimeout(() => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.opacity = '1';
      }, index * 100);
    }
  });
};

// Set initial state for skills
skillCards.forEach(card => {
  card.style.transform = 'translateY(30px) scale(0.9)';
  card.style.opacity = '0';
  card.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', animateSkills);

// Project cards hover effect
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-10px) scale(1.02)';
  });

  card.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Add loading animation
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';

  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});
