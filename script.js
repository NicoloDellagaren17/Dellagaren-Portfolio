let currentIndex = 0;
let autoSlideInterval;

const slides = document.querySelectorAll('.slide');
const prev = document.getElementById('prevSlide');
const next = document.getElementById('nextSlide');

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

startAutoSlide();

function showSlide(index) {
    const dots = document.querySelectorAll('.dot');

    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }

    currentIndex = index;

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    stopAutoSlide();
    showSlide(currentIndex + 1);
}

function prevSlide() {
    stopAutoSlide();
    showSlide(currentIndex - 1);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        nextSlide();
    }, 3000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

const dotsContainer = document.getElementById('dots-container');

for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        showSlide(i);
        stopAutoSlide();
    });
    dotsContainer.appendChild(dot);
}

 } 
