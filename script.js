var swiper = new swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/*Header background change on Scroll
let header = document.querySelector("header")

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);  
}) */