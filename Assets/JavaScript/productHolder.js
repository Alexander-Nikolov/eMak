function ProductHolder(products) {
    this.products = products || [];
}

ProductHolder.prototype.addProduct = function (product) {
    this.products.push(product);
}

ProductHolder.prototype.removeProduct = function (index) {
    this.products.splice(index, 1);
}

ProductHolder.prototype.displayItems = function () {
    var itemsHolder = document.getElementById('productsHolder');
    itemsHolder.innerHTML = '';
    var products = this.products;
    if (products.length <= 0) {
        document.getElementById('prodCont').style.display = 'none';
        document.getElementById('container').style.display = 'block';
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
            (function (index, holder) {
                ele41.addEventListener('click', function () {
                    holder.removeProduct(index);

                    sessionStorage.setItem('user', JSON.stringify(user));
                    holder.displayItems();
                }, false);
            })(index, this);
            ele4.appendChild(ele41);

            var ele411 = document.createElement('img');
            ele411.src = '../Images/clear-button.png';
            ele41.appendChild(ele411);

            if (this instanceof Cart) {
                var ele42 = document.createElement('span');
                ele4.appendChild(ele42);

                var ele421 = document.createElement('span');
                ele421.textContent = 'Купи'
                ele42.appendChild(ele421);
            } else if (this instanceof FavouriteContainer) {
                var ele42 = document.createElement('span');
                ele4.appendChild(ele42);

                var ele421 = document.createElement('span');
                ele421.textContent = 'Добави в количката';

                (function (element1, element2, item) {


                    var addedToCart = false;
                    element2.addEventListener('click', function () {
                        var user = getUserSetProdHolders();
                        if (!addedToCart) {
                            element1.textContent = 'Добавено!';
                            addedToCart = true;
                            user.cart.addProduct({
                                img: item.img,
                                info: item.info,
                                price: item.price,
                                supPrice: item.supPrice
                            })
                            //test user
                            sessionStorage.setItem('user', JSON.stringify(user));
                            setTimeout(function () {
                                addedToCart = false;
                                element1.textContent = ' Добави в количката ';
                            }, 1000);
                        }

                    }, false);

                })(ele421, ele42, item);

                ele42.appendChild(ele421);
            }

        }

        if (this instanceof Cart) {
            var sum = this.getTotalPrice();
            document.querySelector('#buyAll span span span').textContent = sum[0];
            document.querySelector('#buyAll span span sup').textContent = sum[1];
        }

    }
}







function Cart(products) {
    ProductHolder.call(this, products);
}

Cart.prototype = Object.create(ProductHolder.prototype);
Cart.prototype.constructor = Cart;


Cart.prototype.getTotalPrice = function () {
    var total = 0;
    var supTotal = 0;
    for (var index = 0; index < this.products.length; index++) {
        total += parseInt(this.products[index].price);
        supTotal += parseInt(this.products[index].supPrice);
    }

    if (supTotal.toString().length >= 3) {
        total += parseInt(supTotal.toString().slice(0, supTotal.toString().length - 2));
        supTotal = parseInt(supTotal.toString().slice(supTotal.toString().length - 2));
    }

    if (supTotal.toString().length < 2) {
        supTotal = ('0' + supTotal);
    }

    return [total, supTotal];
}




function FavouriteContainer(products) {
    ProductHolder.call(this, products);
}

FavouriteContainer.prototype = Object.create(ProductHolder.prototype);
FavouriteContainer.prototype.constructor = FavouriteContainer;




function getUserSetProdHolders() {
    var obj = JSON.parse(sessionStorage.user);
    obj.cart = new Cart(obj.cart.products);
    obj.favCont = new FavouriteContainer(obj.favCont.products);
    return obj;
}