const alertModal = document.querySelector(".js-alert-modal");
const alertModalText = document.querySelector(".js-alert-text");
const alertModalClose = document.querySelector(".js-alert-close");

export function showAlertMessage(message, redirect) {
    alertModal.classList.add("alert-modal--active");
    alertModalText.innerHTML = message;

    alertModalClose.addEventListener("click", () => {
        alertModal.classList.remove("alert-modal--active");
        redirect != undefined ? window.location.href = redirect : "";
    })

    alertModal.addEventListener("click", (e) => {
        if(e.target.classList.value.includes("js-alert-modal") == true) {
            alertModal.classList.remove("alert-modal--active");
            redirect != undefined ? window.location.href = redirect : "";
        }
    })
}