// Import the Firebase Auth and Firebase App modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js"

const alertModal = document.querySelector(".js-alert-modal");
const alertModalText = document.querySelector(".js-alert-text");
const alertModalClose = document.querySelector(".js-alert-close");

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

const form = document.querySelector('form');
form.addEventListener('submit', async (event) => {
  event.preventDefault(); 

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = 'relatorio.html';
  } catch (error) {
    showAlertMessage("Usuário e/ou senha inválido(s)")
    console.error('Error signing in:', error);
  }
});

function showAlertMessage(message) {
  alertModal.classList.add("alert-modal--active");
  alertModalText.innerHTML = message;

  alertModalClose.addEventListener("click", () => {
      alertModal.classList.remove("alert-modal--active");
  })

  alertModal.addEventListener("click", (e) => {
      if(e.target.classList.value.includes("js-alert-modal") == true) {
          alertModal.classList.remove("alert-modal--active");
      }
  })
}