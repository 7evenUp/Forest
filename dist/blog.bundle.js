/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/blog.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/blog.js":
/*!************************************!*\
  !*** ./src/assets/scripts/blog.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/menu */ \"./src/assets/scripts/modules/menu.js\");\n\n__webpack_require__(/*! ./modules/scroll-button */ \"./src/assets/scripts/modules/scroll-button.js\");\n\n__webpack_require__(/*! ./modules/sidebar-blog */ \"./src/assets/scripts/modules/sidebar-blog.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz82OWU5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0EiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbW9kdWxlcy9tZW51XCI7XHJcbmltcG9ydCBcIi4vbW9kdWxlcy9zY3JvbGwtYnV0dG9uXCI7XHJcbmltcG9ydCBcIi4vbW9kdWxlcy9zaWRlYmFyLWJsb2dcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/blog.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/menu.js":
/*!********************************************!*\
  !*** ./src/assets/scripts/modules/menu.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function () {\n  'use strict';\n\n  var menuBtnContainer = document.querySelector('.site-menu-btn');\n  var menuBtn = document.querySelector('.hamburger-menu');\n  var menu = document.querySelector('.modal-menu');\n\n  menuBtnContainer.addEventListener('click', function () {\n    if (menuBtn.classList.contains('hamburger-menu--active')) {\n      menuBtn.classList.remove('hamburger-menu--active');\n      menu.classList.remove('modal-menu--active');\n    } else {\n      menuBtn.classList.add('hamburger-menu--active');\n      menu.classList.add('modal-menu--active');\n    }\n  });\n})();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9tZW51LmpzP2JiMmYiXSwibmFtZXMiOlsibWVudUJ0bkNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnVCdG4iLCJtZW51IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIl0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsWUFBWTtBQUNYOztBQUVBLE1BQUlBLG1CQUFtQkMsU0FBU0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBdkI7QUFDQSxNQUFJQyxVQUFVRixTQUFTQyxhQUFULENBQXVCLGlCQUF2QixDQUFkO0FBQ0EsTUFBSUUsT0FBT0gsU0FBU0MsYUFBVCxDQUF1QixhQUF2QixDQUFYOztBQUVBRixtQkFBaUJLLGdCQUFqQixDQUFrQyxPQUFsQyxFQUEyQyxZQUFZO0FBQ3JELFFBQUlGLFFBQVFHLFNBQVIsQ0FBa0JDLFFBQWxCLENBQTJCLHdCQUEzQixDQUFKLEVBQTBEO0FBQ3hESixjQUFRRyxTQUFSLENBQWtCRSxNQUFsQixDQUF5Qix3QkFBekI7QUFDQUosV0FBS0UsU0FBTCxDQUFlRSxNQUFmLENBQXNCLG9CQUF0QjtBQUNELEtBSEQsTUFHTztBQUNMTCxjQUFRRyxTQUFSLENBQWtCRyxHQUFsQixDQUFzQix3QkFBdEI7QUFDQUwsV0FBS0UsU0FBTCxDQUFlRyxHQUFmLENBQW1CLG9CQUFuQjtBQUNEO0FBQ0YsR0FSRDtBQVVELENBakJEIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvbWVudS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBsZXQgbWVudUJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLW1lbnUtYnRuJyk7XHJcbiAgbGV0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyLW1lbnUnKTtcclxuICBsZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1tZW51Jyk7XHJcblxyXG4gIG1lbnVCdG5Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAobWVudUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hhbWJ1cmdlci1tZW51LS1hY3RpdmUnKSkge1xyXG4gICAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hhbWJ1cmdlci1tZW51LS1hY3RpdmUnKTtcclxuICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1tZW51LS1hY3RpdmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnaGFtYnVyZ2VyLW1lbnUtLWFjdGl2ZScpO1xyXG4gICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21vZGFsLW1lbnUtLWFjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFxyXG59KSgpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/menu.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/scroll-button.js":
/*!*****************************************************!*\
  !*** ./src/assets/scripts/modules/scroll-button.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function () {\n  'use strict';\n})();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9zY3JvbGwtYnV0dG9uLmpzP2FlNDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFlBQVk7QUFDWDtBQUVELENBSEQiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9zY3JvbGwtYnV0dG9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgXHJcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/scroll-button.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/sidebar-blog.js":
/*!****************************************************!*\
  !*** ./src/assets/scripts/modules/sidebar-blog.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function () {\n  'use strict';\n\n  var swipeButton = document.querySelector('.js-swipe-btn');\n  var menu = document.querySelector('.blog__navigation');\n  var content = document.querySelector('.blog__content');\n\n  swipeButton.addEventListener('click', function (evt) {\n    evt.preventDefault();\n    menu.classList.toggle('blog__navigation--active');\n    content.classList.toggle('blog__content--active');\n  });\n\n  // const nav = document.querySelector('.blog__navigation');\n  // const navList = nav.querySelector('.articles__list');\n  // const navBtn = nav.getElementsByClassName('articles__link');\n  // const articlesList = document.getElementsByClassName('blog__content');\n  // const article = document.querySelectorAll('.article');\n  // const activeBtnClass = 'articles__link--active';\n  // const speed = 1;\n  // let clickAnimation = false;\n\n  // navList.children[0].classList.add(activeBtnClass);\n\n  // window.addEventListener('load', init);\n\n  // function anchorActivate () {\n  //   for(let i = 0; i < navBtn.length; i++) {\n  //     navBtn[i].addEventListener('click', function (evt) {\n  //       clickAnimation = true;\n  //       if (!(navBtn[i].classList.contains(activeBtnClass))) {\n  //         for (let j = 0; j < navBtn.length; j++) {\n  //           navBtn[j].classList.remove(activeBtnClass);\n  //           this.classList.add(activeBtnClass);\n  //         }\n  //       }\n\n  //       let windowY = window.pageYOffset;\n  //       const indexBtn = evt.target.dataset.indexButton;\n  //       const currentArticle = document.querySelector(`[data-article = \"${indexBtn}\"]`);\n  //       const topCoords = currentArticle.getBoundingClientRect().top;\n\n  //       let start = null;\n\n  //       requestAnimationFrame(step);\n\n  //       function step (time) {\n  //         if (start === null) start = time;\n\n  //         let progress = time - start;blur.js\n\n  //         let coordY;\n  //         if (topCoords < 0) {\n  //           coordY = Math.max(windowY - progress / speed, windowY + topCoords)\n  //         } else {\n  //           coordY = Math.min(windowY + progress / speed, windowY + topCoords)\n  //         }\n\n  //         window.scrollTo(0, coordY);\n  //         if (coordY != windowY + topCoords) {\n  //           requestAnimationFrame(step);\n  //         } else {\n  //           clickAnimation = false;\n  //         }\n  //       }\n\n  //     });\n  //   }\n  // }\n\n\n  // let links;\n  // let articles;\n  // let positionArticles = [];\n\n  // function init () {\n  //   links = document.querySelectorAll('.js-scroll-article');\n  //   articles = document.querySelectorAll('.js-article');\n  //   positionArticles = setPositionArticles(articles);\n\n  //   anchorActivate();\n  //   scrollActiveClass();\n\n  //   window.addEventListener('resize', () => {\n  //     positionArticles = setPositionArticles(articles);\n  //   });\n\n  //   window.addEventListener('scroll', scrollActiveClass);\n  // }\n\n  // function scrollActiveClass () {\n  //   positionArticles.forEach((el, i) => {\n  //     let currentElement = links[i];\n\n  //     if (clickAnimation) {\n  //       return;\n  //     }\n\n  //     if (isVisible(el, currentElement)) {\n  //       removeActiveClass();\n  //       currentElement.classList.add(activeBtnClass);\n  //     }\n  //   });\n  // }\n\n  // function removeActiveClass() {\n  //   for (const item of links) {\n  //     item.classList.remove(activeBtnClass);\n  //   }\n  // }\n\n  // function isVisible (element, current) {\n  //   let scroll = window.pageYOffset;\n\n  //   return scroll >= element.top - 5 && scroll < element.bottom\n  // }\n\n  // function setPositionArticles (elements) {\n  //   let position = [];\n  //   Array.from(elements).forEach((item, i) => {\n  //     position[i] = {};\n  //     position[i].item = item;\n  //     position[i].top = item.getBoundingClientRect().top + window.pageYOffset;\n  //     position[i].bottom = item.getBoundingClientRect().bottom + window.pageYOffset;\n  //   });\n\n  //   return position;\n  // }\n})();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9zaWRlYmFyLWJsb2cuanM/Nzg2OSJdLCJuYW1lcyI6WyJzd2lwZUJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnUiLCJjb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsWUFBWTtBQUNYOztBQUVBLE1BQU1BLGNBQWNDLFNBQVNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBcEI7QUFDQSxNQUFNQyxPQUFPRixTQUFTQyxhQUFULENBQXVCLG1CQUF2QixDQUFiO0FBQ0EsTUFBTUUsVUFBVUgsU0FBU0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBaEI7O0FBRUFGLGNBQVlLLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFVBQVVDLEdBQVYsRUFBZTtBQUNuREEsUUFBSUMsY0FBSjtBQUNBSixTQUFLSyxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsMEJBQXRCO0FBQ0FMLFlBQVFJLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLHVCQUF6QjtBQUNELEdBSkQ7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVELENBbklEIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvc2lkZWJhci1ibG9nLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIGNvbnN0IHN3aXBlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXN3aXBlLWJ0bicpO1xyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvZ19fbmF2aWdhdGlvbicpO1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvZ19fY29udGVudCcpO1xyXG5cclxuICBzd2lwZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdibG9nX19uYXZpZ2F0aW9uLS1hY3RpdmUnKTtcclxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnYmxvZ19fY29udGVudC0tYWN0aXZlJyk7XHJcbiAgfSk7XHJcblxyXG5cclxuXHJcbiAgLy8gY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2dfX25hdmlnYXRpb24nKTtcclxuICAvLyBjb25zdCBuYXZMaXN0ID0gbmF2LnF1ZXJ5U2VsZWN0b3IoJy5hcnRpY2xlc19fbGlzdCcpO1xyXG4gIC8vIGNvbnN0IG5hdkJ0biA9IG5hdi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhcnRpY2xlc19fbGluaycpO1xyXG4gIC8vIGNvbnN0IGFydGljbGVzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Jsb2dfX2NvbnRlbnQnKTtcclxuICAvLyBjb25zdCBhcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFydGljbGUnKTtcclxuICAvLyBjb25zdCBhY3RpdmVCdG5DbGFzcyA9ICdhcnRpY2xlc19fbGluay0tYWN0aXZlJztcclxuICAvLyBjb25zdCBzcGVlZCA9IDE7XHJcbiAgLy8gbGV0IGNsaWNrQW5pbWF0aW9uID0gZmFsc2U7XHJcblxyXG4gIC8vIG5hdkxpc3QuY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZChhY3RpdmVCdG5DbGFzcyk7XHJcblxyXG4gIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgaW5pdCk7XHJcblxyXG4gIC8vIGZ1bmN0aW9uIGFuY2hvckFjdGl2YXRlICgpIHtcclxuICAvLyAgIGZvcihsZXQgaSA9IDA7IGkgPCBuYXZCdG4ubGVuZ3RoOyBpKyspIHtcclxuICAvLyAgICAgbmF2QnRuW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gIC8vICAgICAgIGNsaWNrQW5pbWF0aW9uID0gdHJ1ZTtcclxuICAvLyAgICAgICBpZiAoIShuYXZCdG5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKGFjdGl2ZUJ0bkNsYXNzKSkpIHtcclxuICAvLyAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmF2QnRuLmxlbmd0aDsgaisrKSB7XHJcbiAgLy8gICAgICAgICAgIG5hdkJ0bltqXS5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZUJ0bkNsYXNzKTtcclxuICAvLyAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKGFjdGl2ZUJ0bkNsYXNzKTtcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgICB9XHJcblxyXG4gIC8vICAgICAgIGxldCB3aW5kb3dZID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gIC8vICAgICAgIGNvbnN0IGluZGV4QnRuID0gZXZ0LnRhcmdldC5kYXRhc2V0LmluZGV4QnV0dG9uO1xyXG4gIC8vICAgICAgIGNvbnN0IGN1cnJlbnRBcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtYXJ0aWNsZSA9IFwiJHtpbmRleEJ0bn1cIl1gKTtcclxuICAvLyAgICAgICBjb25zdCB0b3BDb29yZHMgPSBjdXJyZW50QXJ0aWNsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcblxyXG4gIC8vICAgICAgIGxldCBzdGFydCA9IG51bGw7XHJcblxyXG4gIC8vICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuXHJcbiAgLy8gICAgICAgZnVuY3Rpb24gc3RlcCAodGltZSkge1xyXG4gIC8vICAgICAgICAgaWYgKHN0YXJ0ID09PSBudWxsKSBzdGFydCA9IHRpbWU7XHJcblxyXG4gIC8vICAgICAgICAgbGV0IHByb2dyZXNzID0gdGltZSAtIHN0YXJ0O2JsdXIuanNcclxuXHJcbiAgLy8gICAgICAgICBsZXQgY29vcmRZO1xyXG4gIC8vICAgICAgICAgaWYgKHRvcENvb3JkcyA8IDApIHtcclxuICAvLyAgICAgICAgICAgY29vcmRZID0gTWF0aC5tYXgod2luZG93WSAtIHByb2dyZXNzIC8gc3BlZWQsIHdpbmRvd1kgKyB0b3BDb29yZHMpXHJcbiAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gIC8vICAgICAgICAgICBjb29yZFkgPSBNYXRoLm1pbih3aW5kb3dZICsgcHJvZ3Jlc3MgLyBzcGVlZCwgd2luZG93WSArIHRvcENvb3JkcylcclxuICAvLyAgICAgICAgIH1cclxuXHJcbiAgLy8gICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgY29vcmRZKTtcclxuICAvLyAgICAgICAgIGlmIChjb29yZFkgIT0gd2luZG93WSArIHRvcENvb3Jkcykge1xyXG4gIC8vICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gIC8vICAgICAgICAgICBjbGlja0FuaW1hdGlvbiA9IGZhbHNlO1xyXG4gIC8vICAgICAgICAgfVxyXG4gIC8vICAgICAgIH1cclxuXHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuXHJcblxyXG4gIC8vIGxldCBsaW5rcztcclxuICAvLyBsZXQgYXJ0aWNsZXM7XHJcbiAgLy8gbGV0IHBvc2l0aW9uQXJ0aWNsZXMgPSBbXTtcclxuXHJcbiAgLy8gZnVuY3Rpb24gaW5pdCAoKSB7XHJcbiAgLy8gICBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1zY3JvbGwtYXJ0aWNsZScpO1xyXG4gIC8vICAgYXJ0aWNsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtYXJ0aWNsZScpO1xyXG4gIC8vICAgcG9zaXRpb25BcnRpY2xlcyA9IHNldFBvc2l0aW9uQXJ0aWNsZXMoYXJ0aWNsZXMpO1xyXG5cclxuICAvLyAgIGFuY2hvckFjdGl2YXRlKCk7XHJcbiAgLy8gICBzY3JvbGxBY3RpdmVDbGFzcygpO1xyXG5cclxuICAvLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgLy8gICAgIHBvc2l0aW9uQXJ0aWNsZXMgPSBzZXRQb3NpdGlvbkFydGljbGVzKGFydGljbGVzKTtcclxuICAvLyAgIH0pO1xyXG5cclxuICAvLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxBY3RpdmVDbGFzcyk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBmdW5jdGlvbiBzY3JvbGxBY3RpdmVDbGFzcyAoKSB7XHJcbiAgLy8gICBwb3NpdGlvbkFydGljbGVzLmZvckVhY2goKGVsLCBpKSA9PiB7XHJcbiAgLy8gICAgIGxldCBjdXJyZW50RWxlbWVudCA9IGxpbmtzW2ldO1xyXG5cclxuICAvLyAgICAgaWYgKGNsaWNrQW5pbWF0aW9uKSB7XHJcbiAgLy8gICAgICAgcmV0dXJuO1xyXG4gIC8vICAgICB9XHJcblxyXG4gIC8vICAgICBpZiAoaXNWaXNpYmxlKGVsLCBjdXJyZW50RWxlbWVudCkpIHtcclxuICAvLyAgICAgICByZW1vdmVBY3RpdmVDbGFzcygpO1xyXG4gIC8vICAgICAgIGN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoYWN0aXZlQnRuQ2xhc3MpO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9KTtcclxuICAvLyB9XHJcblxyXG4gIC8vIGZ1bmN0aW9uIHJlbW92ZUFjdGl2ZUNsYXNzKCkge1xyXG4gIC8vICAgZm9yIChjb25zdCBpdGVtIG9mIGxpbmtzKSB7XHJcbiAgLy8gICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVCdG5DbGFzcyk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICAvLyBmdW5jdGlvbiBpc1Zpc2libGUgKGVsZW1lbnQsIGN1cnJlbnQpIHtcclxuICAvLyAgIGxldCBzY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG4gIC8vICAgcmV0dXJuIHNjcm9sbCA+PSBlbGVtZW50LnRvcCAtIDUgJiYgc2Nyb2xsIDwgZWxlbWVudC5ib3R0b21cclxuICAvLyB9XHJcblxyXG4gIC8vIGZ1bmN0aW9uIHNldFBvc2l0aW9uQXJ0aWNsZXMgKGVsZW1lbnRzKSB7XHJcbiAgLy8gICBsZXQgcG9zaXRpb24gPSBbXTtcclxuICAvLyAgIEFycmF5LmZyb20oZWxlbWVudHMpLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAvLyAgICAgcG9zaXRpb25baV0gPSB7fTtcclxuICAvLyAgICAgcG9zaXRpb25baV0uaXRlbSA9IGl0ZW07XHJcbiAgLy8gICAgIHBvc2l0aW9uW2ldLnRvcCA9IGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gIC8vICAgICBwb3NpdGlvbltpXS5ib3R0b20gPSBpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSArIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAvLyAgIH0pO1xyXG5cclxuICAvLyAgIHJldHVybiBwb3NpdGlvbjtcclxuICAvLyB9XHJcblxyXG59KSgpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/sidebar-blog.js\n");

/***/ })

/******/ });