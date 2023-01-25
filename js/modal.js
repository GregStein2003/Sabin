document.querySelector(".js-menu").addEventListener("click", function(){
    initializeModal(".sidebar")
})

function initializeModal(modalID){
    const modal = document.querySelector(modalID);
    const backgroundShadow = document.querySelector(".background-outline")
    modal.classList.add("sidebar--active");
    backgroundShadow.classList.add("background-outline--active")
    document.querySelector("body").addEventListener("click", (e) => {
      if(e.target.classList.value.includes("js-close") == true){
        modal.classList.remove("sidebar--active");
        backgroundShadow.classList.remove("background-outline--active")
      }
    })
}