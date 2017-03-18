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
    if (!addedToCart) {
        document.getElementById('btnCart').style.backgroundColor = 'green';     
        document.querySelector('#btnCart>span:last-child').textContent = 'Добавено в количката';
        addedToCart = true;
        user.cart.addProductToCart({
            img: sessionStorage.prodImage,
            info: sessionStorage.prodInfo,
            price: sessionStorage.prodPrice,
            supPrice: sessionStorage.prodSupPrice
        })
        //test user
        sessionStorage.setItem('user', JSON.stringify(user));
        setTimeout(function () {
            addedToCart = false;
            document.getElementById('btnCart').style.backgroundColor = '#005eb8';
            document.querySelector('#btnCart>span:last-child').textContent = 'Добави в количката';
        }, 1000);
    } else {

    }

}, false);

//test user
var cart = new Cart([]);

var user = {
    cart: cart
}
sessionStorage.setItem('user', JSON.stringify(user));
var user = getUserSetCart();