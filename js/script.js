// ==================== Start SLider ====================
var slideIndex = 1;
showSlides(slideIndex);

plusSlides = (n) => {
  clearTimeout(time_out);
  showSlides(slideIndex += n);
}

currentSlide = (n) => {
  clearTimeout(time_out);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (y = 0; y < dots.length; y++) {
    dots[y].className = dots[y].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  slideIndex++;
  timer(slides,slideIndex);
}

function timer(slides, slideIndex) {
  if (slideIndex > slides.length) {slideIndex = 1}
  time_out = setTimeout("showSlides(slideIndex)", 5000);
}
// ==================== End SLider ====================
