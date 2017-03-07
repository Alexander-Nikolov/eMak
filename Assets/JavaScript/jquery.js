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
$(window).scroll(function () {
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
    var linkNames = getLowerSecNames(e.currentTarget.firstChild);
    $('#sideMenu li>span span:first-child').each(function (index) {
        $(this).text(linkNames[index]);
    });
    $('#navigation ul li').children().removeClass('navClickedOn');
    $(e.currentTarget).addClass('navClickedOn');
    setTimeout(scrolling, 500);
});



$('#myAccount').on('mouseenter', function(e) {
    createHoverWindow(e.currentTarget, e.clientX, e.clientY, 'Нямаш акаунт ?', 'Влезте в акаунт');
});

$('#myAccount').on('mouseleave', function(e) {
    $(e.currentTarget).children().last().remove();
});

$('#myFavorites').on('mouseenter', function(e) {
    createHoverWindow(e.currentTarget, e.clientX, e.clientY, 'Трябва да си в акаунт за да видиш любимите си продукти ?', 'Влезте в акаунт');
});

$('#myFavorites').on('mouseleave', function(e) {
    $(e.currentTarget).children().last().remove();
});

$('#myCart').on('mouseenter', function(e) {
    createHoverWindow(e.currentTarget, e.clientX, e.clientY, 'Вашите продукти в количката:', 'Влезте в акаунт');
});

$('#myCart').on('mouseleave', function(e) {
    $(e.currentTarget).children().last().remove();
});


function createHoverWindow(target, x, y, infoText, buttonInfo) {
    var ele1 = document.createElement('div');
    ele1.className = 'hoverWindow';
    ele1.style.left = x - $(target).offset().left + 'px';
    ele1.style.top = y - $(target).offset().top + 'px';
    target.appendChild(ele1);

    var ele2 = document.createElement('div');
    ele2.className = 'hoverWindowContainer';
    ele1.appendChild(ele2);

    var ele3 = document.createElement('p');
    ele3.className = 'hoverWindowInfo';
    ele3.textContent = infoText;
    ele2.appendChild(ele3);


    var ele4 = document.createElement('div');
    ele4.className = 'hoverWindowButton';
    ele2.appendChild(ele4);


    var ele5 = document.createElement('span');
    ele4.appendChild(ele5);

    var ele6 = document.createElement('span');
    ele6.textContent = '>>';
    ele5.appendChild(ele6);

    var ele7 = document.createElement('span');
    ele7.textContent = buttonInfo;
    ele5.appendChild(ele7);
}





function onBodyLoad() {
    $('#toHome').css({
        left: $('#wrapper').offset().left + 10 + 'px'
    })
}


document.body.onload = function () {
    onBodyLoad()
}




