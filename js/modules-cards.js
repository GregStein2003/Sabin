const card = document.querySelectorAll(".js-modules-card");
const cardContainer = document.querySelectorAll(".modules-cards__container")
const actionBack = document.querySelectorAll(".js-action-back")

card.forEach(function(element){
    element.addEventListener("click", function(insideElement){
        element.parentNode.classList.add("modules-cards__container--active");
        element.classList.add("card--active")

        console.log(insideElement)
    })
})
