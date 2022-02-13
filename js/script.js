//* burger menu open || close
const toggleNav = document.querySelector('.header-top__toggle');
const navMenu = document.querySelector('.header-top__menu');

toggleNav.addEventListener('click', () => {
    const isOpened = "true" === toggleNav.getAttribute('aria-expanded');
    toggleNav.setAttribute('aria-expanded', !isOpened);

    navMenu.classList.toggle('menu-opened');
    document.body.classList.toggle('hidden');

    isOpened ? toggleNav.setAttribute('aria-label', 'Open menu')
        : toggleNav.setAttribute('aria-label', 'Close menu');

})

//* slider
const slides = Array.from(document.querySelectorAll('.slide'));
let slideActive = 0;
slides[slideActive].classList.add('slide_active')

const changeSlide = () => {
    if (slideActive < slides.length - 1) {
        slides[slideActive].classList.remove('slide_active');
        slideActive++;
        slides[slideActive].classList.add('slide_active');
    } else {
        slides[slideActive].classList.remove('slide_active')
        slideActive = 0;
        slides[slideActive].classList.add('slide_active')
    }
    setTimeout("changeSlide()", 2500);
}

changeSlide();




