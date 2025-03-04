console.log("El script está conectado correctamente.");

 document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll(".slide");
  let index = 0;

  function changeSlide() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }

  setInterval(changeSlide, 3000); // Cambia cada 3 segundos
});
 

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  menuToggle.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
  });
});
