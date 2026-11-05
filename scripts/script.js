// drop down

const money=document.getElementById('money');
const DropDownOption=document.querySelectorAll('.drop-down .option');

DropDownOption.forEach((option)=>{
    option.onclick=function(){
        money.innerHTML=this.innerHTML.trim();
        

    }

})

// side menu
const sideMenuBtn=document.getElementById('SideMenubtn');
const sideMenuLayout=document.querySelector('.side-menu-layout');
const closeMenuBtn=document.getElementById('closeMenuBtn');

sideMenuBtn.onclick=()=> {
    sideMenuLayout.classList.add('active');
    
}

closeMenuBtn.onclick=()=>{
    sideMenuLayout.classList.remove('active');
}

const heroSplide = new Splide('#heroSlider', {
    type: 'loop',
    perPage: 1,
    autoplay: true,
    interval: 3000,
    speed: 1000,
    arrows: false,
    pagination: true,
    drag: true
});

heroSplide.mount();

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

prevBtn.addEventListener('click', () => {
    heroSplide.go('<');
});

nextBtn.addEventListener('click', () => {
    heroSplide.go('>');
});


// Cart Menu Elements
const cartMenuLayout = document.getElementById('cart-menu-layout');
const openCart = document.getElementById('openCart');
const closeCart = document.getElementById('closeCart');

// Open Cart Menu
openCart.addEventListener('click', () => {
    cartMenuLayout.classList.add('open');
});

// Close Cart Menu
closeCart.addEventListener('click', () => {
    cartMenuLayout.classList.remove('open');
});



// ==========================================
// COUNTDOWN TIMER
// ==========================================

// Set the offer expiration date
// Format: Year, Month (0-11), Day, Hour, Minute, Second

const offerEndDate = new Date(2026, 11, 4, 23, 59, 59).getTime();

// Get countdown elements

const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Update countdown

function updateCountdown() {

    const now = new Date().getTime();

    const remainingTime = offerEndDate - now;

    // Check if the offer has expired

    if (remainingTime <= 0) {

        daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';

        clearInterval(countdownInterval);

        return;
    }

    // Calculate remaining time

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (remainingTime % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (remainingTime % (1000 * 60)) /
        1000
    );

    // Display countdown

    daysElement.textContent = String(days).padStart(2, '0');
    hoursElement.textContent = String(hours).padStart(2, '0');
    minutesElement.textContent = String(minutes).padStart(2, '0');
    secondsElement.textContent = String(seconds).padStart(2, '0');

}

// Run immediately

updateCountdown();

// Update every second

const countdownInterval = setInterval(updateCountdown, 1000);



const slides = document.querySelectorAll('.collection-slide');

const slideNumbers = document.querySelectorAll('.slider-number');

let currentSlide = 0;

let slideInterval;


function showSlide(index) {

    // Remove active class
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    slideNumbers.forEach(number => {
        number.classList.remove('active');
    });


    // Activate selected slide
    slides[index].classList.add('active');

    slideNumbers[index].classList.add('active');

    currentSlide = index;

}


// Next slide
function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}


// Auto slide
function startSlider() {

    slideInterval = setInterval(nextSlide, 5000);

}


// Reset timer when clicking pagination
function resetSlider() {

    clearInterval(slideInterval);

    startSlider();

}


// Pagination click
slideNumbers.forEach((number, index) => {

    number.addEventListener('click', () => {

        showSlide(index);

        resetSlider();

    });

});


// Start slider
startSlider();


const journalTrack = document.querySelector('.journal-track');

const journalNext = document.querySelector('.journal-next');
const journalPrev = document.querySelector('.journal-prev');

function getJournalScrollAmount() {

    const card = journalTrack.querySelector('.journal-card');

    const gap = parseFloat(
        getComputedStyle(journalTrack).gap
    ) || 0;

    return card.getBoundingClientRect().width + gap;
}


journalNext.addEventListener('click', () => {

    const maxScroll =
        journalTrack.scrollWidth - journalTrack.clientWidth;

    if (journalTrack.scrollLeft >= maxScroll - 5) {

        journalTrack.scrollTo({
            left: 0,
            behavior: 'smooth'
        });

    } else {

        journalTrack.scrollBy({
            left: getJournalScrollAmount(),
            behavior: 'smooth'
        });

    }

});


journalPrev.addEventListener('click', () => {

    if (journalTrack.scrollLeft <= 5) {

        journalTrack.scrollTo({
            left: journalTrack.scrollWidth,
            behavior: 'smooth'
        });

    } else {

        journalTrack.scrollBy({
            left: -getJournalScrollAmount(),
            behavior: 'smooth'
        });

    }

});


document.querySelectorAll('.testimonial-slider').forEach(slider => {

    const slides = slider.querySelectorAll('.testimonial-slide');

    const nextBtn = slider.querySelector('.testimonial-next');
    const prevBtn = slider.querySelector('.testimonial-prev');

    const dotsContainer = slider.querySelector('.testimonial-dots');

    let currentSlide = 0;
    let autoPlay;


    // Create Pagination Dots

    slides.forEach((slide, index) => {

        const dot = document.createElement('button');

        dot.classList.add('testimonial-dot');

        dot.setAttribute('aria-label', `Go to review ${index + 1}`);

        if (index === 0) {
            dot.classList.add('active');
        }

        dot.addEventListener('click', () => {
            showSlide(index);
            resetAutoPlay();
        });

        dotsContainer.appendChild(dot);

    });


    const dots = dotsContainer.querySelectorAll('.testimonial-dot');


    // Show Slide

    function showSlide(index) {

        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');

        currentSlide = (index + slides.length) % slides.length;

        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');

    }


    // Next Slide

    function nextSlide() {

        showSlide(currentSlide + 1);

    }


    // Previous Slide

    function prevSlide() {

        showSlide(currentSlide - 1);

    }


    // Auto Play

    function startAutoPlay() {

        stopAutoPlay();

        autoPlay = setInterval(() => {
            nextSlide();
        }, 5000);

    }


    function stopAutoPlay() {

        clearInterval(autoPlay);

    }


    function resetAutoPlay() {

        startAutoPlay();

    }


    // Arrow Events

    nextBtn.addEventListener('click', () => {

        nextSlide();
        resetAutoPlay();

    });


    prevBtn.addEventListener('click', () => {

        prevSlide();
        resetAutoPlay();

    });


    // Pause on Hover

    slider.addEventListener('mouseenter', stopAutoPlay);

    slider.addEventListener('mouseleave', startAutoPlay);


    // Start Slider

    startAutoPlay();

});





