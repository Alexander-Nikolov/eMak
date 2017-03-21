var container = document.getElementById('container');
var containerh1 = document.querySelector('#container > h1');
var theFavs = document.getElementById('prodCont');
var containerInfo = document.getElementById('containerInfo');
var logInvite = document.getElementById('logInvite');

var user = getUserSetProdHolders();

function updateDoMfav() {
    
    var hasLoggedUser = (sessionStorage.user != null);
    var user = getUserSetProdHolders();
    if (hasLoggedUser && user.favCont.products.length > 0) {
        containerInfo.style.display = 'none';
        logInvite.style.display = 'none';
        theFavs.style.display = 'block';
        container.style.display = 'none';
        
        return true;
        
    } else if (hasLoggedUser && user.favCont.products.length <= 0) {
        containerh1.textContent = 'Нямате Любими продукти';
        container.style.display = 'block';
        containerInfo.style.display = 'none';
        logInvite.style.display = 'none';
        theFavs.style.display = 'none';
        return false;
    } else {
        containerInfo.style.display = 'none';
        logInvite.style.display = 'block';
        theFavs.style.display = 'none';
        container.style.display = 'block';
        containerh1.textContent = 'Трябва да сте в профила си за да видите продуктите';
        return false;
    }
}

user.favCont.displayItems();
