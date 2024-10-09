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
