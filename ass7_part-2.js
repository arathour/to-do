var objPeople = [{ username: "a", password: "1", firstname: "", lastname: "", email: "", gender: "", role: "" }];
var flag = 0;

function validateLogin() {
    var username = document.forms["login"]["username"].value;
    var password = document.forms["login"]["password"].value;
    var curuser, curpwd;
    for (let key in localStorage) {
        var temp = localStorage.getItem(key);
        var obj = JSON.parse(temp);

        if (username == obj.username && password == obj.password) {
            curuser = username;
            curpwd = password;
            flag = 1;
            break;
        }

    }

    var notify = (flag == 1) ? "Succesfully logged in ! " : "Incorrect username and password";
    Getlist();
    alert(notify);

}

function validateSignup() {
    var uname = document.forms["signup"]["user-name"].value;
    var fname = document.forms["signup"]["first-name"].value;
    var lname = document.forms["signup"]["last-name"].value;
    var pwd = document.forms["signup"]["user-pass"].value;
    var roletype = document.forms["signup"]["role"].value;
    var mail = document.forms["signup"]["user-email"].value;
    var gendertype = document.forms["signup"]["gender"].value

    var newUser = {
        username: uname,
        password: pwd,
        firstname: fname,
        lastname: lname,
        email: mail,
        gender: gendertype,
        role: roletype
    }
    flag = 0;
    for (let key in localStorage) {
        var temp = localStorage.getItem(key);
        var obj = JSON.parse(temp);
        if (uname == obj.username) {
            flag = 1;
            break;
        }
    }

    if (flag == 1) {
        alert("Username already taken");
    }

    var data = JSON.stringify(newUser);
    localStorage.setItem(uname, data);

    var retreivedata = localStorage.getItem(data);
    var obj = JSON.parse(retreivedata);
    alert(obj);

}

function Getlist() {
    for (let key in localStorage) {
        var temp = localStorage.getItem(key);
        var obj = JSON.parse(temp);
        var currole;
        if (username == obj.username && password == obj.password) {
            currole = obj.role;
            break;
        }
        if (currole == "Admin")
            GetlistAdmin();
        else if (currole = "Operation")
            GetlistOperation();
        else
            GetlistSale();
    }
}

function GetlistAdmin() {
    for (let key in localStorage) {
        var temp = localStorage.getItem(key);
        var obj = JSON.parse(temp);
        console.log(obj);
    }

}

function GetlistOperation() {
    for (let key in localStorage) {
        var temp = localStorage.getItem(key);
        var obj = JSON.parse(temp);
        if (obj.role != "Admin")
            console.log(obj); //displaying everything except Admin 
    }
}

function GetlistSale() {
    for (let key in localStorage) {
        var temp = localStorage.getItem(key);
        var obj = JSON.parse(temp);
        console.log(obj.username); //displaying every username
    }
}