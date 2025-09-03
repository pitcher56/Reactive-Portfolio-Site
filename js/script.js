// script for the project slideshow
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".project-slide");
  let current = 0;

  // show the first project right away
  slides[current].classList.add("active");

  // event listeners for buttons
  document.getElementById("next-btn").addEventListener("click", () => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length; // go to next
    slides[current].classList.add("active");
  });

  document.getElementById("prev-btn").addEventListener("click", () => {
    slides[current].classList.remove("active");
    current = (current - 1 + slides.length) % slides.length; // go to previous
    slides[current].classList.add("active");
  });
});
