$('#myAccount').on('mouseenter', function (e) {
    if (sessionStorage.getItem("user") == null) {
        createHoverWindow(e.currentTarget, 'Нямаш акаунт ?', 'Влезте в акаунт', 'profile');
    } else {
        createHoverWindow(e.currentTarget, 'links', 'Излез', 'profile');
    }
});

$('#myAccount').on('mouseleave', function (e) {
    $(e.currentTarget).children().last().remove();
});

$('#myFavorites').on('mouseenter', function (e) {
    if (sessionStorage.getItem("user") == null) {
        createHoverWindow(e.currentTarget, 'Трябва да си в акаунт за да видиш любимите си продукти.', 'Влезте в акаунт', 'fav');
    } else {
        createHoverWindow(e.currentTarget, 'Запазете продуктите които желаете за да ги разгледате по-късно.', 'Любими', 'fav');
    }
});

$('#myFavorites').on('mouseleave', function (e) {
    $(e.currentTarget).children().last().remove();
});

$('#myCart').on('mouseenter', function (e) {
    var user = JSON.parse(sessionStorage.user);
    createHoverWindow(e.currentTarget, 'Вашите продукти в количката: ' + user.cart.products.length, 'Количка', 'cart');
});

$('#myCart').on('mouseleave', function (e) {
    $(e.currentTarget).children().last().remove();
});