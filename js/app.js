function formValidation() {
    var userName = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    checkUserName(userName);
    checkPassword(password);
}

function checkUserName(userName) {
    if (userName.length == 0) {
        alert("UserName cannot be empty.");
    } else {
        if (userName.indexOf(' ') >= 0) {
            alert("Username cannot contain a space character.");
        }
        var usernameRegex = /^[0-9a-zA-Z_]+$/;
        if (userName.match(usernameRegex)) {
            // do nothing
        } else {
            alert("Username must have letters, numbers and character _ only");
        }

        if (userName.charAt(0) <= '9' && userName.charAt(0) >= '0') {
            alert("Username cannot begin with a digit.");
        }
    }
}

function checkPassword(password) {
    // Input Password and Submit 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.
    var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (password.match(decimal)) {
        // do nothing
    } else {
        alert('Password should have from 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character!');
    }
}