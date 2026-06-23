const firebaseConfig = {
  apiKey: "AIzaSyCVJclfpEp9Jo9879C3RfZKiEdBUibwrx",
  authDomain: "ahmad-662ee.firebaseapp.com",
  projectId: "ahmad-662ee",
  storageBucket: "ahmad-662ee.firebasestorage.app",
  messagingSenderId: "740891153734",
  appId: "1:740891153734:web:f43b86effbb4d70a618147"
};

// نحمل Firebase بشكل ثابت (بدون async مشاكل)
const load = (src) => {
  const s = document.createElement("script");
  s.src = src;
  document.head.appendChild(s);
};

load("https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js");
load("https://www.gstatic.com/firebasejs/10.12.5/firebase-auth-compat.js");

window.addEventListener("load", () => {

  setTimeout(() => {

    firebase.initializeApp(firebaseConfig);

    const auth = firebase.auth();

    // مهم: تعريف عالمي
    window.createAccount = (email, password) => {
      return auth.createUserWithEmailAndPassword(email, password);
    };

    window.loginAccount = (email, password) => {
      return auth.signInWithEmailAndPassword(email, password);
    };

    console.log("Firebase Ready ✔");

  }, 1000);

});
