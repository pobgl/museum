const prev = document.getElementById('prev-arrow');
const next = document.getElementById('next-arrow');
const slides = document.querySelectorAll('.welcome-slider-image');
const dots = document.querySelectorAll('.welcome-slider-dot');
const counter = document.getElementById('welcome-slider-counter');

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const changeCounter = () => {
    counter.innerHTML = `0${index + 1}`;
}

const changeSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
    changeCounter(ind);
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        changeSlide(index);        
    } else {
        index++;
        changeSlide(index);
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        changeSlide(index);
    } else {
        index--;
        changeSlide(index);
    }    
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        changeSlide(index);
    })
})



next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
