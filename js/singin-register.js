const signInInput = document.querySelector(".sign-in-input input");
const form = document.querySelector("form");

// form validation setting (sign/reg-page)

form.addEventListener("submit",function(e){
    //input validation
    if(signInInput.value == ""){
        const error = signInInput.parentElement.querySelector(".error")
        error.classList.add("active")
        e.preventDefault()
    }else{
     
        error.classList.remove('active')
    }
})
