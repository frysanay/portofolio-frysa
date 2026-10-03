/* ==========================================
   FRYSA NAYLA AYU - PORTFOLIO INTERACTIVITY
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  /* ------------------------------------------
     1. SCROLL REVEAL ANIMATION
     ------------------------------------------ */
  const revealElements = document.querySelectorAll('.reveal-element');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });


  /* ------------------------------------------
     2. SKILL PROGRESS BAR ANIMATION
     ------------------------------------------ */
  const skillSection = document.getElementById('skills');
  const skillBars = document.querySelectorAll('.skill-progress-bar');
  let animatedSkills = false;

  if (skillSection && skillBars.length > 0) {
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animatedSkills) {
          skillBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-percentage');
            if (targetWidth) {
              bar.style.width = targetWidth + '%';
            }
          });
          animatedSkills = true; // Animate only once
        }
      });
    }, {
      threshold: 0.2
    });

    skillObserver.observe(skillSection);
  }


  /* ------------------------------------------
     3. FLOATING NAV ACTIVE SPY
     ------------------------------------------ */
  const navLinks = document.querySelectorAll('.nav-link-item');
  const sections = document.querySelectorAll('section[id]');

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    threshold: 0.3
  });

  sections.forEach(section => {
    spyObserver.observe(section);
  });


  /* ------------------------------------------
     4. CLICK TO COPY EMAIL FUNCTIONALITY
     ------------------------------------------ */
  const emailCard = document.getElementById('email-contact-card');
  const copyToast = document.getElementById('copy-toast');

  if (emailCard && copyToast) {
    emailCard.addEventListener('click', (e) => {
      // Prevent immediate navigation if clicking inside link
      const emailText = 'frysanaylaayu@gmail.com';
      navigator.clipboard.writeText(emailText).then(() => {
        copyToast.classList.add('show');
        setTimeout(() => {
          copyToast.classList.remove('show');
        }, 2500);
      }).catch(err => {
        console.log('Clipboard fallback', err);
      });
    });
  }

});
