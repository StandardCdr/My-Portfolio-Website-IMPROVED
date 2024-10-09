const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");
menuIcon.onclick = () => {
  navLinks.classList.toggle("active");
};

/*Scroll Reveal */

ScrollReveal({
  distance: "25px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal("#profile", { origin: "top" });
ScrollReveal().reveal("#about", { origin: "bottom" });
ScrollReveal().reveal("#skills", { origin: "left" });
ScrollReveal().reveal("#projects", { origin: "right" });
ScrollReveal().reveal("#contact", { origin: "bottom" });

/*typing */

var typed = new Typed(".typing", {
  strings: ["Front End Developer", "Web Developer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

function changeImage(x, image) {
  if (x == 1) {
    image.src = "./assets/4.jpg";
  }
  if (x == 2) {
    image.src = "./assets/2.jpg";
  }
}
