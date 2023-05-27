const editBtn = document.querySelectorAll(".edit");
const addBtn = document.querySelectorAll(".add");

editBtn.forEach(item => {
    item.addEventListener("click", function () {

        item.classList.toggle("submit")
        if (item.classList.contains('submit')) {
            item.innerHTML = "ثبت"
        } else {
            item.innerHTML = "ویرایش"
        }
        const input = item.parentElement.querySelector("input");
        const name = item.parentElement.querySelector(".name")
        if (input.type == "hidden") {
            input.type = "text";
            name.style.display = "none"
        } else if (input.type == "text") {
            input.type = "hidden"
            name.style.display = "flex"
        }
        
        input.addEventListener("change", function () {
          if(item.getAttribute("data-value") == input.getAttribute("data-value")){
            const resultValue = input.value;
            if(item.classList.contains('sunmit')){
                input.value = ""
            }else{

                name.innerHTML = resultValue;
            }
          
          }

        })

        const date = document.querySelectorAll(".date-input")
        date.forEach(dateItem => {
            const [x, y, z] = document.querySelectorAll(".date-input");
            const resultDate =` ${x.value} / ${y.value} / ${z.value}`;

            if (item.classList.contains("submit")) {
               if(item.getAttribute("data-value") == dateItem.getAttribute("data-value")){
                dateItem.type = "text"
                dateItem.value = "";
                name.style.display = "none"
                name.innerHTML = resultDate.split("/");
               }
            } else {
                if(item.getAttribute("data-value") == dateItem.getAttribute("data-value")){
                dateItem.type = "hidden"
                name.style.display = "block"
                name.innerHTML =   resultDate
                }
            }

   
      
            let text = "How/are/you/doing/today?";
            const myArray = text.split("/");
            console.log(myArray[0])
        })



    })
})





console.log(addBtn)
addBtn.forEach(item => {
    item.addEventListener("click", function () {
        item.classList.toggle("submit")
        if (item.classList.contains('submit')) {
            item.innerHTML = "ثبت"
        }
        const input = item.parentElement.querySelector("input");

        const name = item.parentElement.querySelector(".name")
        if (input.type == "hidden") {
            input.type = "text";
            name.style.display = "none"
        } else if (input.type == "text") {
            input.type = "hidden"
            name.style.display = "flex"
        }
        input.value = name.innerHTML;

        input.addEventListener("change", function () {
            const resultValue = input.value;
            console.log(resultValue)
            name.innerHTML = resultValue;

        })

        
        // date.value = name.innerHTML
        // date.addEventListener("click",function(){
        //     const resultDate = date.value;
        //     console.log(resultDate)
        //     name.innerHTML = resultDate;
        //     console.log(name.innerHTML)
        // })
    })
})


$(".date-input").keyup(function () {
    if(this.value.length == this.maxLength){
     $(this).next('.date-input').focus();
    }

     //Do other stuff when not TAB
 });