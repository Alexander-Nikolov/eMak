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