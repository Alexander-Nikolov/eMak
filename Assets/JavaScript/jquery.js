/*************************
Scroll
*************************/

$("#toHome").click(function () {
    $('html, body').animate({
        scrollTop: $("header").offset().top - 75
    }, 1000);
});



/*************************
Navigation hide + to home button
*************************/
$("#fixedNav").hide();
var navShow = false;
var toHomeShow = false;
$(window).scroll(function () {
    if ($(window).scrollTop() > 230 && !navShow && window.innerWidth >= '1170') {
        navShow = true;
        $("body").css({
            "margin-top": "75px"
        })
        $("#fixedNav").fadeTo(500, 0.9);
        $("#navigation").hide().fadeIn(1000).css({
            position: 'fixed'

        });

    } else if ($(window).scrollTop() < 230 || window.innerWidth <= '1170') {
        navShow = false;
        $("body").css({
            "margin-top": "0px"
        })
        $("#fixedNav").hide();
        $("#navigation").css({
            position: 'static'
        })

    }

    if ($(window).scrollTop() > 250 && !toHomeShow) {
        toHomeShow = true;
        $('#toHome').stop().animate({
            bottom: 10
        }, 50)
    } else if ($(window).scrollTop() < 250) {
        toHomeShow = false;
        $('#toHome').stop().animate({
            bottom: -40
        }, 50)
    }






    if ($(window).scrollTop() > 550 && window.innerWidth >= '1170') {
        $("#sideMenu").css({
            position: 'fixed',
            top: '100px'
        })
    } else {
        $("#sideMenu").css({
            position: 'static'
        })
    }

})



/*************************
Arrows for side menu
*************************/

$('main aside nav ul li').hover(function (e) {
    $(e.target.lastChild.firstChild).css({
        visibility: 'visible'
    })
}, function (e) {
    $(e.target.lastChild.firstChild).css({
        visibility: 'hidden'
    })
})







$('.navLink').click(function (e) {
    var linkNames = getLowerSecNames(e.currentTarget.firstChild);
    $('#sideMenu li>span span:first-child').each(function (index) {
        $(this).text(linkNames[index]);
    });
    $('#navigation ul li').children().removeClass('navClickedOn');
    $(e.currentTarget).addClass('navClickedOn');
});












