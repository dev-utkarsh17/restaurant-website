// function toggleMenu() {
//   const navLinks = document.querySelector('.nav-links');
//   navLinks.classList.toggle('active');
// }

// Toggle navigation menu for mobile view
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.getElementById("nav-links");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});