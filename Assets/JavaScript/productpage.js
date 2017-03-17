var mainImage = document.getElementById('mainImage');
mainImage.src = sessionStorage.prodImage;

var price = document.querySelector('#other>h2');
price.textContent = sessionStorage.prodPrice;
var supPrice = document.createElement('sup');
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



var addToCart = document.querySelectorAll('#other>div');

addToCart[1].addEventListener('click', function() {
    user_id.cart.addProductToCart({
        img: sessionStorage.prodImage,
        info: sessionStorage.prodInfo,
        price: sessionStorage.prodPrice,
        supPrice: sessionStorage.prodSupPrice
    })
}, false)

var user_id = {
    cart: new Cart([])
}
