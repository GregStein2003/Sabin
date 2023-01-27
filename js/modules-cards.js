const card = document.querySelectorAll(".js-modules-card");

card.forEach(function(element){
    element.addEventListener("click", function(e){
        element.parentNode.classList.add("modules-cards__container--active");
        element.classList.add("card--active")

        if(e.target.classList.value.includes("js-action-back") == true) {
            element.parentNode.classList.remove("modules-cards__container--active");
            element.classList.remove("card--active")
        }
    })
})
