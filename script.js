/* =========================
   MENÚ MÓVIL
========================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});


/* =========================
   CERRAR MENÚ AL PULSAR
   UNA SECCIÓN
========================= */

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


/* =========================
   CAMBIO DE BARRA AL HACER
   SCROLL
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(25, 21, 18, 0.99)";
    } else {
        navbar.style.background = "rgba(31, 27, 24, 0.97)";
    }

});