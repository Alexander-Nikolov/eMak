function Cart(products) {
    this.products = products || [];
}

Cart.prototype.addProductToCart = function (product) {
    this.products.push(product);
}

Cart.prototype.removeProductFromCart = function (index) {
    this.products.splice(index, 1);
}

Cart.prototype.getTotalPrice = function () {
    var total = 0;
    for (var index = 0; index < this.products.length; index++) {
        total += products[index].price;
    }
    return total;
}



function getUserSetCart() {
    var obj = JSON.parse(sessionStorage.user);
    obj.cart = new Cart(obj.cart.products);
    return obj;
}