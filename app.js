const burger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    links.forEach( link => {
        link.classList.toggle("fade");
    })
})
