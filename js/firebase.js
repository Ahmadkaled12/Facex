import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCVJclfpEp9Jo9879C3RfZKiEdBUibwrxI",
  authDomain: "ahmad-662ee.firebaseapp.com",
  projectId: "ahmad-662ee",
  storageBucket: "ahmad-662ee.firebasestorage.app",
  messagingSenderId: "740891153734",
  appId: "1:740891153734:web:f43b86effbb4d70a618147"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// نخليها مباشرة بدون window (مهم)
window.createAccount = function(email, password){
  return createUserWithEmailAndPassword(auth, email, password);
}

window.loginAccount = function(email, password){
  return signInWithEmailAndPassword(auth, email, password);
}
