// NAVBAR SCROLL
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    const navTop = nav.offsetTop;
  
    if (window.scrollY > navTop) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
  
  // SMOTH SCROLL 
  document.querySelectorAll('.nav_links').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
