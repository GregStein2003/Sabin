import { validateSession, closeSession, findSession, downloadFile } from './register.js'
import { showAlertMessage } from './showAlert.js'

const buttonClose = document.querySelectorAll(".js-button-out")
const cap0_ebook = document.getElementById('modules-cards_cap0-ebook');
const cap0_ebook_file = 'ebook/Capitulo0_EbookTransformacao.pdf'
const cap1_ebook = document.getElementById('moules-cards_cap1-ebook');
const cap1_ebook_file = 'ebook/Capitulo1_Ebook_Transformacao.pdf'
const cap1_workbook = document.getElementById('moules-cards_cap1-workbook')
const cap1_workbook_file = 'workbook/Capitulo1_Workbook.pdf'
const cap2_ebook = document.getElementById('moules-cards_cap2-ebook')
const cap2_ebook_file = 'ebook/Capitulo2_Ebook_Transformacao.pdf'
const cap2_workbook = document.getElementById('moules-cards_cap2-workbook')
const cap2_workbook_file = 'workbook/Capitulo2_Workbook.pdf'
const cap3_ebook = document.getElementById('modules-cards_cap3-ebook')
const cap3_ebook_file = 'ebook/Capitulo3_Ebook_Transformacao.pdf'
const cap3_workbook = document.getElementById('modules-cards_cap3-workbook')
const cap3_workbook_file = 'workbook/Capitulo3_Workbook.pdf'
const cap4_ebook = document.getElementById('modules-cards_cap4-ebook')
const cap4_ebook_file = 'ebook/Capitulo4_Ebook_Transformacao.pdf'
const cap4_workbook = document.getElementById('modules-cards_cap4-workbook')
const cap4_workbook_file = 'workbook/Capitulo4_Workbook.pdf'
const cap5_ebook = document.getElementById('modules-cards_cap5-ebook')
const cap5_ebook_file = 'ebook/Capitulo5_Ebook_Transformacao.pdf'
const cap5_workbook = document.getElementById('modules-cards_cap5-workbook')
const cap5_workbook_file = 'workbook/Capitulo5_Workbook.pdf'
const cap6_ebook = document.getElementById('modules-cards_cap6-ebook')
const cap6_ebook_file = 'ebook/Capitulo6_Ebook_Transformacao.pdf'
const cap6_workbook = document.getElementById('modules-cards_cap6-workbook')
const cap6_workbook_file = 'workbook/Capitulo6_Workbook.pdf'
const capExtra_ebook = document.getElementById('modules-cards_capExtra-ebook')
const capExtra_ebook_file = 'ebook/CapituloExtraM2_Ebook_Transformacao.pdf'
const cap7_ebook = document.getElementById('modules-cards_cap7-ebook')
const cap7_ebook_file = 'ebook/Capitulo7_Ebook_Transformacao.pdf'
const cap7_workbook = document.getElementById('modules-cards_cap7-workbook')
const cap7_workbook_file = 'workbook/Capitulo7_Workbook.pdf'
const cap8_ebook = document.getElementById('modules-cards_cap8-ebook')
const cap8_ebook_file = 'ebook/Capitulo8_Ebook_Transformacao.pdf'
const cap8_workbook = document.getElementById('modules-cards_cap8-workbook')
const cap8_workbook_file = 'workbook/Capitulo8_Workbook.pdf'
const cap9_ebook = document.getElementById('modules-cards_cap9-ebook')
const cap9_ebook_file = 'ebook/Capitulo9_Ebook_Transformacao.pdf'
const cap9_workbook = document.getElementById('modules-cards_cap9-workbook')
const cap9_workbook_file = 'workbook/Capitulo9_Workbook.pdf'
const cap10_ebook = document.getElementById('modules-cards_cap10-ebook')
const cap10_ebook_file = 'ebook/Capitulo10_Ebook_Transformacao.pdf'
const cap10_workbook = document.getElementById('modules-cards_cap10-workbook')
const cap10_workbook_file = 'workbook/Capitulo10_Workbook.pdf'
const cap11_ebook = document.getElementById('modules-cards_cap11-ebook')
const cap11_ebook_file = 'ebook/Capitulo11_Ebook_Transformacao.pdf'
const cap11_workbook = document.getElementById('modules-cards_cap11-workbook')
const cap11_workbook_file = 'workbook/Capitulo11_Workbook.pdf'
const cap12_ebook = document.getElementById('modules-cards_cap12-ebook')
const cap12_ebook_file = 'ebook/Capitulo12_e_Bonus_Ebook_Transformacao.pdf'
const cap12_workbook = document.getElementById('modules-cards_cap12-workbook')
const cap12_workbook_file = 'workbook/Capitulo12_Workbook.pdf'

function needLogin() {
    showAlertMessage('Você precisa se cadastrar para acessar este conteúdo!', "/#register")
}

function knowSession(element, file) {
    downloadFile(file)
    .then(url => {
        if(element != null){
            element.href = url
            element.target = '_blank'
        }
    })
}

function unknowSession(element) {
    if(element){
        element.href = 'javascript:void(0)'
        element.removeAttribute('target')
        element.addEventListener('click', needLogin, false)
    }
}


function logout() {
    console.log('Logout do sistema na pagina ' + location.href.replace(location.origin,''))
    closeSession()
}


await validateSession()
.then(ret => {
    if (ret) {
        knowSession(cap1_ebook, cap1_ebook_file)
        knowSession(cap1_workbook, cap1_workbook_file)
        knowSession(cap2_ebook, cap2_ebook_file)
        knowSession(cap2_workbook, cap2_workbook_file)
        knowSession(cap3_ebook, cap3_ebook_file)
        knowSession(cap3_workbook, cap3_workbook_file)
        knowSession(cap4_ebook, cap4_ebook_file)
        knowSession(cap4_workbook, cap4_workbook_file)
        knowSession(cap5_ebook, cap5_ebook_file)
        knowSession(cap5_workbook, cap5_workbook_file)
        knowSession(cap6_ebook, cap6_ebook_file)
        knowSession(cap6_workbook, cap6_workbook_file)
        knowSession(capExtra_ebook, capExtra_ebook_file)
        knowSession(cap7_ebook, cap7_ebook_file)
        knowSession(cap7_workbook, cap7_workbook_file)
        knowSession(cap8_ebook, cap8_ebook_file)
        knowSession(cap8_workbook, cap8_workbook_file)
        knowSession(cap9_ebook, cap9_ebook_file)
        knowSession(cap9_workbook, cap9_workbook_file)
        knowSession(cap10_ebook, cap10_ebook_file)
        knowSession(cap10_workbook, cap10_workbook_file)
        knowSession(cap11_ebook, cap11_ebook_file)
        knowSession(cap11_workbook, cap11_workbook_file)
        knowSession(cap12_ebook, cap12_ebook_file)
        knowSession(cap12_workbook, cap12_workbook_file)
    } else {
        unknowSession(cap1_ebook)
        unknowSession(cap1_workbook)
        unknowSession(cap2_ebook)
        unknowSession(cap2_workbook)
        unknowSession(cap3_ebook)
        unknowSession(cap3_workbook)
        unknowSession(cap4_ebook)
        unknowSession(cap4_workbook)
        unknowSession(cap5_ebook)
        unknowSession(cap5_workbook)
        unknowSession(cap6_ebook)
        unknowSession(cap6_workbook)
        unknowSession(capExtra_ebook)
        unknowSession(cap7_ebook)
        unknowSession(cap7_workbook)
        unknowSession(cap8_ebook)
        unknowSession(cap8_workbook)
        unknowSession(cap9_ebook)
        unknowSession(cap9_workbook)
        unknowSession(cap10_ebook)
        unknowSession(cap10_workbook)
        unknowSession(cap11_ebook)
        unknowSession(cap11_workbook)
        unknowSession(cap12_ebook)
        unknowSession(cap12_workbook)
    }
})

//se tem session
let sessionId = localStorage.getItem('session')
if (sessionId) {
    //valida
    if (await findSession(sessionId)) { //se valida
        buttonClose.forEach((element) => { 
            element.innerHTML = 'sair'
            element.href = 'javascript:void(0)' //exibe sair
            element.addEventListener("click", logout, false)
         })
    }else {
        buttonClose.forEach((element) => { 
            element.innerHTML = 'entre ou cadastre-se'
            element.href = '/#register' //exibe sair
         })
    }
}

knowSession(cap0_ebook, cap0_ebook_file)