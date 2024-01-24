// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { collection, getDocs, addDoc, updateDoc, getDoc, doc, deleteDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { query, orderBy, limit, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { getStorage, ref, getDownloadURL, listAll } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-storage.js"
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const storage = getStorage(app);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
const Usuario = collection(db, 'usuarios')
const Municipio = collection(db, 'municipios')
const Sessao = collection(db, 'sessoes')

// Register 
if(document.querySelector(".js-button-has-login")){
	document.querySelector(".js-button-has-login").addEventListener("click", function(e){
		document.querySelector(".js-register").classList.remove("register__form--active");
		document.querySelector(".js-login").classList.add("register__form--active");
	})
}

if(document.querySelector(".js-button-create")){
	document.querySelector(".js-button-create").addEventListener("click", function(e){
		document.querySelector(".js-login").classList.remove("register__form--active");
		document.querySelector(".js-register").classList.add("register__form--active");
	})
}

//--- ## Auth ## ----------
export async function LogIn(email) {

    if (isSignInWithEmailLink(auth, window.location.href + '/module-one.html')) {
        return await signInWithEmailLink(auth, email, window.location.href + '/module-one.html')
        .then(ret => { return ret})
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            console.log('Erro no login' + errorCode + ' -> ' + errorMessage)
        })
    } else {
        return await sendSignInLinkToEmail(auth, email, 
        {
            url: window.location.href + '/module-one.html',
            handleCodeInApp: true
        })
        .then( ret => {
            if (ret) {
                signInWithEmailLink(auth, email, window.location.href + '/module-one.html')
                .then(ret => { return ret})
                .catch((error) => {
                    const errorCode = error.code
                    const errorMessage = error.message
                    console.log('Erro no login' + errorCode + ' -> ' + errorMessage)
                })
            } else {
                return false
            }
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            console.log('Erro no envio link' + errorCode + ' -> ' + errorMessage)
        })
    }
    
}
//-------------------------

export async function downloadFile(file) {

    return await getDownloadURL(ref(storage, file))
    .then((url) => {
        return url
    })
    .catch((error) => {
        // Handle any errors
        const errorCode = error.code
        const errorMessage = error.message
        console.log('Erro no download do arquivo ' + file + ' ' + errorCode + ' -> ' + errorMessage)
    })
}

//-------------------------


export async function validateRegister(email) {

    const q = query(Usuario, where('email','==', email));
    return await getDocs(q)
    .then(snap => {
        if (snap.empty) {
            return false
        } else {
            return true
        }
    })
    .catch(error => {
        console.log(error);
        return false
    })
}

export async function addRegister(reg) {
    
    reg.inclusao = serverTimestamp()

    return await addDoc(Usuario, reg)
    .then(docRef => {
        return true
    })
    .catch(error => {
        console.log(error);
        return false
    })
}

async function saveSession(session) {
    return await addDoc(Sessao, session)
    .then(docRef => {
        window.location.href = '/module-one.html'
        return docRef.id
    })
    .catch(error => {
        console.log(error);
        return null
    })
}

export async function findSession(sessionId) {
    const docRef = doc(Sessao, sessionId)
    return await getDoc(docRef)
    .then(snap => {
        if (snap.exists()) {
            insertNameUser(snap.data().email)
            return true;
        } else {
            return false
        }
    })
    .catch(error => {
        console.log(error);
        return false
    })
}

async function findSessionByEmail(email) {
    const q = query(Sessao, where('email','==', email));
    return await getDocs(q)
    .then(snap => {
        if (snap.empty) {
            return null
        } else {
            let docRef = snap.docs[0]
            return docRef.id
        }
    })
    .catch(error => {
        console.log(error);
        return null
    })
}

async function deleteSession(sessionId) {
    const docRef = doc(Sessao, sessionId)
    await deleteDoc(docRef)
    .then( () => {
        console.log('Sessão ' + sessionId + 'encerrada')
    })
    .catch(error => {
        console.log(error);
    })
}

export async function openSession(email) {
    const session = {
        email: email,
        login : serverTimestamp()
    }

    await findSessionByEmail(email)
    .then(sessionId => {
        if (sessionId) {
            //Logando em outra máquina ou sessão perdida
            deleteSession(sessionId)
        }
    })

    await saveSession(session)
    .then( sessionId => {
        if (sessionId) {
            localStorage.setItem('session', sessionId)
            return true
        } else {
            return false
        }
    })
}

export async function validateSession() {
    let sessionId = localStorage.getItem('session')
    if (sessionId) {
        return await findSession(sessionId)
        .then(ret => {
            if(!ret) {
                localStorage.removeItem('session')
                return false
            }
            return true
        })
    } else {
        return false
    }
}

export function closeSession() {
    let sessionId = localStorage.getItem('session')

    if (findSession(sessionId)) {
        deleteSession(sessionId)
    }
    localStorage.removeItem('session')
    window.location.href = '/'
}

export async function findCities(estado) {
    const cidades = []
    const q = query(Municipio, where('uf','==', estado));
    return await getDocs(q)
        .then(snap => {
            snap.forEach((doc) => {
                cidades.push(doc.data().nome)
            });
            return cidades.sort()
        })
}


async function insertNameUser(email){

    const q = query(Usuario, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if(querySnapshot.empty) {
        return null
    }

    const nameUser = querySnapshot.docs[0].data().nome

    document.querySelector(".js-name-user").innerHTML = `Olá ${nameUser.split(" ")[0]}!`;
}

export async function findBrands(){
    const imagesRef = ref(storage, 'apoio');

    const container = document.querySelector(".js-brands-container")

    await listAll(imagesRef).then((res) => {
        res.items.forEach((itemRef) => {
            getDownloadURL(ref(storage, `${itemRef.parent.name}/${itemRef.name}`)).then((url) => {
                const img = document.createElement("img");
                img.setAttribute("src", url);
                img.setAttribute("alt", itemRef.name);
                img.setAttribute("class", "footer__brand-item");
                container.append(img)
            })
        });
    }).catch((error) => {
        console.log("error:", error)
    });
}