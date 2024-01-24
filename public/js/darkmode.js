// Dark Mode
const html = document.querySelector("html");
const elementDarkMode = document.querySelector(".js-dark-mode");

elementDarkMode.addEventListener("click", function(){

    html.classList.toggle("mode-lightning")

    if(html.classList.contains("mode-lightning")){
      document.querySelectorAll(".js-logo").forEach((e) => { e.src = "assets/logotipos/Logo1_BrancoVermelho.png"})
      document.querySelector(".js-logo-sabin").src = "assets/logotipos/LogoSabin_Branco.png";
    }else {
      document.querySelectorAll(".js-logo").forEach((e) => { e.src = "assets/logotipos/Logo1_AzulVermelho.png"})
      document.querySelector(".js-logo-sabin").src = "assets/logotipos/LogoSabin_Escuro.png";
    }

})