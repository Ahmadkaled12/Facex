const firebaseConfig = {
  apiKey: "AIzaSyCVJclfpEp9Jo9879C3RfZKiEdBUibwrx",
  authDomain: "ahmad-662ee.firebaseapp.com",
  projectId: "ahmad-662ee",
  storageBucket: "ahmad-662ee.firebasestorage.app",
  messagingSenderId: "740891153734",
  appId: "1:740891153734:web:f43b86effbb4d70a618147"
};

// تحميل Firebase بشكل صحيح (بدون document.write)
const appScript = document.createElement("script");
appScript.src = "https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js";
document.head.appendChild(appScript);

const authScript = document.createElement("script");
authScript.src = "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth-compat.js";
document.head.appendChild(authScript);

authScript.onload = function () {

firebase.initializeApp(firebaseConfig);

window.auth = firebase.auth();

// إنشاء حساب
window.createAccount = function(email, password){
return auth.createUserWithEmailAndPassword(email, password);
};

// تسجيل دخول
window.loginAccount = function(email, password){
return auth.signInWithEmailAndPassword(email, password);
};

console.log("Firebase جاهز ✔");
};
