const editAddress = document.querySelector(".edit-address");
const PopOpAddress = document.querySelector(".address-pop-op")
const ovelay = document.querySelector(".overlay");

editAddress.addEventListener("click",function(){

    PopOpAddress.classList.add("active")
    ovelay.classList.add("active")

}) 

ovelay.addEventListener("click",function(){
    PopOpAddress.classList.remove("active")
    ovelay.classList.remove("active")
})