/*************************
Scroll
*************************/

$("#toHome").click(function () {
    $('html, body').animate({
        scrollTop: $("header").offset().top - 75
    }, 1000);
});



function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();

    var elemTop = $(elem).offset().top - 450;
    var elemBottom = elemTop + $(elem).height();

    return elemTop <= docViewTop && elemBottom >= docViewTop;
}



/*************************
Navigation hide + to home button
*************************/
$("#fixedNav").hide();
var navShow = false;
var toHomeShow = false;
var isMenuDown = false;
function scrolling() {
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

    if ($(window).scrollTop() > 450 && !toHomeShow) {
        toHomeShow = true;
        $('#toHome').stop().animate({
            bottom: 30
        }, 50)
    } else if ($(window).scrollTop() < 450) {
        toHomeShow = false;
        $('#toHome').stop().animate({
            bottom: -40
        }, 50)
    }



    var sideMenuBottom = $('#sideMenu').offset().top + $('#sideMenu').height();
    var mainBottom = $('main').offset().top + $('main').height();
    var winTop = $(window).scrollTop();





    if (sideMenuBottom >= mainBottom - 30 && !isMenuDown) {
        isMenuDown = true;
        $('#sideMenu').css({
            top: mainBottom - $('#sideMenu').height() - 100,
            position: 'absolute'
        })
    }

    if (isMenuDown && winTop < $('#sideMenu').offset().top - 100) {
        isMenuDown = false;
        $("#sideMenu").css({
            position: 'fixed',
            top: '100px'
        })
    }

    if ($(window).scrollTop() > 550 && window.innerWidth >= '1170' && !isMenuDown) {
        $("#sideMenu").css({
            position: 'fixed',
            top: '100px'
        })
    } else if ($(window).scrollTop() < 550 && !isMenuDown) {
        $("#sideMenu").css({
            position: 'static'
        })

    }



    $('.productSection').each(function (index) {
        var res = isScrolledIntoView($('#productSection' + (index + 1)));
        if (res) {
            $($('main aside nav ul li')[index]).addClass('asideNavTargeted');
            $($('main aside nav ul li')[index].firstChild.lastChild.firstChild).css({
                visibility: 'visible'
            })
        } else {
            $($('main aside nav ul li')[index]).removeClass('asideNavTargeted');
            if ($($('main aside nav ul li')[index]).hasClass('asideNavHovered')) {
                return;
            }
            $($('main aside nav ul li')[index].firstChild.lastChild.firstChild).css({
                visibility: 'hidden'
            })
        }
    })



}
$(window).scroll(function () {
    isMenuDown = false;
    scrolling();
});
$(window).resize(function () {
    scrolling();
    $('#toHome').css({
        left: $('#wrapper').offset().left + 10 + 'px'
    })
});



/*************************
Arrows for side menu
*************************/

$('main aside nav ul li').hover(function (e) {
    targetedLowSec(e.currentTarget);
}, function (e) {
    lostLowSec(e.currentTarget);
})

function targetedLowSec(ele) {
    $(ele).addClass('asideNavHovered');
    $(ele.firstChild.lastChild.firstChild).css({
        visibility: 'visible'
    })
}


function lostLowSec(ele) {
    $(ele).removeClass('asideNavHovered');
    if ($(ele).hasClass('asideNavTargeted')) {
        return;
    }
    $(ele.firstChild.lastChild.firstChild).css({
        visibility: 'hidden'
    })
}


$('main aside nav ul li').click(function (e) {
    $('main aside nav ul li').each(function (index) {
        if ($('main aside nav ul li')[index] === e.currentTarget) {
            $('html, body').animate({
                scrollTop: $("#productSection" + (index + 1)).offset().top - 200
            }, 1000);
        }
    })

})




$('.navLink').click(function (e) {
    var obj = productSections.findProduct(e.currentTarget.firstChild);
    $('#sideMenu li>span span:first-child').each(function (index) {
        $(this).text(obj.lowerSections[index].name);
    });
    $('#navigation ul li').children().removeClass('navClickedOn');
    $(e.currentTarget).addClass('navClickedOn');
    setTimeout(scrolling, 500);
});

$('#myAccount').on('mouseenter', function (e) {
    if (localStorage.getItem("user_id") == null){
        createHoverWindow(e.currentTarget, 'Нямаш акаунт ?', 'Влезте в акаунт');
    } else {
        $('#profileMenu').show();
    }
});

$('#myAccount').on('mouseleave', function (e) {
    if (localStorage.getItem("user_id") == null){
        $(e.currentTarget).children().last().remove();
    } else {
        $('#profileMenu').hide();
    }
});

$('#myFavorites').on('mouseenter', function (e) {
    if (localStorage.getItem("user_id") == null){
        createHoverWindow(e.currentTarget, 'Трябва да си в акаунт за да видиш любимите си продукти', 'Влезте в акаунт');
    } else {
        $("#myFavorites > a").attr('href', './Profile/myfavourites.html');
    }
});

$('#myFavorites').on('mouseleave', function (e) {
    if (localStorage.getItem("user_id") == null){
        $(e.currentTarget).children().last().remove();
    }
});

$('#myCart').on('mouseenter', function (e) {
    createHoverWindow(e.currentTarget, 'Вашите продукти в количката:', 'Влезте в акаунт');
});

$('#myCart').on('mouseleave', function (e) {
    $(e.currentTarget).children().last().remove();
});

function onBodyLoad() {
    $('#toHome').css({
        left: $('#wrapper').offset().left + 10 + 'px'
    })
}







