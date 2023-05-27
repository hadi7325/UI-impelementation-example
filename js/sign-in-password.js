const form = document.querySelector("form")
const passwordBox = document.querySelectorAll(".password-box input");

// form validation setting (sign-in-password-page)


form.addEventListener("submit", function (e) {

    //imput password valid
    passwordBox.forEach(item => {
        errorAlert(item, e)
    })




})



function errorAlert(item, e) {
    const error = item.parentElement.querySelector(".error")

    e.preventDefault()
    if (item.value == "") {
        error.classList.add("active")
    } else {
        error.classList.remove("active")
    }
}


function autotab(current,to){
    if (current.getAttribute && 
      current.value.length==current.getAttribute("maxlength")) {
        to.focus() 
        }
}



// $(document).ready(function () {
//     (function () {

//         var tabKeyPressed = false;

      

//         $(".sign-in-input").keyup(function () {
//            if(this.value.length == this.maxLength){
//             $(this).next('.sign-in-input').focus();
//            }

//             //Do other stuff when not TAB
//         });

//     })();
// })
