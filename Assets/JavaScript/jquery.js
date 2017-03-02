/*************************
Scroll
*************************/

$("#toHome").click(function () {
    $('html, body').animate({
        scrollTop: $("header").offset().top - 20
    }, 1000);
});



/*************************
Navigation hide + to home button
*************************/
$("#fixedNav").hide();
var navShow = false;
$(window).scroll(function () {
    if ($(window).scrollTop() > 230 && !navShow) {
        navShow = true;
        $("#fixedNav").fadeTo(500, 0.9);
        $("#navigation").hide().fadeIn(1000).css({
            position: 'fixed'

        });
        $('#toHome').stop().animate({
            bottom: 10
        }, 50)
    } else if ($(window).scrollTop() < 230) {
        navShow = false;
        $("#fixedNav").hide();
        $("#navigation").css({
            'position': 'static'
        })
        $('#toHome').stop().animate({
            bottom: -40
        }, 50)
    }

})