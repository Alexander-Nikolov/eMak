var mainImage = document.getElementById('mainImage');
mainImage.src = sessionStorage.prodImage;

var price = document.querySelector('#other>h2');
price.textContent = sessionStorage.prodPrice;
var supPrice = document.createElement('sup');
supPrice.style.fontSize = "80%";
supPrice.style.zIndex = "-1";
supPrice.textContent = sessionStorage.prodSupPrice;
price.appendChild(supPrice);
var lv = document.createElement('span');
lv.textContent = 'лв';
price.appendChild(lv);


var otherImages = document.querySelectorAll('#gallery>img');
for (var index = 0; index < otherImages.length; index++) {
    (function (index) {
        otherImages[index].addEventListener('mouseover', function () {
            var savePath = otherImages[index].src;
            otherImages[index].src = mainImage.src;
            mainImage.src = savePath;
        }, false);
        otherImages[index].addEventListener('mouseleave', function () {
            var savePath = otherImages[index].src;
            otherImages[index].src = mainImage.src;
            mainImage.src = savePath;
        }, false);
        otherImages[index].addEventListener('click', function () {
            var savePath = otherImages[index].src;
            otherImages[index].src = mainImage.src;
            mainImage.src = savePath;
        }, false);
    })(index);
}



var addToCart = document.getElementById('addToCart');
var addedToCart = false;
addToCart.addEventListener('click', function () {
    var user = getUserSetProdHolders();
    if (!addedToCart) {
        document.getElementById('btnCart').style.backgroundColor = 'green';
        document.querySelector('#btnCart>span:last-child').textContent = 'Добавено в количката';
        addedToCart = true;
        user.cart.addProduct({
            img: sessionStorage.prodImage,
            info: sessionStorage.prodInfo,
            price: sessionStorage.prodPrice,
            supPrice: sessionStorage.prodSupPrice
        })
        //test user
        setUser(user);
        setTimeout(function () {
            addedToCart = false;
            document.getElementById('btnCart').style.backgroundColor = '#005eb8';
            document.querySelector('#btnCart>span:last-child').textContent = 'Добави в количката';
        }, 1000);
    }

}, false);


function isAlreadyInFav() {
    var user = getUserSetProdHolders();

    return user.favCont.products.some(function (ele) {
        if (ele.info == sessionStorage.prodInfo) {
            return true;
        }
    })
}


var addToFavs = document.getElementById('addToFavs');
var addedToFavs = isAlreadyInFav() || false;
if (addedToFavs) {
    document.getElementById('btnFavorites').style.backgroundColor = '#AA3939';
    document.getElementById('btnFavorites').style.color = 'white';
    document.querySelector('#btnFavorites>span:last-child').textContent = 'Добавено в любими';
}
addToFavs.addEventListener('click', function () {

    if (sessionStorage.user != null) {
        var user = getUserSetProdHolders();
        if (!addedToFavs) {
            addedToFavs = true;
            user.favCont.addProduct({
                img: sessionStorage.prodImage,
                info: sessionStorage.prodInfo,
                price: sessionStorage.prodPrice,
                supPrice: sessionStorage.prodSupPrice
            })
            //test user
            setUser(user);
            document.getElementById('btnFavorites').style.backgroundColor = '#AA3939';
            document.getElementById('btnFavorites').style.color = 'white';
            document.querySelector('#btnFavorites>span:last-child').textContent = 'Добавено в любими';
        } else {
            document.getElementById('btnFavorites').style.backgroundColor = 'buttonface';
            document.getElementById('btnFavorites').style.color = '#005eb8';
            document.querySelector('#btnFavorites>span:last-child').textContent = 'Добави в любими';
            addedToFavs = false;

            var found = false;
            user.favCont.products.find(function (value, index) {
                if (!found) {
                    if (value.info == sessionStorage.prodInfo) {
                        user.favCont.removeProduct(index);
                        found = true;
                        sessionStorage.setItem('user', JSON.stringify(user));
                    }
                }
            })
        }
    } else {
        document.getElementById('accneed').style.display = 'block';
        setTimeout(function() {
            document.getElementById('accneed').style.display = 'none';
        }, 2000);
    }
}, false);