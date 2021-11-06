'use strict';

// hamburger slide down menu effect

const menu = document.querySelector('.navbar__menu');
const menuItems = document.querySelectorAll('.navbar__menu__item');
const hamburger = document.querySelector('.navbar__hamburger');
const menuIcon = document.querySelector('.menuIcon');
const closeIcon = document.querySelector('.closeIcon');

const changeMenuState = () => {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
};

hamburger.addEventListener('click', changeMenuState);

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', changeMenuState);
});

// add date to footer

const date = new Date();
const currentYear = date.getFullYear();

document.getElementById('current-year').innerHTML = currentYear;
