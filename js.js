let slideIndex1 = 1;
let slideIndex2 = 1;

showSlides1(slideIndex1);
showSlides2(slideIndex2);

// Controls for slideshow 1
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function showSlides1(n) {
  let slides = document.getElementsByClassName("Slides1");

  if (n > slides.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides.length}

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex1 - 1].style.display = "block";
}

// Controls for slideshow 2
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function showSlides2(n) {
  let slides = document.getElementsByClassName("Slides2");

  if (n > slides.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides.length}

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex2 - 1].style.display = "block";
}














const image = document.getElementById('myImage');

image.addEventListener('mouseover', function() {
  // Set the scale transformation on mouse over
  image.style.transform = 'scale(1.5)';
  image.style.transition = 'transform 0.3s ease'; // Add smooth transition
});

image.addEventListener('mouseout', function() {
  // Reset the scale transformation on mouse out
  image.style.transform = 'scale(1)';
});