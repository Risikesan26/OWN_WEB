// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

const aboutText = "I design intelligent systems that merge AI and robotics to shape a smarter future";

let index = 0;
function typeWriter() {
  if (index < aboutText.length) {
    document.getElementById("aboutText").innerHTML += aboutText.charAt(index);
    index++;
    setTimeout(typeWriter, 30); // Adjust typing speed here
  }
}
window.addEventListener("DOMContentLoaded", typeWriter);
