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
eval("\n\n(function () {\n  'use strict';\n\n  var swipeButton = document.querySelector('.js-swipe-btn');\n  var menu = document.querySelector('.blog__navigation');\n  var content = document.querySelector('.blog__content');\n\n  swipeButton.addEventListener('click', function (evt) {\n    evt.preventDefault();\n    menu.classList.toggle('blog__navigation--active');\n    content.classList.toggle('blog__content--active');\n  });\n})();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9zaWRlYmFyLWJsb2cuanM/Nzg2OSJdLCJuYW1lcyI6WyJzd2lwZUJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnUiLCJjb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsWUFBWTtBQUNYOztBQUVBLE1BQU1BLGNBQWNDLFNBQVNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBcEI7QUFDQSxNQUFNQyxPQUFPRixTQUFTQyxhQUFULENBQXVCLG1CQUF2QixDQUFiO0FBQ0EsTUFBTUUsVUFBVUgsU0FBU0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBaEI7O0FBR0FGLGNBQVlLLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFVBQVVDLEdBQVYsRUFBZTtBQUNuREEsUUFBSUMsY0FBSjtBQUNBSixTQUFLSyxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsMEJBQXRCO0FBQ0FMLFlBQVFJLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLHVCQUF6QjtBQUNELEdBSkQ7QUFNRCxDQWREIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvc2lkZWJhci1ibG9nLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIGNvbnN0IHN3aXBlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXN3aXBlLWJ0bicpO1xyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvZ19fbmF2aWdhdGlvbicpO1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvZ19fY29udGVudCcpO1xyXG5cclxuXHJcbiAgc3dpcGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnYmxvZ19fbmF2aWdhdGlvbi0tYWN0aXZlJyk7XHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC50b2dnbGUoJ2Jsb2dfX2NvbnRlbnQtLWFjdGl2ZScpO1xyXG4gIH0pO1xyXG5cclxufSkoKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/sidebar-blog.js\n");

/***/ })

/******/ });