var container = document.getElementById('container');
var theCart = document.getElementById('prodCont');
var user = getUserSetProdHolders();
var hasLoggedUser = (sessionStorage != null);
// if guest, then leave remove only the "empty cart h1";
if (user.cart.products.length > 0) {
    container.style.display = 'none';
    theCart.style.display = 'block';
} else {
    theCart.style.display = 'none';
    container.style.display = 'block';
}





user.cart.displayItems();