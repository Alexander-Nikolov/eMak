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
$(window).scroll(scrolling);
$(window).resize(scrolling);



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
    var linkNames = getLowerSecNames(e.currentTarget.firstChild);
    $('#sideMenu li>span span:first-child').each(function (index) {
        $(this).text(linkNames[index]);
    });
    $('#navigation ul li').children().removeClass('navClickedOn');
    $(e.currentTarget).addClass('navClickedOn');
    setTimeout(scrolling, 500);
});












