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



document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("scrollToTopBtn");

  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  btn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});


// efecto logo

const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  logo.classList.toggle('rotating');
});


