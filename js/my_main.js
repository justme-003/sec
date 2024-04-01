$(document).ready(function () {
	

    $('.external_link a').prepend('<span class="icon"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="30" height="30" fill="#D8D8D8" fill-opacity="0.01"></rect> <path d="M17.6582 9.2097L17.7524 9.29289L22.7524 14.2929C22.7803 14.3208 22.8066 14.3503 22.831 14.3813L22.7524 14.2929C22.7878 14.3283 22.82 14.3657 22.849 14.4047L22.9207 14.5159L22.9701 14.6187L23.0073 14.726L23.0301 14.8253L23.0436 14.9406L23.0425 15.0752L23.03 15.1747L23.0032 15.288L22.9701 15.3812L22.9371 15.453L22.8896 15.5361L22.8256 15.6254L22.7524 15.7071L17.7524 20.7071C17.3619 21.0976 16.7287 21.0976 16.3382 20.7071C15.9777 20.3466 15.95 19.7794 16.255 19.3871L16.3382 19.2929L19.63 16H7.07715C6.52486 16 6.07715 15.5523 6.07715 15C6.07715 14.4872 6.46319 14.0645 6.96053 14.0067L7.07715 14H19.631L16.3382 10.7071C15.9477 10.3166 15.9477 9.68342 16.3382 9.29289C16.6687 8.96245 17.1728 8.91161 17.5567 9.14038L17.6582 9.2097Z" class="svg"></path></svg></span>');
	
	
	$('.btn-classic').click(function () {
        $('.modal-form').toggleClass('active');
    });

    $('.lang-item-kz').attr('data-google-lang', "kz");
    $('.lang-item-ru').attr('data-google-lang', 'ru');

    $('.lang-item').addClass('notranslate');

    href_ru = $('.lang-item-ru a').attr("href");
    // href_ru += '?langSelected=ru';
    $('.lang-item-ru a').attr("href", href_ru);

    href_kz = $('.lang-item-kz a').attr("href");
    // href_kz += '?langSelected=kz';
    $('.lang-item-kz a').attr("href", href_kz);

    $('.file-block__btn').click(function () {
        if (! $(this).hasClass('active')){
            $('.file-block__download').addClass('active');
            $(this).addClass('active');
            $(this).html('Свернуть');
        }
        else{
            $('.file-block__download').removeClass('active');
            $('.file-block__download:nth-child(2)').addClass('active');
            $('.file-block__download:nth-child(3)').addClass('active');
            $('.file-block__download:nth-child(4)').addClass('active');
            $(this).removeClass('active');
            $(this).html('Показать все');
        }
    });

    $('.close-form').click(function () {
        $('.modal-form').removeClass('active');
    });

    $('.search').click(function () {
        $('.search_field').show();
    });

    $('.link-address').click(function () {
        $('.popap').toggleClass('active');
    });

    $('.close-map').click(function () {
        $('.popap').removeClass('active');
    });

    $('.go_popup_map_1').click(function (events) {
        events.preventDefault();
        $('.popap_1').addClass('active');
    });
    $('.go_popup_map_2').click(function (events) {
        events.preventDefault();
        $('.popap_2').addClass('active');
    });
    $('.go_popup_map_3').click(function (events) {
        events.preventDefault();
        $('.popap_3').addClass('active');
    });

    $('.news .news__calendar td a').parent().addClass('active');

    $(document).click(function (e) {

        if ( $(e.target).closest('.search_field').length || $(e.target).closest('.search').length) {
            // клик внутри элемента
            return;
        }
        else{
            $('.search_field').hide();
        }

        if ($(window).width() <= '1199'){
            if($('.header__menu').hasClass('active')){
                if ( $(e.target).closest('.header__mobile-contact').length || $(e.target).closest('.btn-menu').length || $(e.target).closest('.btn_back').length || $(e.target).closest('.header__menu').length) {
                    // клик внутри элемента
                    return;
                }

                else{
                    $('.btn-menu').removeClass('active');
                    $('.header__menu').removeClass('active').removeClass('overflow_hidden').removeClass('full-height');
                    $('.header__mobile-contact').removeClass('active');
                    $('html').removeClass('active');
                    $('.btn_back').removeClass('active');
                    $('.mobile_submenu_back').removeClass('active');
                    $('.mobile_submenu_back p').html('');
                    $('.menu-item-has-children').removeClass('active');
                    $('.header__menu').removeClass('overflow_hidden');
                }



            }
        }


    });

    $('.menu-item-has-children > a').click(function (event) {
        event.preventDefault();
    });

    $('.menu-item-has-children').click(function () {



        if ($(window).width() <= '1199')
        {
            $(this).addClass('active');
            $('.mobile_submenu_back').addClass('active');
            $('.mobile_submenu_back p').html($(this).children('a').html());
            $('.btn_back').addClass('active');
            $('.header__menu').addClass('overflow_hidden').addClass('full-height');
            $('.header__mobile-contact').removeClass('active');
        }
        else{
            $('.menu-item-has-children').not($(this)).removeClass('active');
            if($(this).hasClass('active')){
                $(this).removeClass('active');
            }
            else{
                $(this).addClass('active');
            }
        }

    });

    $('.btn_back').click(function () {
        if ($(window).width() <= '1199')
        {
            $(this).removeClass('active');
            $('.mobile_submenu_back').removeClass('active');
            $('.mobile_submenu_back p').html('');
            $('.menu-item-has-children').removeClass('active');
            $('.header__menu').removeClass('overflow_hidden').removeClass('full-height');
            $('.header__mobile-contact').addClass('active');
        }

    });

    $('.btn-menu').click(function () {
        if($(this).hasClass('active')){
            $('.header__menu').removeClass('active');
            $(this).removeClass('active');
            $('.header__mobile-contact').removeClass('active');
            $('html').removeClass('active');
        }
        else{
            $('.header__menu').addClass('active');
            $(this).addClass('active');
            $('.header__mobile-contact').addClass('active');
            $('html').addClass('active');
        }

    });






});

