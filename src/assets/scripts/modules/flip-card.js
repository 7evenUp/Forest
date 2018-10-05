(function () {
  'use strict';

  let authButton = document.querySelector('.auth-button');
  let backButton = document.querySelector('.auth-panel__button[type="button"]');
  let greetingCard = document.querySelector('.card-greeting');
  let authCard = document.querySelector('.card-auth');

  authButton.addEventListener('click', () => {
    authButton.classList.add('auth-button--hidden');
    greetingCard.classList.remove('card-greeting--active');
    authCard.classList.add('card-auth--active');
  });

  backButton.addEventListener('click', () => {
    authButton.classList.remove('auth-button--hidden');
    greetingCard.classList.add('card-greeting--active');
    authCard.classList.remove('card-auth--active');
  });
  
})();