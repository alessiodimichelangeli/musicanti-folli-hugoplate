// main script
(function () {
  "use strict";

  // Dropdown Menu Toggler For Mobile
  // ----------------------------------------
  const dropdownMenuToggler = document.querySelectorAll(
    ".nav-dropdown > .nav-link",
  );

  dropdownMenuToggler.forEach((toggler) => {
    toggler?.addEventListener("click", (e) => {
      e.target.closest(".nav-item").classList.toggle("active");
    });
  });


  // Testimonial Slider
  // ----------------------------------------
  new Swiper(".testimonial-slider", {
    spaceBetween: 24,
    loop: false,
    pagination: {
      el: ".testimonial-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

  
})();

document.addEventListener('DOMContentLoaded', function() {
  // Seleziona la lista di link del menu mobile
  const menuLinksContainer = document.getElementById('nav-menu');
  // Seleziona la checkbox che controlla il menu
  const menuToggle = document.getElementById('nav-toggle');

  // Se entrambi gli elementi esistono...
  if (menuLinksContainer && menuToggle) {

    // ...ascolta i click che avvengono al suo interno
    menuLinksContainer.addEventListener('click', function(event) {

      // Se l'elemento cliccato è un link (un tag <a>)...
      if (event.target.tagName === 'A') {
        // ...deseleziona la checkbox per forzare la chiusura del menu.
        menuToggle.checked = false;
      }
    });
  }
});