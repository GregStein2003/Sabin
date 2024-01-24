const linksMobile = document.querySelectorAll(".modal__categories-link");

document.querySelector(".js-menu").addEventListener("click", function(){
    initializeModal(".js-modal-menu-mobile")
})

function initializeModal(modalID){
    const modal = document.querySelector(modalID);
    const backgroundShadow = document.querySelector(".background-outline")
    modal.classList.add("modal--active");
    document.querySelector("body").addEventListener("click", (e) => {
      if(e.target.classList.value.includes("js-close") == true){
        modal.classList.remove("modal--active");
      }
    })
}

linksMobile.forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelector(".js-modal-menu-mobile").classList.remove("modal--active");
  })
})