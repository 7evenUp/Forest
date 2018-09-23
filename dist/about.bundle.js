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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/about.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/about.js":
/*!*************************************!*\
  !*** ./src/assets/scripts/about.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/example */ \"./src/assets/scripts/modules/example.js\");\n\n__webpack_require__(/*! ./modules/google-map */ \"./src/assets/scripts/modules/google-map.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYWJvdXQuanM/ZDdmNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL2Fib3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9tb2R1bGVzL2V4YW1wbGVcIjtcclxuaW1wb3J0IFwiLi9tb2R1bGVzL2dvb2dsZS1tYXBcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/about.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/example.js":
/*!***********************************************!*\
  !*** ./src/assets/scripts/modules/example.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function () {\n  'use strict';\n\n  var menuBtn = document.querySelector('.header__menu');\n  var menu = document.querySelector('.modal-menu');\n\n  menuBtn.addEventListener('click', function () {\n    if (menuBtn.classList.contains('header__menu--active')) {\n      menuBtn.classList.remove('header__menu--active');\n      menu.classList.remove('modal-menu--active');\n    } else {\n      menuBtn.classList.add('header__menu--active');\n      menu.classList.add('modal-menu--active');\n    }\n  });\n})();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9leGFtcGxlLmpzP2VhMzYiXSwibmFtZXMiOlsibWVudUJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnUiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBQyxZQUFZO0FBQ1g7O0FBRUEsTUFBSUEsVUFBVUMsU0FBU0MsYUFBVCxDQUF1QixlQUF2QixDQUFkO0FBQ0EsTUFBSUMsT0FBT0YsU0FBU0MsYUFBVCxDQUF1QixhQUF2QixDQUFYOztBQUVBRixVQUFRSSxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxZQUFZO0FBQzVDLFFBQUlKLFFBQVFLLFNBQVIsQ0FBa0JDLFFBQWxCLENBQTJCLHNCQUEzQixDQUFKLEVBQXdEO0FBQ3RETixjQUFRSyxTQUFSLENBQWtCRSxNQUFsQixDQUF5QixzQkFBekI7QUFDQUosV0FBS0UsU0FBTCxDQUFlRSxNQUFmLENBQXNCLG9CQUF0QjtBQUNELEtBSEQsTUFHTztBQUNMUCxjQUFRSyxTQUFSLENBQWtCRyxHQUFsQixDQUFzQixzQkFBdEI7QUFDQUwsV0FBS0UsU0FBTCxDQUFlRyxHQUFmLENBQW1CLG9CQUFuQjtBQUNEO0FBQ0YsR0FSRDtBQVVELENBaEJEIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvZXhhbXBsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBsZXQgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21lbnUnKTtcclxuICBsZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1tZW51Jyk7XHJcblxyXG4gIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAobWVudUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYWRlcl9fbWVudS0tYWN0aXZlJykpIHtcclxuICAgICAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX21lbnUtLWFjdGl2ZScpO1xyXG4gICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW1lbnUtLWFjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX21lbnUtLWFjdGl2ZScpO1xyXG4gICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21vZGFsLW1lbnUtLWFjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFxyXG59KSgpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/example.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/google-map.js":
/*!**************************************************!*\
  !*** ./src/assets/scripts/modules/google-map.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// var map;\n// function initMap() {\n//   var coordinates = {lat: 60.048339, lng: 30.322016},\n\n//   map = new google.maps.Map(document.getElementById('map'), {\n//     center: coordinates,\n//     zoom: 15,\n//     scrollwheel: false,\n//     disableDefaultUI: true\n//   }),\n\n//   marker = new google.maps.Marker({\n//     position: {lat: 60.047709, lng: 30.334475},\n//     map: map\n//   })\n// }\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9nb29nbGUtbWFwLmpzPzU1MmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvZ29vZ2xlLW1hcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHZhciBtYXA7XHJcbi8vIGZ1bmN0aW9uIGluaXRNYXAoKSB7XHJcbi8vICAgdmFyIGNvb3JkaW5hdGVzID0ge2xhdDogNjAuMDQ4MzM5LCBsbmc6IDMwLjMyMjAxNn0sXHJcblxyXG4vLyAgIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XHJcbi8vICAgICBjZW50ZXI6IGNvb3JkaW5hdGVzLFxyXG4vLyAgICAgem9vbTogMTUsXHJcbi8vICAgICBzY3JvbGx3aGVlbDogZmFsc2UsXHJcbi8vICAgICBkaXNhYmxlRGVmYXVsdFVJOiB0cnVlXHJcbi8vICAgfSksXHJcblxyXG4vLyAgIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4vLyAgICAgcG9zaXRpb246IHtsYXQ6IDYwLjA0NzcwOSwgbG5nOiAzMC4zMzQ0NzV9LFxyXG4vLyAgICAgbWFwOiBtYXBcclxuLy8gICB9KVxyXG4vLyB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/google-map.js\n");

/***/ })

/******/ });