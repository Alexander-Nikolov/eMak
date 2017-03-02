$("#toHome").click(function () {
    $('html, body').animate({
        scrollTop:  $("header").offset().top - 20
    }, 1000);
});