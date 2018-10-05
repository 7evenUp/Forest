(function () {
  'use strict';

  const swipeButton = document.querySelector('.js-swipe-btn');
  const menu = document.querySelector('.blog__navigation');
  const content = document.querySelector('.blog__content');


  swipeButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    menu.classList.toggle('blog__navigation--active');
    content.classList.toggle('blog__content--active');
  });

})();