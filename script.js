'use strict';

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

