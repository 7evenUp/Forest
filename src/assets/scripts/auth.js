(function () {
  'use strict';

  let authButton = document.querySelector('.auth-button');
  let backButton = document.querySelector('.menu__navigation__button[type="button"]');
  let menuPrev = document.querySelector('.menu-preview');
  let menuAuth = document.querySelector('.menu-authorization');

  authButton.addEventListener('click', () => {
    authButton.classList.add('auth-button--hidden');
    menuPrev.classList.remove('menu-preview--active');
    menuAuth.classList.add('menu-authorization--active');
  });

  backButton.addEventListener('click', () => {
    authButton.classList.remove('auth-button--hidden');
    menuPrev.classList.add('menu-preview--active');
    menuAuth.classList.remove('menu-authorization--active');
  });
  
})();