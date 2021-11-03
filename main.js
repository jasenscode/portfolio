'use strict';

// hamburger menu effect

const menu = document.querySelector('.navbar__menu');
const menuItems = document.querySelectorAll('.navbar__menu__item');
const hamburger = document.querySelector('.navbar__hamburger');
const menuIcon = document.querySelector('.menuIcon');
const closeIcon = document.querySelector('.closeIcon');

hamburger.addEventListener('click', function () {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
});

// translate hamburger icons

// hamburger.addEventListener('click', function () {
//   if (menu.classList.contains('showMenu')) {
//     menu.classList.remove('showMenu');
//     closeIcon.style.display = 'translateY(-150%)';
//     menuIcon.style.transform = 'translateX(0)';
//     closeIcon.style.display = 'none';
//     menuIcon.style.display = 'block';
//   } else {
//     menu.classList.add('showMenu');
//     closeIcon.style.transform = 'translateY(0)';
//     menuIcon.style.transform = 'translateX(-150%)';
//     closeIcon.style.display = 'block';
//     menuIcon.style.display = 'none';
//   }
// });
