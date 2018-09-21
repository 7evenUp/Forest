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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/auth.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/auth.js":
/*!************************************!*\
  !*** ./src/assets/scripts/auth.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function () {\n  'use strict';\n\n  var authButton = document.querySelector('.auth-button');\n  var backButton = document.querySelector('.menu__navigation__button[type=\"button\"]');\n  var menuPrev = document.querySelector('.menu-preview');\n  var menuAuth = document.querySelector('.menu-authorization');\n\n  authButton.addEventListener('click', function () {\n    authButton.classList.add('auth-button--hidden');\n    menuPrev.classList.remove('menu-preview--active');\n    menuAuth.classList.add('menu-authorization--active');\n  });\n\n  backButton.addEventListener('click', function () {\n    authButton.classList.remove('auth-button--hidden');\n    menuPrev.classList.add('menu-preview--active');\n    menuAuth.classList.remove('menu-authorization--active');\n  });\n})();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz85ZWY0Il0sIm5hbWVzIjpbImF1dGhCdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJiYWNrQnV0dG9uIiwibWVudVByZXYiLCJtZW51QXV0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBQyxZQUFZO0FBQ1g7O0FBRUEsTUFBSUEsYUFBYUMsU0FBU0MsYUFBVCxDQUF1QixjQUF2QixDQUFqQjtBQUNBLE1BQUlDLGFBQWFGLFNBQVNDLGFBQVQsQ0FBdUIsMENBQXZCLENBQWpCO0FBQ0EsTUFBSUUsV0FBV0gsU0FBU0MsYUFBVCxDQUF1QixlQUF2QixDQUFmO0FBQ0EsTUFBSUcsV0FBV0osU0FBU0MsYUFBVCxDQUF1QixxQkFBdkIsQ0FBZjs7QUFFQUYsYUFBV00sZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBTTtBQUN6Q04sZUFBV08sU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIscUJBQXpCO0FBQ0FKLGFBQVNHLFNBQVQsQ0FBbUJFLE1BQW5CLENBQTBCLHNCQUExQjtBQUNBSixhQUFTRSxTQUFULENBQW1CQyxHQUFuQixDQUF1Qiw0QkFBdkI7QUFDRCxHQUpEOztBQU1BTCxhQUFXRyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxZQUFNO0FBQ3pDTixlQUFXTyxTQUFYLENBQXFCRSxNQUFyQixDQUE0QixxQkFBNUI7QUFDQUwsYUFBU0csU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsc0JBQXZCO0FBQ0FILGFBQVNFLFNBQVQsQ0FBbUJFLE1BQW5CLENBQTBCLDRCQUExQjtBQUNELEdBSkQ7QUFNRCxDQXBCRCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9hdXRoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIGxldCBhdXRoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1dGgtYnV0dG9uJyk7XHJcbiAgbGV0IGJhY2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fbmF2aWdhdGlvbl9fYnV0dG9uW3R5cGU9XCJidXR0b25cIl0nKTtcclxuICBsZXQgbWVudVByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1wcmV2aWV3Jyk7XHJcbiAgbGV0IG1lbnVBdXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYXV0aG9yaXphdGlvbicpO1xyXG5cclxuICBhdXRoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgYXV0aEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhdXRoLWJ1dHRvbi0taGlkZGVuJyk7XHJcbiAgICBtZW51UHJldi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXByZXZpZXctLWFjdGl2ZScpO1xyXG4gICAgbWVudUF1dGguY2xhc3NMaXN0LmFkZCgnbWVudS1hdXRob3JpemF0aW9uLS1hY3RpdmUnKTtcclxuICB9KTtcclxuXHJcbiAgYmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGF1dGhCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYXV0aC1idXR0b24tLWhpZGRlbicpO1xyXG4gICAgbWVudVByZXYuY2xhc3NMaXN0LmFkZCgnbWVudS1wcmV2aWV3LS1hY3RpdmUnKTtcclxuICAgIG1lbnVBdXRoLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtYXV0aG9yaXphdGlvbi0tYWN0aXZlJyk7XHJcbiAgfSk7XHJcbiAgXHJcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/auth.js\n");

/***/ })

/******/ });