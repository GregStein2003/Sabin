var buttonRegister = document.querySelector(".js-button-register");
var formRegister = document.querySelector(".js-register register__form--active")

// Register 

if(document.querySelector(".js-button-has-login")){
	document.querySelector(".js-button-has-login").addEventListener("click", function(e){
		document.querySelector(".js-register").classList.remove("register__form--active");
		document.querySelector(".js-login").classList.add("register__form--active");
	})
}

if(document.querySelector(".js-button-create")){
	document.querySelector(".js-button-create").addEventListener("click", function(e){
		document.querySelector(".js-login").classList.remove("register__form--active");
		document.querySelector(".js-register").classList.add("register__form--active");
	})
}

// Register Database

buttonRegister.addEventListener("click", submitForm)

function submitForm(e){
    e.preventDefault()

    // Fields
    var fullName = document.querySelector("input[name='full-name']").value;
    var email = document.querySelector("input[name='email']").value;
    var state = document.querySelector("select[name='state']").value;
    var city = document.querySelector("select[name='city']").value;
    var category = document.querySelector("select[name='categories']").value;

    insertUser(fullName, email, state, city, category)
}

function insertUser(fullName, email, state, city, category) {
    var refDatabase = firebase.database().ref('users').push()

    refDatabase.set({
        fullName: fullName,
        email: email,
        state: state,
        city: city,
        category: category,
    });
}