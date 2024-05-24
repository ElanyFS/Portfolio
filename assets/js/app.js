const sections = document.querySelectorAll(".hidden");

const myObserve = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    })
});

sections.forEach((section) => myObserve.observe(section));

// Menu mobile

let btnAbriMenu = document.querySelector('#btn-abrir-menu');

let menuMobile = document.querySelector('#menu-mobile');

btnAbriMenu.addEventListener('click', () => {
    menuMobile.classList.add('abrir-menu');
});

menuMobile.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu');
});