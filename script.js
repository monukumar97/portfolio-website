// ========== Typing Effect ==========
let i = 0, j = 0, currentWord = "", isDeleting = false;
const typedElement = document.querySelector(".typed");
const words = ["Full Stack Developer", "Web Designer", "Programmer", "Tech Enthusiast"];

function type() {
  currentWord = words[i];

  if (isDeleting) {
    typedElement.textContent = currentWord.substring(0, j--);
  } else {
    typedElement.textContent = currentWord.substring(0, j++);
  }

  if (!isDeleting && j === currentWord.length + 1) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, 150);
  }
}
type();

// ========== Navbar Toggle ==========
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// ========== Dark Mode Toggle ==========
const darkToggle = document.getElementById("dark-toggle");
darkToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// ========== Initialize EmailJS ==========
(function () {
  emailjs.init("4BjuFIzzQKw05fGPL"); // ✅ Your Public Key
})();

// ========== Contact Form Handler ==========
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_36dy30r", "template_5yv5dpu", this)
    .then(() => {
      document.getElementById("status-message").innerText = "✅ Message sent successfully!";
      document.getElementById("status-message").style.color = "green";
      this.reset();
    }, (error) => {
      console.error("EmailJS Error:", error);
      document.getElementById("status-message").innerText = "❌ Failed to send. Try again.";
      document.getElementById("status-message").style.color = "red";
    });
});
