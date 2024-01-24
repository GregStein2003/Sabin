// Function Jornada Lista de items

const itemJourney1 = document.querySelector(".js-journey-list-item--1"),
      itemJourney2 = document.querySelector(".js-journey-list-item--2"),
      itemJourney3 = document.querySelector(".js-journey-list-item--3"),
      itemJourney4 = document.querySelector(".js-journey-list-item--4"),
      itemJourney5 = document.querySelector(".js-journey-list-item--5"),
      itemJourney6 = document.querySelector(".js-journey-list-item--6"),
      itemJourney7 = document.querySelector(".js-journey-list-item--7");


const containerJourney = document.querySelector(".js-journey-container");
const iconCloseBox = document.querySelectorAll(".js-close-box");

itemJourney1.addEventListener("click", function(){
    removeClassBoxContainer()
	containerJourney.classList.add("journey__list-item--active", "step-1--active");
    document.querySelectorAll(".journey-step1--2").forEach((e) => { 
        e.src = "assets/journey/step-default-2.png" 
    })
})

itemJourney2.addEventListener("click", function(){
    removeClassBoxContainer()
	containerJourney.classList.add("journey__list-item--active", "step-2--active");
     document.querySelector(".js-step-hastag-3").src = "assets/journey/step-default-3.png";
})

itemJourney3.addEventListener("click", function(){
    removeClassBoxContainer()
	containerJourney.classList.add("journey__list-item--active", "step-3--active");
    document.querySelector(".js-step-hastag-4").src = "assets/journey/step-default-4.png";
    document.querySelector(".js-step-hastag-5").src = "assets/journey/step-default-4.png";
})

itemJourney4.addEventListener("click", function(){
    removeClassBoxContainer()
	containerJourney.classList.add("journey__list-item--active", "step-4--active");
    document.querySelector(".js-step-hastag-5-2").src = "assets/journey/step-default-5.png";
    document.querySelector(".js-step-hastag-7").src = "assets/journey/step-default-6.png";
})

itemJourney5.addEventListener("click", function(){
    removeClassBoxContainer()
	containerJourney.classList.add("journey__list-item--active", "step-5--active");
    document.querySelector(".js-step-hastag-8").src = "assets/journey/step-default-7.png";
    document.querySelector(".js-step-hastag-9").src = "assets/journey/step-default-8.png";
    document.querySelector(".js-step-hastag-10").src = "assets/journey/step-default-9.png";
})

itemJourney6.addEventListener("click", function(){
    removeClassBoxContainer()
	containerJourney.classList.add("journey__list-item--active", "step-6--active");
    document.querySelector(".js-step-hastag-11").src = "assets/journey/step-default-10.png";
    document.querySelector(".js-step-hastag-12").src = "assets/journey/step-default-11.png";
})

itemJourney7.addEventListener("click", function(){
    removeClassBoxContainer()
	containerJourney.classList.add("journey__list-item--active", "step-7--active");
    document.querySelector(".js-step-hastag-13").src = "assets/journey/step-default-12.png";
})

iconCloseBox.forEach((e)=>{
    e.addEventListener("click", function(){
        containerJourney.classList.remove("journey__list-item--active");
        removeClassBoxContainer()
    })
})

function removeClassBoxContainer(){
    containerJourney.classList.remove("step-1--active")
    containerJourney.classList.remove("step-2--active")
    containerJourney.classList.remove("step-3--active")
    containerJourney.classList.remove("step-4--active")
    containerJourney.classList.remove("step-5--active")
    containerJourney.classList.remove("step-6--active")
    containerJourney.classList.remove("step-7--active")
}


