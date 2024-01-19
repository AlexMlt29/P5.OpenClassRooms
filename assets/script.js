const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const dotsContainer = document.querySelector(".dots");
const arrowLeft = document.querySelector(".arrow.arrow_left");
const arrowRight = document.querySelector(".arrow.arrow_right");

arrowLeft.addEventListener("click", function () {
  currentSlideIndex--;
  changeSlide(currentSlideIndex);
});

arrowRight.addEventListener("click", function () {
  currentSlideIndex++;
  changeSlide(currentSlideIndex);
});

function showDots() {
  for (let index = 0; index < slides.length; index++) {
    createDots(slides[index], index);
  }
}

function createDots(slide, index) {
  const dot = document.createElement("div");

  dot.classList.add("dot");

  if (index === 0) dot.classList.add("dot_selected");

  dot.setAttribute("data-slide", index);
  dotsContainer.appendChild(dot);

  dot.addEventListener("click", function () {
    currentSlideIndex = index;
    changeSlide(index);
  });
}

function changeSlide(index) {
  if (index >= slides.length) index = 0;
  if (index < 0) index = slides.length - 1;

  currentSlideIndex = index;

  const bannerImage = document.querySelector(".banner-img");

  bannerImage.src = slides[index].image;

  const tagline = document.querySelector("#banner p");

  tagline.innerHTML = slides[index].tagLine;

  const dots = document.querySelectorAll(".dot");

  for (let position = 0; position < dots.length; position++) {
    if (position === index) {
      dots[position].classList.add("dot_selected");
    } else {
      dots[position].classList.remove("dot_selected");
    }
  }
}

showDots();
changeSlide(0);
