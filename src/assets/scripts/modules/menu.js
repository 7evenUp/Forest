(function () {
  'use strict';

  let menuBtnContainer = document.querySelector('.site-menu-btn');
  let menuBtn = document.querySelector('.hamburger-menu');
  let menu = document.querySelector('.modal-menu');

  menuBtnContainer.addEventListener('click', function () {
    if (menuBtn.classList.contains('hamburger-menu--active')) {
      menuBtn.classList.remove('hamburger-menu--active');
      menu.classList.remove('modal-menu--active');
    } else {
      menuBtn.classList.add('hamburger-menu--active');
      menu.classList.add('modal-menu--active');
    }
  });
  
})();