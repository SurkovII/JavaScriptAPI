let slideIndex = 0;

function slideShow() {
    const time = 2000;
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let i;
    let slider = document.querySelectorAll(".slider");
    let slides = document.querySelectorAll(".imgSlider");
    let dots = document.querySelectorAll(".dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('dot_active');
    }
    slideIndex++;
    // prevBtn.addEventListener('click', () => {
    //     slideIndex--;
    //     slideShow
    //     // setTimeout(slideShow, time);
    // })
    nextBtn.addEventListener('click', () => {
        const slideIndexNext = slideIndex + 1;
        slideIndex = slideIndexNext
        console.log(slideIndex);


        // setTimeout(slideShow, time);
    })
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }




    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add('dot_active');
    // prevBtn.addEventListener('click', (e) => {
    //         const slide = document.querySelector('img[style="display: block;"]')
    //         console.log(slide);


    //     })
    //     // 
    setTimeout(slideShow, time);
}
slideShow();

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }





















// let slideIndex = 0;

// function slideShow(n) {
//     const time = 2000;
//     const prevBtn = document.querySelector('.prev');
//     const nextBtn = document.querySelector('.next');
//     let i;
//     let slider = document.querySelectorAll(".slider");
//     let slides = document.querySelectorAll(".imgSlider");
//     let dots = document.querySelectorAll(".dot");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].classList.remove('dot_active');
//     }
//     // slideIndex++;
//     if (n >= slides.length) {
//         n = ((n) % slides.length);
//     }
//     slides[n].style.display = "block";
//     dots[n].classList.add('dot_active');

//     setTimeout(slideShow, 2000)

// }
// slideShow(100);
// let n = 100
// setTimeout((n) => {
//     while (n > 0) {
//         slideShow(n);
//         n--
//     }

// }, 2000);



// for (let i = 0; i < 51; i++) {
//     setInterval(() => {
//         for (let i = 0; i < 10; i++) {
//             slideShow(i)
//         }
//     }, 2000)
// }

// prevBtn.addEventListener('click', () => {
//     slideIndex -= 1;
//     console.log(slideIndex);
//     setTimeout(slideShow, time);
// })

// nextBtn.addEventListener('click', () => {
//     slideIndex += 1;
//     console.log(slideIndex);

//     setTimeout(slideShow, time);
// })

// slides[slideIndex - 1].style.display = "block";
// dots[slideIndex - 1].classList.add('dot_active');
// // prevBtn.addEventListener('click', (e) => {
// //         const slide = document.querySelector('img[style="display: block;"]')
// //         console.log(slide);


// //     })
// //     // 
// // setTimeout(slideShow, time);

// slideShow();

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }










// let slideIndex = 1;
// showSlides(slideIndex);



// function showSlides(n) {
//     let i;
//     let slides = document.querySelectorAll(".imgSlider");
//     let dots = document.querySelectorAll(".dot");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].classList.remove('dot_active');
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].classList.add('dot_active');
// }
// const prevBtn = document.querySelector('.prev');
// prevBtn.addEventListener('click', () => {
//     plusSlides(-1);
// })
// const nextBtn = document.querySelector('.next');
// nextBtn.addEventListener('click', () => {
//     plusSlides(1);
// })