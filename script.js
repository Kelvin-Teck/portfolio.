const prevBtn = document.querySelector(".prev");//previous button
const nextBtn = document.querySelector(".next");//next button

let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-item");
const totalSlides = slides.length;// total length of Slides

// Show Slide 
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

// Move the Slide
function moveSlide(step) {
  slideIndex = (slideIndex + step + totalSlides) % totalSlides;
  showSlide(slideIndex);
}


nextBtn.addEventListener("click", () => {
  moveSlide(1);
});

prevBtn.addEventListener('click', () => {
  moveSlide(-1)
})

// Auto slide every 3 seconds
setInterval(() => moveSlide(1), 3000);

// Initial display
showSlide(slideIndex);
