document.body.onload = function () {
    var search = sessionStorage.searchInput || '...';
    document.getElementById('searchResult').innerHTML = 'Резултати за: \" ' + search + ' \"';

    productSections.displaySearchResult(search);
}


function scrolling() {
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



$("#toHome").click(function () {
    $('html, body').animate({
        scrollTop: $("header").offset().top - 75
    }, 1000);
});


$('#toHome').css({
    left: $('#wrapper').offset().left + 10 + 'px'
})