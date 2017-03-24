function Guest() {
    this.cart = new Cart([]);
}

function User(email, password) {
    Guest.call(this);
    this.email = email;
    this.password = password;
    this.favourites = new FavouriteContainer([]);
    this.orders = new Orders([]);
}

var userManager = (function () {
    function getAllUsers() {
        return new Promise(function (success, fail) {
            var request = new XMLHttpRequest();

            request.open("get", "../JavaScript/jsonfiles/users.json", true);
            request.send(null);

            request.addEventListener('load', function () {
                if ((request.status >= 200 && request.status <= 299) || request.status == 304) {
                    success(JSON.parse(this.responseText));
                } else {
                    fail(new Error("Request failed: " + request.statusText));
                }
            }, false);

            request.addEventListener('error', function () {
                fail(new Error("Request failed: " + request.statusText));
            }, false);
        });
    }

    var users = JSON.parse(localStorage.getItem("users"));

    getAllUsers().then(
        function(success) {
            if(!users){
                users = success;
                localStorage.setItem("users", JSON.stringify(users));
            }
        }, 
        function(fail) {
            console.log(fail.message);
        }
        );

    return {
        getUsers: function() {
            return users;
        },

        updateUser: function(index, newU) {
            if(index >= 0 && index < users.length){
                users[index] = newU;
            }
        },

        addUser: function (user) {
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
        },

        getUserIndex: function(email){
            for (var index = 0; index < users.length; index++) {
                if(users[index].email === email) {
                    return index;
                }
            }
            return -1;
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
        }, 

        updateUsers: function() {
            localStorage.setItem("users", JSON.stringify(users));
        }
    }
})();