'use strick'

//Select element function
const $ = function (selector) {
    return document.querySelector(selector);
}

const menuToggler = $('.menu-toggle');
const body = $('body');

menuToggler.addEventListener('click', () => {
    body.classList.toggle('open');
})

const links = document.querySelectorAll('a.nav-link');
links.forEach((link) => {
    link.addEventListener('click', function () {
        body.classList.remove('open')
    })
})

// Modals

modal = $('.modal-overlay')
closeBtn = $('.modal-window span')

closeBtn.addEventListener('click', () => {
    modal.style.opacity = '0'
    modal.style.visibility = 'hidden'
})

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.opacity = '0'
        modal.style.visibility = 'hidden'
    }
}
/* Explore button */
const exploreBtn = $('.cta-btn')

exploreBtn.addEventListener('click', () => {
    modal.style.opacity = '1'
    modal.style.visibility = 'visible'
})



/* About us button */
const aboutBtn = $('.body-btn')

aboutBtn.addEventListener('click', () => {
    modal.style.opacity = '1'
    modal.style.visibility = 'visible'
})

/* Menu button */
const menuBtn = $('#menu-btn')

menuBtn.addEventListener('click', () => {
    modal.style.opacity = '1'
    modal.style.visibility = 'visible'
})

const reservationsBtn = $('#reservations-btn')

reservationsBtn.addEventListener('click', function () {
    modal.style.opacity = '1'
    modal.style.visibility = 'visible'
})


//Scroll reveal

window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 300
});