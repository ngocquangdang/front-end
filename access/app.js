const hamburger = document.querySelector(".toggle");
const navLinks = document.querySelector(".navbar-item");
const links = document.querySelectorAll(".navbar-item li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("responsive");
  console.log("aaaaa")
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});