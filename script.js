// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Typewriter effect for "About Me" section
const aboutText = "I design intelligent systems that merge AI and robotics to shape a smarter future.";
let index = 0;
function typeWriter() {
  if (index < aboutText.length) {
    document.getElementById("aboutText").innerHTML += aboutText.charAt(index);
    index++;
    setTimeout(typeWriter, 30); // typing speed
  }
}
window.addEventListener("DOMContentLoaded", typeWriter);

// Typed.js for rotating roles under name
document.addEventListener("DOMContentLoaded", () => {
  new Typed("#typed-role", {
    strings: ["Robotics", "Machine Learning", "Computer Vision", "Embedded Systems", "IoT Development", "Tech Education"],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true,
    showCursor: true
  });
});
