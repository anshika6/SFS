function toggleSignup(){
    document.getElementById("login-toggle").style.backgroundColor="white";
     document.getElementById("login-toggle").style.color="black";
     document.getElementById("signup-toggle").style.backgroundColor="#40679E";
     document.getElementById("signup-toggle").style.color="white";
     document.getElementById("login-form").style.display="none";
     document.getElementById("signup-form").style.display="block";
 }
 
 function toggleLogin(){
     document.getElementById("login-toggle").style.backgroundColor="#40679E";
     document.getElementById("login-toggle").style.color="white";
     document.getElementById("signup-toggle").style.backgroundColor="white";
     document.getElementById("signup-toggle").style.color="black";
     document.getElementById("signup-form").style.display="none";
     document.getElementById("login-form").style.display="block";
 }