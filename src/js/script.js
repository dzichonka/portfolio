'use strict';

window.addEventListener("DOMContentLoaded", () => {

    const menuOpenBtn = document.querySelector('.hamburger');
    const menuCloseBtn = document.querySelector('.menu__close');
    const menu = document.querySelector('.menu');
    const menuLink = document.querySelectorAll('.menu__link');

    function openMenu() {
        menu.classList.add('active');
    }

    function closeMenu() {
        menu.classList.remove('active');
    }

    menuOpenBtn.addEventListener('click', openMenu);
    menuCloseBtn.addEventListener('click', closeMenu);
    menuLink.forEach(btn => {
        btn.addEventListener('click', closeMenu);
    });

    const percent = document.querySelectorAll('.skills__soft-percent');
    const line = document.querySelectorAll('.skills__soft-scale span');

    percent.forEach((item, i) => {
        line[i].style.width = item.innerHTML;
    });

});

