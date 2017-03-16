(function () {
    var login = document.getElementById("buttonSubmit");
    login.addEventListener('click', function(event) {
        var useremail = document.querySelector("#useremail");
        var email = useremail.value.trim();
        
        useremail.addEventListener('focus', function () {
            if (document.getElementById('error'))
                document.getElementById('error').parentNode.removeChild(document.getElementById('merror'));
        })

        if (userManager.loginUser(useremail)) {
            window.location = './bravo.html';
            console.log("Hi");
        }
        else {
            console.log("Bye");

            var error = document.createElement('span');
            error.id = "error";
            error.textContent = "Invalid email";
            useremail.parentNode.appendChild(error);
            console.log("Hi");

        }
        event.preventDefault();
    }, false);


//     var createAcc = getById('createAcc');
//     createAcc.addEventListener('click', function (event) {
//         event = event || window.event;
//         getById('registerForm').style.display = 'block';
//         event.preventDefault();
//     }, false);

//     getById('registerForm').addEventListener('submit', function (event) {
//         var inputs = document.querySelectorAll("#registerForm > form > input");
//         var username = inputs[0].value.trim();
//         var password = inputs[1].value.trim();
//         var age = Number(inputs[2].value.trim());

//         if (userManager.isPasswordValid(password) &&
//             !userManager.isUserNameExists(username)) {
//             userManager.addUser(new User(username, password, age));
//         getById('registerForm').style.display = 'none';
//     }

//     event.preventDefault();
// }, false);

})();