async function login(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

try{
await loginAccount(email, password);
alert("تم تسجيل الدخول ✔");
window.location.href = "home.html";
}
catch(e){
alert(e.message);
}

}
