function Guest(id) {
    this.id = id;
    this.cart = new Cart();
}

function User(id, email, password) {
    Guest.call(this, id);
    this.email = email;
    this.password = password;
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