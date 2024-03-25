const hamburgerBtn = document.querySelector('#hamburger-btn');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

hamburgerBtn.addEventListener('click', function () {


    if (header.classList.contains('open')) {    // Close hamburger menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function (element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
        // overlay.classList.remove('fade-in');
        // overlay.classList.add('fade-out');
    } else {    // Open Hamburger Menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function (element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });

    }
});