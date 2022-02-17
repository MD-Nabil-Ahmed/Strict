$(function(){
    'use strict';



    // menu fix start
    
    let menuOff = $('#main_menu').offset().top;

    $(window).scroll(function(){
        let scrolling = $(this).scrollTop();

        if(scrolling > menuOff){
            $('#main_menu').addClass('menu_fix');
        }

        else{
            $('#main_menu').removeClass('menu_fix');
        }

    });

    // menu fix end






    // back to top button start

    $('#bc_top').click(function(){
        $('html, body').animate({
            scrollTop: 0,
        }, 2000);
    });


    $(window).scroll(function(){
        let scrolling = $(this).scrollTop();

        if(scrolling > 200){
            $('#bc_top').fadeIn();
        }

        else{
            $('#bc_top').fadeOut();
        }
    });
    // back to top button end



});