const signInInput = document.querySelector(".sign-in-input input");
const toggleHide = document.querySelector(".sign-in-input i")
const form = document.querySelector("form");

// form validation setting (signin-page)

toggleHide.addEventListener("click",function(){
    //show or hide the password
    if (signInInput.type == "password") {
        signInInput.setAttribute("type", "text")
     } else {
        signInInput.setAttribute("type", "password")
     }
})
    

form.addEventListener("submit",function(e){
    // input validation
    if(signInInput.value == ""){
        const error = signInInput.parentElement.querySelector(".error")
        error.classList.add("active")
        e.preventDefault()
    }else{
     
        error.classList.remove('active')
    }
})