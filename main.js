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



// Modals

/* Explore button */
const exploreBtn = $('.cta-btn')

exploreBtn.addEventListener('click', () => {
    Swal.fire(
        "I'm sorry",
        'But I have no idea what to add here',
        'info'
    )
})
/* About us button */
const aboutBtn = $('.body-btn')

aboutBtn.addEventListener('click', () => {
    Swal.fire(
        'More about us',
        'We just a restaurant',
        'success'
    )
})

/* Menu button */
const menuBtn = $('#menu-btn')

menuBtn.addEventListener('click', () => {
    Swal.fire(
        'If you want to view our menu',
        'Come to our restaurant',
        'warning'
    )
})

const reservationsBtn = $('#reservations-btn')

reservationsBtn.addEventListener('click', function () {
    (async () => {

        const { value: email } = await Swal.fire({
            title: 'Input email address',
            input: 'email',
            inputPlaceholder: 'Enter your email address'
        })

        if (email) {
            Swal.fire(`Entered email: ${email}`)
        }

    })()
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