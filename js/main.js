new WOW().init();

let burger = document.querySelector('.nav-burger'),
    menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('scale');
    console.log('click')
})