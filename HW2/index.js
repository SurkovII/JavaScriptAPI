let slideIndex = 0;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let i;
let slider = document.querySelectorAll(".slider");
let slides = document.querySelectorAll(".imgSlider");
let dots = document.querySelector(".dots");
let dotsEl = document.querySelectorAll(".dot");
let time = 2000;
let clickNext = false;
let clickPrev = false;

nextBtn.addEventListener('click', function() {
    slideIndex;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dotsEl.length; i++) {
        dotsEl[i].classList.remove('dot_active');
    }

    if (slideIndex <= 0) {
        slideIndex = slides.length;
    }
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    dotsEl[slideIndex - 1].classList.add('dot_active');

})

prevBtn.addEventListener('click', function() {
    slideIndex = slideIndex - 2;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dotsEl.length; i++) {
        dotsEl[i].classList.remove('dot_active');
    }

    if (slideIndex <= 0) {
        slideIndex = slides.length;
    }
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    dotsEl[slideIndex - 1].classList.add('dot_active');

})


for (let i = 0; i < dotsEl.length; i++) {
    dotsEl[i].addEventListener('click', function() {
        slideIndex = i + 1;

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dotsEl.length; i++) {
            dotsEl[i].classList.remove('dot_active');
        }
        if (slideIndex <= 0) {
            slideIndex = slides.length;
        }
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        dotsEl[slideIndex - 1].classList.add('dot_active');
    })

}



function slideShow() {

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dotsEl.length; i++) {
        dotsEl[i].classList.remove('dot_active');
    }

    if (slideIndex <= 0) {
        slideIndex = slides.length;

    }
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    dotsEl[slideIndex - 1].classList.add('dot_active');
    slideIndex++;
    setTimeout(slideShow, time);
}


slideShow();