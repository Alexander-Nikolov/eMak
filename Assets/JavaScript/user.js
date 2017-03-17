function Guest(id) {
    this.id = id;
    this.cart = new Cart();
}

function User(id, email, password) {
    Guest.call(this, id);
    this.email = email;
    this.password = password;
}

function Cart() {
    this.numberOfProducts = 0;
    this.products = [];
}

Cart.prototype.addProductToCart = function (product) {
    if (product instanceof Product) {
        this.products.push(product);
    }
},

Cart.prototype.isProductExists = function (product) {
    return this.products.some(function(prod) {
        return (prod.name == product.name);
    });
},

Cart.prototype.getNumberOfProducts = function() {
    return this.numberOfProducts;
}, 

Cart.prototype.getTotalPrice = function() {
    var total = 0;
    for (var index=0; index < this.products.length; index++) {
        total += products[index].price;
    }
    return total;
}

function Product(info, price, brand) {
    this.info = info;
    this.price = price;
    this.brand = brand;
}


var userManager = (function () {
    var users = [new User(9, 'mpdincheva@abv.bg', '1234')];

    return {
        addUser: function (user) {
            if (user instanceof User) {
                users.push(user);
            }
        },

        getUserByEmail: function(email) {
            for (var index = 0; index < users.length; index++) {
                if(users[index].email === email) {
                    return users[index];
                }
            }
            return null;
        },

        isUserEmailExists: function (email) {
            return users.some(function(user) {
                return (user.email == email);
            });
        },

        getNumberOfUser: function() {
            return users.length;
        }

    }
})();