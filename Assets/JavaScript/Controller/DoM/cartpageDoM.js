var container = document.getElementById('container');
var theCart = document.getElementById('theCart');
var user = getUserSetCart();
var hasLoggedUser = (sessionStorage != null);
// if guest, then leave remove only the "empty cart h1";
if (user.cart.products.length > 0) {
    container.style.display = 'none';
    theCart.style.display = 'block';
} else {
    theCart.style.display = 'none';
    container.style.display = 'block';
}



function displayCartItems() {
    var itemsHolder = document.getElementById('productsHolder');
    itemsHolder.innerHTML = '';
    var user = getUserSetCart()
    var products = user.cart.products;
    if (products.length <= 0) {
        theCart.style.display = 'none';
        container.style.display = 'block';
    } else {
        for (var index = 0; index < products.length; index++) {
            var item = products[index];

            var ele1 = document.createElement('div');
            ele1.className = 'productCont';
            itemsHolder.appendChild(ele1);


            var ele2 = document.createElement('div');
            ele2.className = 'prodImgCont';
            (function (item) {
                ele2.addEventListener('click', function () {
                    sessionStorage.prodImage = item.img;
                    sessionStorage.prodInfo = item.info;
                    sessionStorage.prodPrice = item.price;
                    sessionStorage.prodSupPrice = item.supPrice;
                    window.location = './productpage.html'
                }, false);
            })(item);

            ele1.appendChild(ele2);

            var ele21 = document.createElement('img');
            ele21.src = item.img;
            ele2.appendChild(ele21);


            var ele3 = document.createElement('div');
            ele3.className = 'prodInfoCont';
            ele1.appendChild(ele3);

            var ele31 = document.createElement('div');
            ele3.appendChild(ele31);

            var ele311 = document.createElement('span');
            ele31.appendChild(ele311);

            var ele3111 = document.createElement('span');
            ele3111.textContent = item.price;
            ele311.appendChild(ele3111);

            var ele3112 = document.createElement('sup');
            ele3112.textContent = item.supPrice;
            ele311.appendChild(ele3112);

            var ele3113 = document.createElement('span');
            ele3113.textContent = ' лв';
            ele311.appendChild(ele3113);

            var ele32 = document.createElement('div');
            ele3.appendChild(ele32);

            var ele321 = document.createElement('span');
            ele321.textContent = item.info;
            ele32.appendChild(ele321);


            var ele4 = document.createElement('div');
            ele4.className = 'prodBtnCont';
            ele1.appendChild(ele4);

            var ele41 = document.createElement('span');
            (function (index) {
                ele41.addEventListener('click', function () {
                    var user = getUserSetCart();

                    user.cart.removeProductFromCart(index);
                    sessionStorage.setItem('user', JSON.stringify(user));
                    displayCartItems();
                }, false);
            })(index);
            ele4.appendChild(ele41);

            var ele411 = document.createElement('img');
            ele411.src = '../Images/clear-button.png';
            ele41.appendChild(ele411);

            var ele42 = document.createElement('span');
            ele4.appendChild(ele42);

            var ele421 = document.createElement('span');
            ele421.textContent = 'Купи'
            ele42.appendChild(ele421);


        }
        var sum = user.cart.getTotalPrice();
        document.querySelector('#buyAll span span span').textContent = sum[0];
        document.querySelector('#buyAll span span sup').textContent = sum[1];
    }
}

displayCartItems();