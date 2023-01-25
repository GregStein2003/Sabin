var createForm = document.querySelector(".js-form-create-register");
var accessForm = document.querySelector(".js-form-access-register")
var textAccessForm = document.querySelector(".js-access-form");
var textCreateForm = document.querySelector(".js-create-form");

function toggleForm(e){
    e.addEventListener("click", function(){
        createForm.classList.toggle("hide");
        accessForm.classList.toggle("hide");
    })
}

toggleForm(textAccessForm);
toggleForm(textCreateForm);
