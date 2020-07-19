$(document).ready(function () {
    //left nav


    //logo animation
    $('.logo').hover(function(){
        $(this).toggleClass('animate__animated animate__bounceIn')
    })

    //slide1 button animation
    $('.text1__button').hover(function(){
        $(this).toggleClass('text1__button_animate');
        $('.button1__text').toggleClass('button1__text_animate');
    })

    //slide3 career animation
    $('.button3__text').hover(function(){
        $(this).toggleClass('animate__animated animate__pulse');
    })

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
        request.name = $('.name-input').val();
        request.email = $('.mail-input').val();
        console.log(request)
    })

})