
// testimonial slide function

var swiper = new Swiper('.swiper-container', {
  loop: true, // enable infitinte loop
  navigation: {
    nextEl: '.swiper-button-next', 
    prevEl:'.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})


//toggle about details
 
function toggleContent(element){
  var paragraph = element.nextElementSibling;
  if(paragraph.style.display ==='block'){
    paragraph.style.display = 'none';
  }else {
    paragraph.style.display = 'block';
  }
}