var container = document.getElementById('container');
var theFavs = document.getElementById('prodCont');
var hasLoggedUser = (sessionStorage.user != null);
if (hasLoggedUser) {
    var user = getUserSetProdHolders();
    console.log(user);
    // if guest, then leave remove only the "empty favs h1";
    if (user.favCont.products.length > 0) {
        container.style.display = 'none';
        theFavs.style.display = 'block';
        user.favCont.displayItems();
    } else {
        theFavs.style.display = 'none';
        container.style.display = 'block';
    }
} else {
    theFavs.style.display = 'none';
    container.style.display = 'block';
}