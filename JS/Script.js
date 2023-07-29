var signinEmail=document.getElementById('signInMail');
var signinPassword=document.getElementById('signInPass');
var signUpName=document.getElementById('signUpName');
var signUpMail=document.getElementById('signUpMail');
var signUpPass=document.getElementById('signUpPass');
var logBtn=document.getElementById('logBtn')
var signUpBtn=document.getElementById('signUpBtn');






var usersdata = []
if (localStorage.getItem('users') == null) {
    usersdata = []
} else {
    usersdata = JSON.parse(localStorage.getItem('users'))
}


function validEmail() {
    for (var i = 0; i < usersdata.length; i++) {
        if (usersdata[i].email.toLowerCase() == signUpMail.value.toLowerCase()) {
            return false
        }
    }
}

function signupEmpty(){
    if (signUpName.value == "" || signUpMail.value == "" || signUpPass.value == "") {
        return false
    } else {
        return true
    }
}


 function signUp(){
    if (signupEmpty() == false) {
        document.getElementById('Exist').innerHTML = '<span class="text-warning m-2"> Inputs are required</span>'
        return false
    }

    var signUp = {
        name: signUpName.value,
        email: signUpMail.value,
        password: signUpPass.value,
    }
    if (usersdata.length == 0) {
        usersdata.push(signUp)
        localStorage.setItem('users', JSON.stringify(usersdata))
        document.getElementById('Exist').innerHTML = '<span class="text-white m-3">Success</span>'
        return true
    }
    if (validEmail() == false) {
        document.getElementById('Exist').innerHTML = '<span class="text-danger m-3">E-mail is already Exist</span>'

    } else {
        usersdata.push(signUp)
        localStorage.setItem('users', JSON.stringify(usersdata))
        document.getElementById('Exist').innerHTML = '<span class="text-white m-3">Success</span>'

    }
    console.log(signUp)
}

function loginEmpty()
{
    if (signinEmail.value == "" || signinPassword.value == "") {
        return false
    } else {
        return true
    }
}


function login() {
    if (loginEmpty() == false) {
        document.getElementById('notValid').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    var password = signinPassword.value
    var email = signinEmail.value
    for (var i = 0; i < usersdata.length; i++) {
        if (usersdata[i].email.toLowerCase() == email.toLowerCase() && usersdata[i].password.toLowerCase() == password.toLowerCase()) {
            localStorage.setItem('Storge', usersdata[i].name)
        }
        else {
            document.getElementById('notValid').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
        }
    }
    console.log(usersdata);
}