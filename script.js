


document.addEventListener("DOMContentLoaded", function (){
  
  const carouselItems = document.querySelectorAll(".img-bg");

  let currentIndex = 0;

  function showItem(index) {
    carouselItems.forEach((item, i) =>{
      item.style.display = i === index ? "block" : "none";

    });
  }

  function nextItem(){
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showItem(currentIndex);
  }

  //initial display
  showItem(currentIndex);

  //automatically change every 5 sec(5000 milliseconds)
setInterval(nextItem,6000);
})


document.addEventListener('DOMContentLoaded', function () {
const mySwiper = new Swiper(".testi-content swiper-wrapper", {
  loop: true, // Enable continuous loop
  autoplay: {
    delay: 5000, //autoplay delay 5seconds
  },

  pagination: {
    el: ".swiper-pagination",
  },
})
})




