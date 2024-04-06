function validate(){
    const u_name = "admin"
    const pwd = "admin"
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username=="admin" && password == "1234") {
        console.log("Loged in")
        window.location.href = "details.html";
    }
    else{
        alert("Wrong Username/Password")
    }
}