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



  // const nav = document.querySelector('.blog__navigation');
  // const navList = nav.querySelector('.articles__list');
  // const navBtn = nav.getElementsByClassName('articles__link');
  // const articlesList = document.getElementsByClassName('blog__content');
  // const article = document.querySelectorAll('.article');
  // const activeBtnClass = 'articles__link--active';
  // const speed = 1;
  // let clickAnimation = false;

  // navList.children[0].classList.add(activeBtnClass);

  // window.addEventListener('load', init);

  // function anchorActivate () {
  //   for(let i = 0; i < navBtn.length; i++) {
  //     navBtn[i].addEventListener('click', function (evt) {
  //       clickAnimation = true;
  //       if (!(navBtn[i].classList.contains(activeBtnClass))) {
  //         for (let j = 0; j < navBtn.length; j++) {
  //           navBtn[j].classList.remove(activeBtnClass);
  //           this.classList.add(activeBtnClass);
  //         }
  //       }

  //       let windowY = window.pageYOffset;
  //       const indexBtn = evt.target.dataset.indexButton;
  //       const currentArticle = document.querySelector(`[data-article = "${indexBtn}"]`);
  //       const topCoords = currentArticle.getBoundingClientRect().top;

  //       let start = null;

  //       requestAnimationFrame(step);

  //       function step (time) {
  //         if (start === null) start = time;

  //         let progress = time - start;blur.js

  //         let coordY;
  //         if (topCoords < 0) {
  //           coordY = Math.max(windowY - progress / speed, windowY + topCoords)
  //         } else {
  //           coordY = Math.min(windowY + progress / speed, windowY + topCoords)
  //         }

  //         window.scrollTo(0, coordY);
  //         if (coordY != windowY + topCoords) {
  //           requestAnimationFrame(step);
  //         } else {
  //           clickAnimation = false;
  //         }
  //       }

  //     });
  //   }
  // }


  // let links;
  // let articles;
  // let positionArticles = [];

  // function init () {
  //   links = document.querySelectorAll('.js-scroll-article');
  //   articles = document.querySelectorAll('.js-article');
  //   positionArticles = setPositionArticles(articles);

  //   anchorActivate();
  //   scrollActiveClass();

  //   window.addEventListener('resize', () => {
  //     positionArticles = setPositionArticles(articles);
  //   });

  //   window.addEventListener('scroll', scrollActiveClass);
  // }

  // function scrollActiveClass () {
  //   positionArticles.forEach((el, i) => {
  //     let currentElement = links[i];

  //     if (clickAnimation) {
  //       return;
  //     }

  //     if (isVisible(el, currentElement)) {
  //       removeActiveClass();
  //       currentElement.classList.add(activeBtnClass);
  //     }
  //   });
  // }

  // function removeActiveClass() {
  //   for (const item of links) {
  //     item.classList.remove(activeBtnClass);
  //   }
  // }

  // function isVisible (element, current) {
  //   let scroll = window.pageYOffset;

  //   return scroll >= element.top - 5 && scroll < element.bottom
  // }

  // function setPositionArticles (elements) {
  //   let position = [];
  //   Array.from(elements).forEach((item, i) => {
  //     position[i] = {};
  //     position[i].item = item;
  //     position[i].top = item.getBoundingClientRect().top + window.pageYOffset;
  //     position[i].bottom = item.getBoundingClientRect().bottom + window.pageYOffset;
  //   });

  //   return position;
  // }

})();