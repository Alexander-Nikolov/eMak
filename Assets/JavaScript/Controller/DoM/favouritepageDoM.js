var container = document.getElementById('container');
var theFavs = document.getElementById('prodCont');
var user = getUserSetProdHolders();
var hasLoggedUser = (sessionStorage != null);
// if guest, then leave remove only the "empty cart h1";
if (user.cart.products.length > 0) {
    container.style.display = 'none';
    theFavs.style.display = 'block';
} else {
    theFavs.style.display = 'none';
    container.style.display = 'block';
}





user.favCont.displayItems();