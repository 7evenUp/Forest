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
eval("\n\n(function () {\n  'use strict';\n\n  var authButton = document.querySelector('.auth-button');\n  var backButton = document.querySelector('.auth-panel__button[type=\"button\"]');\n  var greetingCard = document.querySelector('.card-greeting');\n  var authCard = document.querySelector('.card-auth');\n\n  authButton.addEventListener('click', function () {\n    authButton.classList.add('auth-button--hidden');\n    greetingCard.classList.remove('card-greeting--active');\n    authCard.classList.add('card-auth--active');\n  });\n\n  backButton.addEventListener('click', function () {\n    authButton.classList.remove('auth-button--hidden');\n    greetingCard.classList.add('card-greeting--active');\n    authCard.classList.remove('card-auth--active');\n  });\n})();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz85ZWY0Il0sIm5hbWVzIjpbImF1dGhCdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJiYWNrQnV0dG9uIiwiZ3JlZXRpbmdDYXJkIiwiYXV0aENhcmQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsWUFBWTtBQUNYOztBQUVBLE1BQUlBLGFBQWFDLFNBQVNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBakI7QUFDQSxNQUFJQyxhQUFhRixTQUFTQyxhQUFULENBQXVCLG9DQUF2QixDQUFqQjtBQUNBLE1BQUlFLGVBQWVILFNBQVNDLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQW5CO0FBQ0EsTUFBSUcsV0FBV0osU0FBU0MsYUFBVCxDQUF1QixZQUF2QixDQUFmOztBQUVBRixhQUFXTSxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxZQUFNO0FBQ3pDTixlQUFXTyxTQUFYLENBQXFCQyxHQUFyQixDQUF5QixxQkFBekI7QUFDQUosaUJBQWFHLFNBQWIsQ0FBdUJFLE1BQXZCLENBQThCLHVCQUE5QjtBQUNBSixhQUFTRSxTQUFULENBQW1CQyxHQUFuQixDQUF1QixtQkFBdkI7QUFDRCxHQUpEOztBQU1BTCxhQUFXRyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxZQUFNO0FBQ3pDTixlQUFXTyxTQUFYLENBQXFCRSxNQUFyQixDQUE0QixxQkFBNUI7QUFDQUwsaUJBQWFHLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLHVCQUEzQjtBQUNBSCxhQUFTRSxTQUFULENBQW1CRSxNQUFuQixDQUEwQixtQkFBMUI7QUFDRCxHQUpEO0FBTUQsQ0FwQkQiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBsZXQgYXV0aEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdXRoLWJ1dHRvbicpO1xyXG4gIGxldCBiYWNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1dGgtcGFuZWxfX2J1dHRvblt0eXBlPVwiYnV0dG9uXCJdJyk7XHJcbiAgbGV0IGdyZWV0aW5nQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWdyZWV0aW5nJyk7XHJcbiAgbGV0IGF1dGhDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtYXV0aCcpO1xyXG5cclxuICBhdXRoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgYXV0aEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhdXRoLWJ1dHRvbi0taGlkZGVuJyk7XHJcbiAgICBncmVldGluZ0NhcmQuY2xhc3NMaXN0LnJlbW92ZSgnY2FyZC1ncmVldGluZy0tYWN0aXZlJyk7XHJcbiAgICBhdXRoQ2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkLWF1dGgtLWFjdGl2ZScpO1xyXG4gIH0pO1xyXG5cclxuICBiYWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgYXV0aEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhdXRoLWJ1dHRvbi0taGlkZGVuJyk7XHJcbiAgICBncmVldGluZ0NhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZC1ncmVldGluZy0tYWN0aXZlJyk7XHJcbiAgICBhdXRoQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdjYXJkLWF1dGgtLWFjdGl2ZScpO1xyXG4gIH0pO1xyXG4gIFxyXG59KSgpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/auth.js\n");

/***/ })

/******/ });