const prev1 = document.getElementById('prev-dub-arrow');
const next1 = document.getElementById('next-dub-arrow');
const slides1 = document.querySelectorAll('.video-prev');
const dots1 = document.querySelectorAll('.video-slider-dot');

let index1 = 0;

const activeSlide1 = n => {
    for(slide1 of slides1) {
        slide1.classList.remove('active');
    }
    slides1[n].classList.add('active');
    slides1[n + 1].classList.add('active');
    slides1[n + 2].classList.add('active');
}

console.log(slides1);

const activeDot1 = n => {
    for(dot1 of dots1) {
        dot1.classList.remove('active');
    }
    dots1[n].classList.add('active');
    console.log(n);
}

const changeSlide1 = ind1 => {
    activeSlide1(ind1);
    activeDot1(ind1);    
}

const nextSlide1 = () => {
    if (index1 == slides1.length - 3) {
        index1 = 0;
        changeSlide1(index1);        
    } else {
        index1++;
        changeSlide1(index1);
    }
}

const prevSlide1 = () => {
    if (index1 == 0) {
        index1 = slides1.length - 3;
        changeSlide1(index1);
    } else {
        index1--;
        changeSlide1(index1);
    }    
}

dots1.forEach((item1, indexDot) => {
    item1.addEventListener('click', () => {
        index1 = indexDot;
        changeSlide1(index1);
    })
})



next1.addEventListener('click', nextSlide1);
prev1.addEventListener('click', prevSlide1);

console.log(next1);