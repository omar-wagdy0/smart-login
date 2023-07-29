var signInputContainer = [];
if (localStorage.getItem('inputsData') != null) {
    signInputContainer = JSON.parse(localStorage.getItem('inputsData'));

}

function isExist(email) {
    return signInputContainer.filter(x => x["signMail"] == email).length > 0;
}

function isvalid(signupData) {
    return signupData.userName != '' && signupData.signMail != '' && signupData.signPassword != ''
}

function signupFunction() {
    var userName = document.getElementById('userName').value;
    var signMail = document.getElementById('signMail').value;
    var signPassword = document.getElementById('signPassword').value;
    var msgError = document.getElementById('incorrect');
    var success = document.getElementById('success');
    signupData = {
        userName: userName,
        signMail: signMail,
        signPassword: signPassword
    };

    if (isvalid(signupData)) {
        if (isExist(signMail)) {
            msgError.innerHTML = 'This email already exist';
        }
        else {
            signInputContainer.push(signupData);
            localStorage.setItem("inputsData", JSON.stringify(signInputContainer));
            success.innerHTML = "Success";
            

        }

    }
    else {
        msgError.innerText = "Please Enter Email and Password";

    }
}
