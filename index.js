// log in Function



function loginFunction() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if ((username == "admin") && (password == "admin")) {
        window.location = "./MAIN/ADMIN/admin.html";
        window.alert("Log In Successfully");
    }

    else if ((username == "content") && (password == "content")) {
        window.alert("Log In Successfully");
        window.location = "./MAIN/ASSESMENT/assessment.html";
    }


    else {
        window.alert("Log In failed");
    }
    console.log(username);
    console.log(password);

}