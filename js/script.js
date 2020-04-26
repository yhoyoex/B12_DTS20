// ==================== Start menu responsive ====================
menu = () => {
  var menu = document.getElementById("top_menu");
  if (menu.className === "header-right") {
    menu.className += " responsive";
  } else {
    menu.className = "header-right";
  }
}

view_content = (content) => {
  var view = document.getElementById(content);
  window.scrollTo({
    top: view.offsetTop - 100,
    behavior: 'smooth'
  });
  menu();
}
// ==================== end menu responsive ====================

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

send_email = () => {
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;
  if(nama === '') {
    document.getElementById("alert_kontak").style.backgroundColor="#e74c3c";
    document.getElementById("alert_kontak").style.display='block';
    document.getElementById("alert_status").innerHTML = "Nama wajib diisi";
  } else if(email === '') {
    document.getElementById("alert_kontak").style.backgroundColor="#e74c3c";
    document.getElementById("alert_kontak").style.display='block';
    document.getElementById("alert_status").innerHTML = "Alamat email wajib diisi";
  } else if(pesan === '') {
    document.getElementById("alert_kontak").style.backgroundColor="#e74c3c";
    document.getElementById("alert_kontak").style.display='block';
    document.getElementById("alert_status").innerHTML = "Pesan wajib diisi";
  } else {
    document.getElementById("alert_kontak").style.backgroundColor="#2ecc71";
    document.getElementById("alert_kontak").style.display='block';
    document.getElementById("alert_status").innerHTML = `Terimakasih ${nama} telah menghubungi kami`;
    document.getElementById("form_kontak").reset();
  }

}
