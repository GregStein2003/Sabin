const card = document.querySelectorAll(".js-modules-card");
const cardContainer = document.querySelector(".modules-cards__container")

card.forEach(function(element){
    element.addEventListener("click", function(){
        cardContainer.classList.add("modules-cards__container--active");
        element.classList.add("card--active")
    })
})

