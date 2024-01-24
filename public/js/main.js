const videoHome = document.querySelector(".js-video-home");

if(videoHome){
    videoHome.play();
}

const bars = document.querySelector(".js-menu");
const menu = document.querySelector(".header__navbar-menu");
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