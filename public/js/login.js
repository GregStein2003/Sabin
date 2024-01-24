import { addRegister, validateRegister, openSession, closeSession, findSession, findCities, LogIn, findBrands } from './register.js'
import { showAlertMessage } from './showAlert.js'

findBrands();

const reg_form = document.getElementById('register_form')
const login_form = document.getElementById('login_form')
const estado_combo = document.getElementById('estado')

//Cadastrar novo e-mail
reg_form.addEventListener('submit', async function(e){
    e.preventDefault()
    console.log('Cadastrar novo e-mail')

    let termo = document.forms["register_form"]["termo"];
    if (!termo.checked) {
        showAlertMessage("Você precisa aceitar os termos para seguir...");
        return false;
    }

    //validar e-mail
    var email = document.getElementById('email').value
    return await validateRegister(email)
    .then( ret => {
        if(ret) {
            console.log('Email já cadastrado, favor entrar...')
            return false
        }
        
        const reg = {
            nome: document.getElementById('nome').value,
            email: email,
            estado: document.querySelector('#estado').value,
            cidade: document.querySelector('#cidade').value,
            categoria: document.querySelector('#categorias').value
            //inclusao : serverTimestamp()
        }

        addRegister(reg)
        .then(ret => {
            if(ret) {
                return openSession(reg.email)
            } else {
                return false
            }
        })
    })

})

//Logar e-mail
login_form.addEventListener('submit', async function(e){
    e.preventDefault()
    console.log('Logar com o e-mail')

    //validar e-mail
    var login = document.getElementById('login').value
    return await validateRegister(login)
    .then(ret => {
        if(ret) {
            console.log('Login realizado com sucesso')
            openSession(login)
            .then(ret => {
                const a = document.getElementById('menu-login')
                a.innerHTML = 'sair'
                a.href= 'javascript:closeSession()'
                return ret
            })
            return false
        } 
        else {
            console.log('Usuário não cadastrado, favor se registrar...')
            showAlertMessage('E-mail não cadastrado, favor realizar o cadastro...')
            document.querySelector(".js-login").classList.remove("register__form--active");
            document.querySelector(".js-register").classList.add("register__form--active");
            return false
        }
    })
})

//Busca cidades conforme estado selecionado
estado_combo.addEventListener('change', async function(e) {
    const combo = document.querySelector('#estado')
    const estado = combo.options[combo.selectedIndex].text
    
    findCities(estado)
    .then( cidades => {
        cidades.sort((a, b) => {
            const normalize = (str) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            const aNormalized = normalize(a.toLowerCase());
            const bNormalized = normalize(b.toLowerCase());
        
            if (aNormalized < bNormalized) {
              return -1;
            }
            if (aNormalized > bNormalized) {
              return 1;
            }
            return 0;
        });
        var options = [`<option value="">Cidade/Município:</option>`].concat(
            cidades.map(e=>{return `<option value="${e}">${e}</option>`}))
        document.getElementById("cidade").innerHTML = options
    })
})

function logout() {
    console.log('Logout do sistema na pagina ' + location.href.replace(location.origin,''))
    closeSession()
}

//se tem session
let sessionId = localStorage.getItem('session')
if (sessionId) {
    //valida
    if (await findSession(sessionId)) { //se valida
        document.querySelector(".js-text").classList.remove("register--active")
    } else { //se nao
        localStorage.removeItem('session') //so remove
        document.querySelector(".js-text").classList.add("register--active")
    }
} else { //se nao tem
    document.querySelector(".js-text").classList.add("register--active")
    document.querySelector(".js-login").classList.remove("register__form--active"); //exibe cadastro padrao
    document.querySelector(".js-register").classList.add("register__form--active");
}