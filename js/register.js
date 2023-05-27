const inputRegister = document.querySelectorAll(".input-register .text")
const checkBoxReister = document.querySelector(".register-check input")
const form = document.querySelector(".form");
const password = document.querySelector(".password")
const password2 = document.querySelector(".password-2")


// form validation setting (register-page)



form.addEventListener("submit", function (e) {
    //input text validation
    inputRegister.forEach(item => {

        const error = item.parentElement.querySelector(".error")

        if (item.value == "") {
            error.classList.add("active")
            e.preventDefault()
        } else {
            error.classList.remove("active")


        }

    })

    //checkbox validation
    const checkError = checkBoxReister.parentElement.querySelector('.error')

    if (!checkBoxReister.checked) {
        checkError.classList.add("active")
        e.preventDefault()
    } else {
        checkError.classList.remove("active")
    }

    //input password validation
    const errorPass = password.parentElement.querySelector(".error")
    if (password.value === "") {
        errorPass.classList.add("active")
        e.preventDefault()
    }
    else {
        errorPass.classList.remove("active")
    }
    const errorPass2 = password2.parentElement.querySelector(".error")
    if(password2.value === ""){
        errorPass2.classList.add("active")
        e.preventDefault()
    }else if(password.value !== password2.value){
        errorPass2.innerHTML = "پسورد ها هم خوانی ندارند"
        e.preventDefault()
    }else{
        errorPass2.classList.remove("active")
    }

})



