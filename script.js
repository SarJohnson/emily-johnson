document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1); // Get the ID without '#'
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        const offset = 80; // Adjust this to match the height of your fixed navbar
        const elementPosition = targetElement.offsetTop - offset;
  
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  // Toggle menu when hamburger is clicked
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close menu when a link is clicked
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("active");
    }
  });
});