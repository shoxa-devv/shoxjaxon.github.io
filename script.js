document.addEventListener('DOMContentLoaded', () => {
  
  // --- HEADER SCROLL EFFECT ---
  const header = document.getElementById('header');
  const backToTop = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      backToTop.style.opacity = '1';
      backToTop.style.pointerEvents = 'auto';
      backToTop.style.transform = 'translateY(0)';
    } else {
      header.classList.remove('scrolled');
      backToTop.style.opacity = '0';
      backToTop.style.pointerEvents = 'none';
      backToTop.style.transform = 'translateY(10px)';
    }
  });

  // Initial call to hide back to top on load
  backToTop.style.opacity = '0';
  backToTop.style.pointerEvents = 'none';
  backToTop.style.transform = 'translateY(10px)';

  // --- MOBILE NAV MENU TOGGLE ---
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // --- SMOOTH SCROLL BACK TO TOP ---
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // --- ACTIVE NAVBAR LINKS ON SCROLL ---
  const sections = document.querySelectorAll('section');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      // Offset by navbar height for exact trigger
      if (window.scrollY >= (sectionTop - 120)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // --- INTERSECTION OBSERVER FOR SCROLL REVEAL ---
  const reveals = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Stop observing once revealed to maintain state
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(el => revealObserver.observe(el));

  // --- SKILL CARD HOVER LIGHTSPOT EFFECT ---
  const skillCards = document.querySelectorAll('.skill-card');
  
  skillCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // --- TELEGRAM BOT CONFIGURATION ---
  // Agar xabarlarni to'g'ridan-to'g'ri kanalingizga kelishini xohlasangiz, o'z Telegram botingiz tokenini shu yerga yozing.
  // Bot kanalingizga (@shoxjaxon_metinov) admin qilib qo'shilgan va xabar yozish huquqiga ega bo'lishi kerak.
  const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN'; // Masalan: '123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ'
  const TELEGRAM_CHAT_ID = '@shoxjaxon_metinov';

  // --- CONTACT FORM SUBMISSION ---
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const tgUsername = document.getElementById('tg-username').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !tgUsername || !message) {
      formStatus.textContent = "Iltimos, barcha maydonlarni to'ldiring.";
      formStatus.className = "form-status error";
      return;
    }

    if (TELEGRAM_BOT_TOKEN && TELEGRAM_BOT_TOKEN !== 'YOUR_BOT_TOKEN') {
      formStatus.textContent = "Xabar yuborilmoqda...";
      formStatus.className = "form-status success";
      
      const text = `📬 Yangi xabar (Portfolio)!\n\n👤 Ism: ${name}\n✈️ Telegram: ${tgUsername}\n💬 Xabar: ${message}`;
      
      fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: text
        })
      })
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          formStatus.textContent = "Xabar kanalingizga yuborildi! Tez orada bog'lanamiz.";
          formStatus.className = "form-status success";
          contactForm.reset();
          setTimeout(() => {
            formStatus.textContent = "";
            formStatus.className = "form-status";
          }, 4000);
        } else {
          throw new Error(data.description);
        }
      })
      .catch(error => {
        console.error("Telegram API Error:", error);
        fallbackRedirect(name, tgUsername, message);
      });
    } else {
      fallbackRedirect(name, tgUsername, message);
    }
  });

  function fallbackRedirect(name, tgUsername, message) {
    formStatus.textContent = "Telegramga yo'naltirilmoqda...";
    formStatus.className = "form-status success";

    const formattedMessage = `Salom Shoxjaxon! Men portfoliongiz orqali yozyapman.%0A%0A👤 Ism: ${encodeURIComponent(name)}%0A✈️ Telegram: ${encodeURIComponent(tgUsername)}%0A💬 Xabar: ${encodeURIComponent(message)}`;
    const telegramUrl = `https://t.me/shoxa_devv?text=${formattedMessage}`;

    setTimeout(() => {
      window.open(telegramUrl, '_blank');
      contactForm.reset();
      formStatus.textContent = "";
      formStatus.className = "form-status";
    }, 1200);
  }

  // --- INTERACTIVE CANVAS PARTICLES ---
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');
  
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  
  let particles = [];
  const particleCount = Math.min(60, Math.floor((width * height) / 25000)); // Dynamic particle density
  const connectionDistance = 110;
  const mouse = { x: null, y: null, radius: 150 };

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initParticles();
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.size = Math.random() * 2 + 1;
      this.baseAlpha = Math.random() * 0.3 + 0.15;
      this.alpha = this.baseAlpha;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Bound collisions
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Interactive mouse response
      if (mouse.x !== null && mouse.y !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const distance = Math.hypot(dx, dy);
        
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          
          // Gently push particles away
          this.x += Math.cos(angle) * force * 1.2;
          this.y += Math.sin(angle) * force * 1.2;
          this.alpha = Math.min(0.8, this.baseAlpha + force * 0.5);
        } else {
          if (this.alpha > this.baseAlpha) {
            this.alpha -= 0.02;
          }
        }
      } else {
        if (this.alpha > this.baseAlpha) {
          this.alpha -= 0.02;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 255, 136, ${this.alpha})`;
      ctx.fill();
    }
  }

  function initParticles() {
    particles = [];
    const count = Math.min(80, Math.floor((width * height) / 20000));
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.hypot(dx, dy);

        if (distance < connectionDistance) {
          const alpha = (1 - (distance / connectionDistance)) * 0.12;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 255, 136, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    
    connectParticles();
    requestAnimationFrame(animate);
  }

  initParticles();
  animate();
});
