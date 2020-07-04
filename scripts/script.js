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

    //map


})