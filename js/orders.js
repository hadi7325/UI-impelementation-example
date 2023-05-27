const tabOrder = document.querySelectorAll(".tab-filter");


tabOrder.forEach(btn => {
   btn.addEventListener("click", function () {
      for (let index = 0; index < tabOrder.length; index++) {
         tabOrder[index].classList.remove("active")
         btn.classList.add("active")

      }

      const attr = btn.getAttribute("data-id")
      const profile = document.querySelector(".profile")
      const orders = document.querySelector(".orders-items")

      if (attr === "orders") {
         orders.classList.add("active")
         profile.classList.remove("active")
      }
      if (attr === "profile") {
         orders.classList.remove("active")
         profile.classList.add("active")
      }

   })
})


const openBtnOrder = document.querySelectorAll(".open-order");
const productFactorDesc = document.querySelectorAll(".product-factor-desc");
openBtnOrder.forEach(btn => {
   btn.addEventListener("click", function () {
      
      const attr = btn.getAttribute("data-id");
      productFactorDesc.forEach(item => {
         const productAttr = item.getAttribute("data-status");
         if (attr === productAttr) {
            item.classList.toggle("active")
         
         } else {
            item.classList.remove("active")
          
         }
      })
   })
})

var threshold = 100;

