






// tab img setting 
const imgItem = document.querySelectorAll(".other-img-item");
const mainImg = document.querySelector(".main-img-item img");

imgItem.forEach(item =>{
    item.addEventListener("click",function(){
        for (let index = 0; index < imgItem.length; index++) {
          imgItem[index].classList.remove("active")
            
        }
        item.classList.add("active")
        const getSrc = item.querySelector("img").src;
        mainImg.src = getSrc;
    });
})


// show count 
let controll = document.querySelector(".controll .count p")
let counter = document.querySelector(".controll .count").getAttribute("data-count");

const inpSubmit = document.querySelector(".inp-submit");
const amount = document.querySelector(".amount")
const trash = document.querySelector(".trash")
inpSubmit.addEventListener("click",function(){
    amount.style.display = "flex"
    inpSubmit.style.display = "none"
})
trash.addEventListener("click",function(){
    amount.style.display = "none"
    inpSubmit.style.display = "block"
    controll.innerHTML = 1;
    counter = 1;

})





//acaordion setting
const accor = document.querySelectorAll(".question")
accor.forEach(item =>{
    item.addEventListener("click",function(){
     item.classList.toggle("active")
     const text = item.nextElementSibling;
     
    if(text.style.height){
        text.style.height = null;
        text.style.padding = '0px'
    }else{
        text.style.height = text.scrollHeight + 40 + 'px'
        text.style.padding = '10px'
    }
     
    })
})
//first : get tag from the document
//second : ringing on the tag and access to easc other
//third :  toggle class element






//calculate price item

const btnPlus = document.querySelector(".plus")
const btnMinus = document.querySelector(".minus")
let calPrice = document.querySelector(".item-price .price").getAttribute("data-price");
const finalPrice= document.querySelector(".result-price p")
const btnPay = document.querySelector(".single-factor input");

window.addEventListener("load",function(){
    if(counter == 1){
        btnMinus.style.display = "none"
    }
  
})

//increase
btnPlus.addEventListener("click",function(){
    console.log(counter)
        btnMinus.style.display = "block"
    
    let one = 1
    counter = Number(counter) + Number(one)
    controll.innerHTML = counter;
    //  let x = (counter * calPrice);

    //  finalPrice.innerHTML = x;
    // itpro(finalPrice.innerHTML)
    // finalPrice.innerHTML = itpro(finalPrice.innerHTML)
})
console.log(counter)

//decrease
btnMinus.addEventListener("click",function(){
    console.log(counter)
    if(counter === 2){
        btnMinus.style.display = "none"
    }
 if(controll.innerHTML > 0){
    let one = 1
    counter = Number(counter) - Number(one)
    controll.innerHTML = counter;
    //  let x = (counter * calPrice);

    //  finalPrice.innerHTML = x;
    // itpro(finalPrice.innerHTML)
    // finalPrice.innerHTML = itpro(finalPrice.innerHTML)
 }
     
   
})




//three digits of three digits
function itpro(Number) 
{
      
       Number+= '';
        Number= Number.replace(',', ''); Number= Number.replace(',', ''); Number= Number.replace(',', '');
        Number= Number.replace(',', ''); Number= Number.replace(',', ''); Number= Number.replace(',', '');
        x = Number.split('.');
        y = x[0];
        z= x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
         while (rgx.test(y))
          y= y.replace(rgx, '$1' + ',' + '$2');
        return y+ z;
       
     
  }
  

  //first : get tag from the document
//second : write events
//third : price calculation opertions relative to the button  that is closed
//fourth : three digits of three digits of result price