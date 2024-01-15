const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

document.querySelector('.arrow.arrow_left').addEventListener('click', function() {
    currentSlideIndex--;
    changeSlide(currentSlideIndex);
});

document.querySelector('.arrow.arrow_right').addEventListener('click', function() {
    currentSlideIndex++;
    changeSlide(currentSlideIndex);
});

document.addEventListener('DOMContentLoaded', function() {
    var dotsContainer = document.querySelector('.dots');
    slides.forEach(function(slide, index) {
        var dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('dot_selected');
        dot.setAttribute('data-slide', index);
        dotsContainer.appendChild(dot);

        dot.addEventListener('click', function() {
            currentSlideIndex = index;
            changeSlide(index);
        });
    });
});

function changeSlide(index) {
	
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    currentSlideIndex = index;

    var bannerImage = document.querySelector('.banner-img');
    bannerImage.src = slides[index].image;
    var tagline = document.querySelector('#banner p');
    tagline.innerHTML = slides[index].tagLine;

    var dots = document.querySelectorAll('.dot');
    dots.forEach(function(dot, idx) {
        if (idx === index) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

changeSlide(0);