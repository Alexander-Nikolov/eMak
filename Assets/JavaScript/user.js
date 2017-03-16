console.log("Wll");

function User(email, password) {
    this.email = email;
    this.password = password;
}

var userManager = (function () {
    var users = [new User('mpdincheva@abv.bg', '1234')];

    return {
        addUser: function (user) {
            if (user instanceof User) {
                users.push(user);
            }
        },

        loginUser: function (email) {
            return users.some(function(user) {
                return (user.email === email)
            });
        },

        isUserNameExists: function (username) {
            return users.some(function (user) {
                return (user.username === username);
            });
        },

        getNumberOfUser: function() {
            return users.length;
        }
    }
})();