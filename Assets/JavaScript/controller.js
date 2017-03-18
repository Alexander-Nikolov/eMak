(function () {
    var addUser = document.getElementById("buttonSubmitEmail");
    
    addUser.addEventListener('click', function(event) {
        var useremail = document.querySelector("#useremail");
        var email = useremail.value.trim();
        event.preventDefault();
        console.log("mdm");

        if (userManager.isUserEmailExists(email)) {
            var user = userManager.getUserByEmail(email);
            document.getElementById("passwordForm").style.display = "inline-block";
            document.getElementById("emailForm").style.display = "none";

            document.getElementById('buttonSubmitPassword').addEventListener('click', function(event) {
                event.preventDefault();
                var userpassword = document.getElementById("password");
                var password = userpassword.value.trim();
                if (user.password === password) {
                    localStorage.setItem("user_id", user.id);
                    window.location = "../HTML/index.html";

                } else {
                    // wrong password
                    // counter (> 3) error                    
                }
                
            }, false);

        } else {
            console.log("msk");
            document.getElementById("registrationForm").style.display = "inline-block";
            document.getElementById("emailForm").style.display = "none";

            document.getElementById('buttonSubmitRegistration').addEventListener('click', function(event) {
                event.preventDefault();

                var userpassword = document.getElementById("registerPassword");
                var password = userpassword.value.trim();
                var repeatedPassword = document.getElementById("repeatPassword");
                var repeatPassword = repeatedPassword.value.trim();
                var agree = document.getElementById('IAgree');
                var agreeIsChecked = agree.checked;

                if (password === repeatPassword && agreeIsChecked == true) {
                    var user = new User(3, email, password);
                    userManager.addUser(user);
                    localStorage.setItem("user_id", user.id);
                    window.location = "../HTML/index.html";
                } else {
                    if (document.getElementById('errorDifferentPasswords')) {
                        document.getElementById('errorDifferentPasswords').parentElement.removeChild(document.getElementById('errorDifferentPasswords'));
                        repeatedPassword.style.border = "1px solid grey";
                        
                    }

                    if (document.getElementById('errorNotChecked')) {
                        document.getElementById('errorNotChecked').parentElement.removeChild(document.getElementById('errorNotChecked'));
                    }

                    if (agreeIsChecked != true) {
                        agree.style.border = "1px solid red";
                        var errorIsChecked = document.createElement('div');
                        errorIsChecked.innerHTML = "Не е отбелязано."
                        errorIsChecked.id = "errorNotChecked";
                        errorIsChecked.style.color = "red";
                        agree.parentElement.appendChild(errorIsChecked);
                    }
                    if (password != repeatPassword){
                        repeatedPassword.style.border = "1px solid red";
                        var error = document.createElement('span');
                        error.innerHTML = "Различни пароли"
                        error.id = "errorDifferentPasswords";
                        error.style.color = "red";
                        repeatedPassword.parentElement.appendChild(error);
                    }
                }            
            }, false);
        }
    });
})();