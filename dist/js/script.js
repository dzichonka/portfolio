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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.addEventListener("DOMContentLoaded", () => {
  const menuOpenBtn = document.querySelector('.hamburger');
  const menuCloseBtn = document.querySelector('.menu__close');
  const menu = document.querySelector('.menu');
  const menuLink = document.querySelectorAll('.menu__link');
  function openMenu() {
    menu.classList.add('active');
  }
  function closeMenu() {
    menu.classList.remove('active');
  }
  menuOpenBtn.addEventListener('click', openMenu);
  menuCloseBtn.addEventListener('click', closeMenu);
  menuLink.forEach(btn => {
    btn.addEventListener('click', closeMenu);
  });
  const percent = document.querySelectorAll('.skills__soft-percent');
  const line = document.querySelectorAll('.skills__soft-scale span');
  percent.forEach((item, i) => {
    line[i].style.width = item.innerHTML;
  });

  // //validation

  // function validateForms(form) {
  //     $(form).validate({
  //         rules: {
  //             name: {
  //                 required: true,
  //                 minlength: 2,
  //             },
  //             // phone: {
  //             //     required: true,
  //             //     minlength: 7,
  //             // },

  //             email: {
  //                 required: true,
  //                 email: true,
  //                 minlength: 7,
  //             },
  //         },
  //         messages: {
  //             name: {
  //                 required: "Please, enter your name",
  //                 minlength: jQuery.validator.format("At least {0} characters required!")
  //             },
  //             // phone: {
  //             //     required: "Please, enter your phone",
  //             //     minlength: jQuery.validator.format("At least {0} characters required!")
  //             // },
  //             email: {
  //                 required: "Please, enter your email adress",
  //                 email: "Enter a valid email adress",
  //                 minlength: jQuery.validator.format("At least {0} characters")
  //             },
  //         }
  //     });
  // }

  // validateForms('.contacts__form');

  // $.fn.setCursorPosition = function (pos) {
  //     if ($(this).get(0).setSelectionRange) {
  //         $(this).get(0).setSelectionRange(pos, pos);
  //     } else if ($(this).get(0).createTextRange) {
  //         var range = $(this).get(0).createTextRange();
  //         range.collapse(true);
  //         range.moveEnd('character', pos);
  //         range.moveStart('character', pos);
  //         range.select();
  //     }
  // };

  // // $("input[name=phone]").click(function () {
  // //     $(this).setCursorPosition(4);
  // // }).mask("+48 999 999 999");

  // // $("input[name=phone]").mask("+48 999 999 999");

  // //PHP mailer

  // $('form').submit(function (e) {
  //     e.preventDefault();

  //     if (!$(this).valid()) {
  //         return;
  //     }

  //     $.ajax({
  //         type: "POST",
  //         url: "mailer/smart.php",
  //         data: $(this).serialize()
  //     }).done(function () {
  //         $(this).find("input").val("");
  //         // $('#consultation, #order').fadeOut();
  //         // $('.overlay, #thanks').fadeIn('slow');

  //         $('form').trigger('reset');
  //     });
  //     return false;

  // });
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map