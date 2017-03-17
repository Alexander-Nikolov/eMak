function Cart(products) {
    this.products = products;
}

Cart.prototype.addProduct = function(product) {
    this.products.push(product);
}


Cart.prototype.removeProduct = function(index) {
    this.products.splice(index, 1);
}



