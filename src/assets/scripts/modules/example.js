(function () {
  'use strict';

  let menuBtn = document.querySelector('.header__menu');
  let menu = document.querySelector('.modal-menu');

  menuBtn.addEventListener('click', function () {
    if (menuBtn.classList.contains('header__menu--active')) {
      menuBtn.classList.remove('header__menu--active');
      menu.classList.remove('modal-menu--active');
    } else {
      menuBtn.classList.add('header__menu--active');
      menu.classList.add('modal-menu--active');
    }
  });
  
})();