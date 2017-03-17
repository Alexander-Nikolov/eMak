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
            console.log("djoisn");
            // register
        }

    });

})();