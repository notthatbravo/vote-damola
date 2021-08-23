// Control Buttons
carouselButtonList = document.querySelectorAll('.carousel-button');
slide1Button = document.querySelector('.slide-1-btn');
slide2Button = document.querySelector('.slide-2-btn');
slide3Button = document.querySelector('.slide-3-btn');


// Slides
slideList = document.querySelectorAll('.slide-container');
slide1 = document.querySelector('.slide-1');
slide2 = document.querySelector('.slide-2');
slide3 = document.querySelector('.slide-3');


// Making shit work crudely
slide1Button.addEventListener('click', function() {
    slide2Button.classList.remove('active');
    slide3Button.classList.remove('active');

    slide1Button.classList.add('active');
    slide1.classList.add('active');
})



slide2Button.addEventListener('click', function() {
    slide1Button.classList.remove('active');
    slide3Button.classList.remove('active');

    slide2Button.classList.add('active');
    slide2.classList.add('active');
})


slide1Button.addEventListener('click', function() {
    slide2Button.classList.remove('active');
    slide3Button.classList.remove('active');

    slide1Button.classList.add('active');
    slide1.classList.add('active');

    slide2.classList.remove('active');
    slide3.classList.remove('active');
});


slide2Button.addEventListener('click', function() {
    slide1Button.classList.remove('active');
    slide3Button.classList.remove('active');

    slide2Button.classList.add('active');
    slide2.classList.add('active');

    slide1.classList.remove('active');
    slide3.classList.remove('active');
});


slide3Button.addEventListener('click', function() {
    slide1Button.classList.remove('active');
    slide2Button.classList.remove('active');

    slide3Button.classList.add('active');
    slide3.classList.add('active');

    slide1.classList.remove('active');
    slide2.classList.remove('active');
});
