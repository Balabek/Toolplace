$(document).ready(function() {

    // Properly position the "go-to" anchor scroll for lower screen widths
    if ((screen.width < 991)) {
        $('a.anchor').click(function(){
            $('html, body').animate({
                scrollTop: $($(this).attr('href') ).offset().top -250
            }, 800);
        });
    }
    else {

        $('a.anchor').click(function(){
            $('html, body').animate({
                scrollTop: $($(this).attr('href') ).offset().top -1
            }, 800);
        });
    }

    // Fancy animation for hamburger menu
    $('.navbar-toggler').on('click', function(){
        $('.animated-icon1').toggleClass('open');
    });

});