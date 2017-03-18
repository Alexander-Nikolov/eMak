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



function getUserSetCart() {
    var obj = JSON.parse(sessionStorage.user);
    obj.cart = new Cart(obj.cart.products);
    return obj;
}