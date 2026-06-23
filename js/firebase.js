const firebaseConfig = {
  apiKey: "AIzaSyCVJclfpEp9Jo9879C3RfZKiEdBUibwrx",
  authDomain: "ahmad-662ee.firebaseapp.com",
  projectId: "ahmad-662ee",
  storageBucket: "ahmad-662ee.firebasestorage.app",
  messagingSenderId: "740891153734",
  appId: "1:740891153734:web:f43b86effbb4d70a618147"
};

// تحميل Firebase بشكل ثابت
const script = document.createElement("script");
script.src = "https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js";
document.head.appendChild(script);

const script2 = document.createElement("script");
script2.src = "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth-compat.js";
document.head.appendChild(script2);

script2.onload = () => {

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// مهم جدًا: تعريف عالمي مضمون
window.loginAccount = (email, password) => {
return auth.signInWithEmailAndPassword(email, password);
};

window.createAccount = (email, password) => {
return auth.createUserWithEmailAndPassword(email, password);
};

console.log("Firebase Ready ✔");
};
