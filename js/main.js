/******/
(function (modules) { // webpackBootstrap
    /******/ 	// The module cache


    /******/
    var installedModules = {};
    /******/
    /******/ 	// The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ 		// Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ 		// Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/            i: moduleId,
            /******/            l: false,
            /******/            exports: {}
            /******/
        };
        /******/
        /******/ 		// Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ 		// Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ 		// Return the exports of the module
        /******/
        return module.exports;
        /******/
    }

    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ 	// expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ 	// define getter function for harmony exports
    /******/
    __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {enumerable: true, get: getter});
            /******/
        }
        /******/
    };
    /******/
    /******/ 	// define __esModule on exports
    /******/
    __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
            /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {value: true});
        /******/
    };
    /******/
    /******/ 	// create a fake namespace object
    /******/ 	// mode & 1: value is a module id, require it
    /******/ 	// mode & 2: merge all properties of value into the ns
    /******/ 	// mode & 4: return value when already ns object
    /******/ 	// mode & 8|1: behave like require
    /******/
    __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __webpack_require__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', {enumerable: true, value: value});
        /******/
        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
            return value[key];
        }.bind(null, key));
        /******/
        return ns;
        /******/
    };
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
            /******/            function getDefault() {
                return module['default'];
            } :
            /******/            function getModuleExports() {
                return module;
            };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ 	// __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/
    /******/ 	// Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 0);
    /******/
})
/************************************************************************/
/******/([
    /* 0 */
    /***/ (function (module, exports, __webpack_require__) {

        __webpack_require__(2);
        module.exports = __webpack_require__(1);


        /***/
    }),
    /* 1 */
    /***/ (function (module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

        /***/
    }),
    /* 2 */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
// ESM COMPAT FLAG
        __webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/js/mainPage.js
        const LANG_SELECT = document.querySelector('.lang-select')

        LANG_SELECT.onclick = () => {
            LANG_SELECT.classList.toggle('active')
        }

        function mainSlider() {


            jQuery('.main__slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
				autoplaySpeed: 9000,
                speed: 2000,
                fade: true,
                dots: false,
                swipe: false,
                adaptiveHeight: true
            });




            const BTN_PREV = main_pagination.querySelector('.btn-next')
            const BTN_NEXT = main_pagination.querySelector('.btn-prev')
            const PROGRESS = main_pagination.querySelector('.progress')
            const END = main_pagination.querySelector('.end')
            const SLIDER_ITEM = main_slider.querySelectorAll('.slider-item')

            let sliderCount = 0
            let stepSlider

            BTN_PREV.onclick = () => {
                jQuery('.main__slider').slick('slickPrev');
                progressSet()
            }
            BTN_NEXT.onclick = () => {
                jQuery('.main__slider').slick('slickNext');
                progressSet()
            }

            SLIDER_ITEM.forEach((SLIDER_ITEM) => {
                if (!SLIDER_ITEM.classList.contains('slick-cloned')) {
                    sliderCount++
                }
            })

            stepSlider = 60 / sliderCount

            if (sliderCount < 10) {
                sliderCount = `0${sliderCount}`
            }

            END.innerText = sliderCount

            function progressSet() {
                let progress = 1
                let isActive = false
                SLIDER_ITEM.forEach((SLIDER_ITEM) => {
                    if (!SLIDER_ITEM.classList.contains('slick-cloned')) {
                        if (!SLIDER_ITEM.classList.contains('slick-active') && !isActive) {
                            progress++
                        } else {
                            isActive = true
                        }
                    }
                })

                progress = progress * stepSlider
                PROGRESS.style.width = progress + '%'
            }

            progressSet()

            //Так как полоса слайдера кастомная, пришлось отключить автоперелистывание в самом слайдере.

            function autoPlayMainSlider() {
                const MAIN_SLIDER = document.querySelector('.main__slider')

                let sliderInterval = setInterval(() => {
                    BTN_NEXT.onclick()
                }, 6000)

                MAIN_SLIDER.addEventListener('mouseout', () => {
                    sliderInterval = setInterval(() => {
                        BTN_NEXT.onclick()
                    }, 6000)
                })

                MAIN_SLIDER.addEventListener('mouseover', () => {
                    clearInterval(sliderInterval)
                })

            }

            autoPlayMainSlider()

        }
        jQuery(".slider-news").slick({
            slidesToScroll: 1,
            dots: true,
            slidesToShow: 4,
            infinite: false,
            responsive: [
                {
                    breakpoint: 1150,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        })

// CONCATENATED MODULE: ./src/js/voteForm.js

        function voteForm(element) {
            const BTN_SUBMIT = document.querySelector('.vote__box').querySelector('.btn-submit')
            const CHECK_BOX = document.querySelectorAll('.checkbox')
            const VOTE_INPUT = document.getElementById('vote-input')
            let parentCheckBox = element.parentElement
            let checkBox = parentCheckBox.querySelector('.checkbox')
            let checkBoxTitle = parentCheckBox.querySelector('.checkbox-title')

            CHECK_BOX.forEach((CHECK_BOX) => {
                CHECK_BOX.classList.remove('active')
            })
            checkBox.classList.add('active')

            VOTE_INPUT.value = checkBoxTitle.innerText
            BTN_SUBMIT.removeAttribute('disabled')

        }

// CONCATENATED MODULE: ./src/js/index.js


        const MENU_LINK = document.querySelectorAll('.menu-link')

        const main_pagination = document.querySelector('.main__pagination');
        const main_slider = document.querySelector('.main__slider');
        if(main_pagination && main_slider)
        {
            mainSlider();
        }




//Функция перевода страницы если был переход с казахского языка на любой другой язык
let url = location.href;
let urlCopy = new URL(url);
let langSelected = urlCopy.searchParams.get('langSelected');


const LANG = document.querySelector('.lang-block').querySelectorAll('.lang')

if (langSelected !== null ) {
    LANG.forEach( (LANG) => {
        if (LANG.getAttribute('data-google-lang') === langSelected) {
            setTimeout( () => {
                LANG.click()
            }, 500)
        }
    })
} 

//Функция по открытию блока с выбором языка
        const SELECT_LANG = document.querySelector('.current-lang')
        const LANG_BLOCK = document.querySelector('.lang-block')

        SELECT_LANG.onclick = () => {
            LANG_BLOCK.classList.toggle('active')
            SELECT_LANG.classList.toggle('active')
        }

//Переменные для мобильного меню
//         const BTN_MENU = document.querySelector('.btn-menu')
//         const HEADER_MENU = document.querySelector('.header__menu')
//         const HEADER_MOBILE_CONTACT = document.querySelector('.header__mobile-contact')
//         const HTML_TAG = document.querySelector('html')
//
//         window.addEventListener('click', (event) => {
//             let element = event.target
//
//             if (element.classList.contains('checkbox') || element.classList.contains('checkbox-title')) {
//                 voteForm(element)
//             }
//
//             if (element.classList.contains('submenu') && element.parentNode.classList.contains('active')) {
//                 MENU_LINK.forEach((MENU_LINK) => {
//                     MENU_LINK.classList.remove('active')
//                 })
//             } else {
//                 if (element.classList.contains('submenu')) {
//                     MENU_LINK.forEach((MENU_LINK) => {
//                         MENU_LINK.classList.remove('active')
//                     })
//                     element.parentNode.classList.add('active')
//                 }
//             }
//
//             if (!element.classList.contains('btn-menu') && BTN_MENU.classList.contains('active')) {
//                 BTN_MENU.classList.remove('active')
//                 HEADER_MOBILE_CONTACT.classList.remove('active')
//                 HEADER_MENU.classList.remove('active')
//                 HTML_TAG.classList.remove('active')
//             } else {
//                 if (element.classList.contains('btn-menu')) {
//                     BTN_MENU.classList.toggle('active')
//                     HEADER_MOBILE_CONTACT.classList.toggle('active')
//                     HEADER_MENU.classList.toggle('active')
//                     HTML_TAG.classList.toggle('active')
//                 }
//
//             }
//         })
//Маска ввода телефона в форме
        jQuery(document).ready(function($) {
            $(".phone-mask").mask("+7 (999) 999-99-99");
        });


//Удалить после проверки, сделал для проверки ОБЯЗАТЕЛЬНО!!!!!!!!!!

        // document.querySelector('.link-address').onclick = function () {
        //     document.querySelector('.popap').classList.toggle('active');
        // };
        //
        // document.querySelector('.close-map').onclick = function () {
        //     document.querySelector('.popap').classList.remove('active');
        // };
        //
        // document.querySelector('.btn-classic').onclick = function () {
        //     document.querySelector('.modal-form').classList.toggle('active');
        // };
        //
        // document.querySelector('.close-form').onclick = function () {
        //     document.querySelector('.modal-form').classList.remove('active');
        // };


        /***/
    })
    /******/]);
//# sourceMappingURL=main.js.map