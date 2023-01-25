const bars = document.querySelector(".js-menu");
const menu = document.querySelector(".header__navbar-menu");
const video = document.querySelector(".js-video");
const buttonTest = document.querySelector(".home__button");
const body = document.querySelector("body");
const increase = document.querySelector(".js-increase");
const decrease = document.querySelector(".js-decrease");

bars.addEventListener("click", function(){
    menu.classList.toggle("header__navbar-menu--active");
})

// Function sizeAddese/Decrease Font-Size

increase.addEventListener("click", function(){
    tamanhofonte(1)
})

decrease.addEventListener("click", function(){
    tamanhofonte(-1)
})

function tamanhofonte (sizeAdd) {
	let size = body.getAttribute('tamanho') * 1;
	if ( (sizeAdd < 0 && size > -2) || (sizeAdd > 0 && size < 2) ) {
		size += sizeAdd;
	}
	body.setAttribute('tamanho', size);
}


// Register 

document.querySelector(".js-button-has-login").addEventListener("click", function(e){
	document.querySelector(".js-register").classList.remove("register__form--active");
	document.querySelector(".js-login").classList.add("register__form--active");
})

document.querySelector(".js-button-create").addEventListener("click", function(e){
	document.querySelector(".js-login").classList.remove("register__form--active");
	document.querySelector(".js-register").classList.add("register__form--active");
})


