$(document).ready(function(){
    $(window).scroll(function (){
        if($(this).scrollTop()>600){
          $('.pageup').fadeIn('slow');  
        } else {
            $('.pageup').fadeOut('slow');
        }
    });

    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"})
        return false;
    });
    new WOW().init();
});