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
    var holder = this;
    console.log(this.products);
    function whichDoM() {
        console.log(holder);
        if (holder instanceof Cart) {
            return updateDoMcart();
        } else if (holder instanceof FavouriteContainer) {
            return updateDoMfav();
        } else if (holder instanceof Orders) {
            return updateDoMord();
        }

    }

    if (whichDoM()) {
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

                    setUser(user);

                    if (holder instanceof Cart) {
                        getUserSetProdHolders().cart.displayItems();
                    } else if (holder instanceof FavouriteContainer) {
                        getUserSetProdHolders().favCont.displayItems();
                    }
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
                ele421.textContent = 'Купи';
                ele42.addEventListener("click", function(event) {
                    var user = getUserSetProdHolders();
                    user.orders.addProduct({
                        img: item.img,
                        info: item.info,
                        price: item.price,
                        supPrice: item.supPrice
                    });
                    // kak da mahna ??? user.cart.removeProduct()
                    sessionStorage.setItem('user', JSON.stringify(user));

                }, false);
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
            document.querySelector("#buyAll").addEventListener("click", function(event) {
                var user = getUserSetProdHolders();
                for (var index = 0;index < user.cart.products.length; index++) {
                    user.orders.addProduct({
                        img: user.cart.products[index].img,
                        info: user.cart.products[index].info,
                        price: user.cart.products[index].price,
                        supPrice: user.cart.products[index].supPrice
                    });
                }
                for (var index = user.cart.products.length - 1;index >= 0; index--) {
                    user.cart.removeProduct(index);
                }
                sessionStorage.setItem('user', JSON.stringify(user));
                updateDoMcart();
            }, false);
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

function Orders(products) {
    ProductHolder.call(this, products);
}

Orders.prototype = Object.create(ProductHolder.prototype);
Orders.prototype.constructor = Orders;


function getUserSetProdHolders() {
    try {
        var obj = JSON.parse(sessionStorage.user);
    } catch (e) {
        var obj = JSON.parse(sessionStorage.guest);
    }
    // obj = JSON.parse(obj);
    console.log(obj);
    obj.cart = new Cart(obj.cart.products);
    obj.favCont = new FavouriteContainer(obj.favCont.products);
    obj.orders = new Orders(obj.orders.products);
    return obj;
}

function setUser(user) {
    if (sessionStorage.user == null) {
        sessionStorage.setItem('guest', JSON.stringify(user));
    } else {
        sessionStorage.setItem('user', JSON.stringify(user));
    }
}