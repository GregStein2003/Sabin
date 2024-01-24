import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

const app = initializeApp(firebaseConfig);

const auth = getAuth()

auth.onAuthStateChanged((user) => {
  if (!user) {
    window.location.href = 'login.html';
  }
});
  
document.querySelector(".js-exit").addEventListener("click", function(){
  auth.signOut().then(() => {
    console.log('Usuário desconectado');
  }).catch((error) => {
    console.error('Erro ao desconectar o usuário:', error);
  });
})

