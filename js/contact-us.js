const inputConatct = document.querySelectorAll(".box input")
const form = document.querySelector("form");

// form validation setting (contact-us-page)

form.addEventListener("submit", function (e) {
    
    const textArea = document.querySelector(".box textarea")
    const errorArea = textArea.parentElement.querySelector(".error")

    // textarea validation
    if(textArea.value == ""){
        e.preventDefault()
        errorArea.classList.add("active")
    }else{
        errorArea.classList.remove("active")
    }
      // input validation
    inputConatct.forEach(item =>{
     
        const parent = item.parentElement;
          error(item, e)
     })
})





function error(item,e) {
    const error = item.parentElement.querySelector(".error")

    if (item.value == "") {
        error.classList.add("active")
        e.preventDefault()
    }else{
        error.classList.remove("active")
    }

}
