// Dark Mode
const html = document.querySelector("html");
const elementDarkMode = document.querySelector(".js-dark-mode");

elementDarkMode.addEventListener("click", function(){

    html.classList.toggle("mode-lightning")


    if(html.classList.contains("mode-lightning")){
          document.querySelector(".js-logo").src = "/assets/logotipos/Ver1_BrancoVermelho.png"
 //       document.querySelectorAll(".js-image-module--1").forEach((e) => { e.src = "/assets/modules/ml-icon-modulo1.png"})
 //       document.querySelectorAll(".js-image-module--3").forEach((e) => { e.src = "/assets/modules/ml-icon-modulo3.png"})
    }else {
          document.querySelector(".js-logo").src = "/assets/logotipos/Ver1_AzulVermelho.png"

 //       document.querySelectorAll(".js-image-module--1").forEach((e) => { e.src = "/assets/modules/md-icon-modulo1.png"})
 //       document.querySelectorAll(".js-image-module--3").forEach((e) => { e.src = "/assets/modules/md-icon-modulo3.png"})
    }

})