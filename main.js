'use strict';

// hamburger slide down menu effect

const menu = document.querySelector('.navbar__menu');
const menuItems = document.querySelectorAll('.navbar__menu__item');
const hamburger = document.querySelector('.navbar__hamburger');
const menuIcon = document.querySelector('.menuIcon');
const closeIcon = document.querySelector('.closeIcon');

hamburger.addEventListener('click', () => {
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

// toggle display on project card information on mobile/tablet

const projectCard = document.querySelectorAll('.projects__card');
const cardPic = document.querySelector('.projects__card__pic');
const cardDetail = document.querySelector('.projects__card__detail');

// projectCard.addEventListener('click', () => {
//   if (
//     cardPic.classList.contains('showCard') &&
//     cardDetail.classList.contains('showCard')
//   ) {
//     cardPic.classList.remove('showCard');
//     cardDetail.classList.remove('showCard');
//     cardPic.style.display = 'none';
//     cardDetail.style.display = 'none';
//   } else {
//     cardPic.classList.add('showCard');
//     cardDetail.classList.add('showCard');
//     cardPic.style.display = 'block';
//     cardDetail.style.display = 'block';
//   }
// });
