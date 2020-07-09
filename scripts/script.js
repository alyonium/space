$(document).ready(function () {

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

    //slider center slide




})