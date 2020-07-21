$(document).ready(function () {
    //left nav
    $('body').on('click', '.number-slide:not(.number-active)', function() {
        const currentActiveNumber = $('.number-active');

        const newActiveSlide = $(this).attr('data-slide');
        const currentActiveSlide = $(currentActiveNumber).attr('data-slide');

        if (newActiveSlide == 'slide1') {
            $('.nav-button').css('opacity', '0');
        } else {
            $('.nav-button').css('opacity', '1');
        }

        $(currentActiveNumber).removeClass('number-active');
        $(this).addClass('number-active');

        $(`.${currentActiveSlide}`).removeClass('slide-active animate__animated animate__fadeIn');
        $(`.${newActiveSlide}`).addClass('slide-active animate__animated animate__fadeIn');

        $('.slick-slider').slick('refresh');
    });

    //logo animation
    $('.logo').hover(function(){
        $(this).toggleClass('animate__animated animate__bounceIn')
    });

    //slide1 button animation
    $('.text1__button').hover(function(){
        $(this).toggleClass('text1__button_animate');
        $('.button1__text').toggleClass('button1__text_animate');
    });

    //slider
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 700,
        prevArrow: $('.left-arrow'),
        nextArrow: $('.right-arrow'),
        centerMode: true,
        centerPadding: 0,
        adaptiveHeight: false,
    });

    //slide3 career animation
    $('.button3__text').hover(function(){
        $(this).toggleClass('animate__animated animate__pulse');
    })

    //checkboxes

    const checkboxes = ['app', 'graphic', 'motion', 'ux', 'web', 'marketing']

    const request = {}

    for(const checkbox of checkboxes) {
        request[checkbox] = false;
        $(`#checkbox-${checkbox}`).on('click', function () {
            request[checkbox] = !request[checkbox]
            $(this).parent().toggleClass('check-checkbox')
        })
    }

    //get data from user
    $('.request-button').on('click', function () {
        if($('form')[0].checkValidity()) {
            $('form').submit(function (event) {
                event.preventDefault();
            });
            request.name = $('.name-input').val();
            request.email = $('.mail-input').val();
            console.log(request)
        } else {
            //red borders
        }


    });

})