var container = document.getElementById('container');
var containerh1 = document.querySelector('#container > h1');
var theCart = document.getElementById('prodCont');
var containerInfo = document.getElementById('containerInfo');
var logInvite = document.getElementById('logInvite');

var user = getUserSetProdHolders();

function updateDoMcart() {

    var hasLoggedUser = (sessionStorage.user != null);
    var user = getUserSetProdHolders();
    if (hasLoggedUser && user.cart.products.length > 0) {
        containerInfo.style.display = 'none';
        logInvite.style.display = 'none';
        theCart.style.display = 'block';
        container.style.display = 'none';

        return true;

    } else if (hasLoggedUser && user.cart.products.length <= 0) {
        containerh1.textContent = 'Нямате продукти в количката';
        container.style.display = 'block';
        containerInfo.style.display = 'none';
        logInvite.style.display = 'none';
        theCart.style.display = 'none';
        return false;
    } else if (!hasLoggedUser && user.cart.products.length <= 0) {
        containerInfo.style.display = 'none';
        logInvite.style.display = 'block';
        theCart.style.display = 'none';
        container.style.display = 'block';
        containerh1.textContent = 'Нямате продукти в количката';
        return false;
    } else if (!hasLoggedUser && user.cart.products.length > 0) {
        containerInfo.style.display = 'block';
        logInvite.style.display = 'block';
        theCart.style.display = 'block';
        container.style.display = 'block';
        containerh1.textContent = '';

        return true;
    }
}

user.cart.displayItems();