

//slider

$(document).ready(function () {

    // Go to the previous item


    $('#best').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        rtl: true,
        dots: true,
        dotsEach: true,
        lazyLoad: true,
        lazyLoadEager: 3,
        mouseDrag: true,
        pullDrag: true,
        next_owl_carousel: 3000,

        responsive: {
            1200: {
                items: 4
            },
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            567: {
                items: 1
            },
            0: {
                items: 1
            }

        }
    });
    var owl = $('#best');
    owl.owlCarousel();
    // Listen to owl events:
    owl.on('changed.owl.carousel', function (event) {
        var owl = $('#best');
        owl.owlCarousel();
    })


    function callback(event) {
        $('#best').owlCarousel({
            onDragged: callback
        });
    }

    $('.best-selling-product .customNextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    })
    $('.best-selling-product .customPrevBtn').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })


});

$(document).ready(function () {

    // Go to the previous item


    $('#shuffle').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        rtl: true,
        dots: true,
        dotsEach: true,
        lazyLoad: true,
        lazyLoadEager: 3,
        mouseDrag: true,
        pullDrag: true,
        next_owl_carousel: 3000,

        responsive: {
            1200: {
                items: 4
            },
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            567: {
                items: 1
            },
            0: {
                items: 1
            }

        }
    });
    var owl = $('#shuffle');
    owl.owlCarousel();
    // Listen to owl events:
    owl.on('changed.owl.carousel', function (event) {
        var owl = $('#shuffle');
        owl.owlCarousel();
    })


    function callback(event) {
        $('#shuffle').owlCarousel({
            onDragged: callback
        });
    }

    $('.shuffle .customNextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    })
    $('.shuffle .customPrevBtn').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })


});
$(document).ready(function () {
    $('#comments').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        rtl: true,
        dots: true,
        dotsEach: true,
        lazyLoad: true,
        lazyLoadEager: 3,
        mouseDrag: true,
        pullDrag: true,
        next_owl_carousel: 3000,

        responsive: {
            1200: {
                items: 1
            },
            992: {
                items: 1
            },
            768: {
                items: 1
            },
            567: {
                items: 1
            },
            0: {
                items: 1
            }

        }
    });
    var owl = $('#comments');
    owl.owlCarousel();
    // Listen to owl events:
    owl.on('changed.owl.carousel', function (event) {
        var owl = $('#comments');
        owl.owlCarousel();
    })


    function callback(event) {
        $('#comments').owlCarousel({
            onDragged: callback
        });
    }

    $('.comment .customNextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    })
    $('.comment .customPrevBtn').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })

});



//show responcive menu

const menubtn = document.querySelector(".btn-menu");
const coverBody = document.querySelector(".cover-body")
const responciveMenu = document.querySelector(".menu ul")
menubtn.addEventListener("click",function(){
   responciveMenu.classList.add("active")
   coverBody.classList.add("active")
})
coverBody.addEventListener("click",function(){
    responciveMenu.classList.remove("active")
    coverBody.classList.remove("active")
})


//search setting

$(document).ready(function () {
   

  
    $('.search-box .text').blur(function () {
        $('.none-result').css("opacity","0");
        $('.result').css("opacity","0");
        $('.result').hide();
      }).focus(function () {
        $('.none-result').css("opacity","1");
     
      });

    
  });
  
   
        

//tab menu filter

const tabFilter = document.querySelectorAll(".tab-filter");


document.addEventListener("DOMContentLoaded",function(){
    
    tabFilter.forEach(item => {
        const active = item.parentElement.querySelector(".active")
        console.log(active.classList.contains("active"))
        let attr
        if(active.classList.contains("active")){
           
           attr = active.getAttribute("data-id") 
         }
        const productItem = document.querySelectorAll(".product-item");
        productItem.forEach(element => {
            element.parentElement.style.transform = 'scale(0)';
            setTimeout(() => {
                element.parentElement.classList.add("hidden")
                element.parentElement.classList.remove("active")
            }, 500)
            
            if (element.getAttribute("data-categury") === attr || attr === "all") {
                setTimeout(() => {
                    element.parentElement.style.transform = 'scale(1)';
                    element.parentElement.classList.remove("hidden")
                    element.parentElement.classList.add("active")

                }, 500)

            }

        })
    })
})

for (let index = 0; index < tabFilter.length; index++) {
    tabFilter[index].addEventListener("click", function () {
        for (let i = 0; i < tabFilter.length; i++) {
            tabFilter[i].classList.remove("active")
        }
        tabFilter[index].classList.add("active")
        const atrr = tabFilter[index].getAttribute("data-id")
        console.log(atrr)
        const productItem = document.querySelectorAll(".product-item");
        productItem.forEach(item => {
            item.parentElement.style.transform = 'scale(0)';
            setTimeout(() => {
                item.parentElement.classList.add("hidden")
                item.parentElement.classList.remove("active")
            }, 500)

            if (item.getAttribute("data-categury") == atrr || atrr == "all") {
                setTimeout(() => {
                    item.parentElement.style.transform = 'scale(1)';
                    item.parentElement.classList.remove("hidden")
                    item.parentElement.classList.add("active")

                }, 500)

            }

        })
    })

}




// add to shoppimg bag

const addToShopBtn = document.querySelectorAll(".add-to-shop")
const messagAdd = document.querySelector(".message-add")
const btnShopAnimate = [
    { transform: 'rotate(5deg) scale(1.1)' },
    { transform: 'rotate(-5deg) scale(1.1)' },
    { transform: 'rotate(5deg) scale(1.1)' },
    { transform: 'rotate(-5deg) scale(1.1)' },
    { transform: 'rotate(0deg) scale(1)' }
  ];
  const btnShopTimer = {
    duration: 500,
    iterations: 1,
  }
addToShopBtn.forEach(item => {
    item.addEventListener("click",function(){
        const btnShop = document.querySelector(".icon-shop i");
        btnShop.animate(btnShopAnimate,btnShopTimer)
       
        const iconShop = document.querySelector(".icon-shop i span")
        iconShop.classList.add("active")
        iconShop.innerHTML++;
        messagAdd.classList.remove('hide');
        messagAdd.classList.add('show');
        if(messagAdd.classList.contains('hidden')){
            messagAdd.classList.remove('hidden')
        }
        timer = setTimeout(function(){
            messagAdd.classList.remove('show');
            messagAdd.classList.add('hide');
        }, 2000)
       
    })
})

// const overlay = document.querySelector(".overlay")
// const shopping = document.querySelector(".shopping")
// const btnShopBag = document.querySelector(".icon-shop").addEventListener("click", function (e) {
//     e.preventDefault()
//     shopping.classList.add("active")
//     overlay.classList.add("active")
// })
// overlay.onclick = () => {
//     shopping.classList.remove("active")
//     overlay.classList.remove("active")
// }


// const allItem = document.querySelector(".all-item");
// const addToShop = document.querySelectorAll(".add-to-shop");
// const conuter = document.querySelector(".icon-shop i span")
// const totalPrice = document.querySelector(".total-price .price p")
// const resulPrice = document.querySelector(".result-price p");
// console.log(resulPrice)

// let cardItem = [];


// addToShop.forEach(item => {
//     item.addEventListener("click", function (e) {

//         let parentElement = item.parentElement
//         const product = {
//             id: parentElement.querySelector("#product-id").value,
//             name: parentElement.querySelector(".name").innerText,
//             image: parentElement.querySelector("img").getAttribute("src"),
//             price: parentElement.querySelector(".price").getAttribute("data-price"),
//             quantity: 1
//         }
      

//         let isInCard = cardItem.filter(item => item.id === product.id).length > 0;
//         if (!isInCard) {
//             addItemToTheDom(product)
//         } else {
//             alert("این محصول در سبد خرید موجود است")
//             return
//         }

//         const allCardItems = document.querySelectorAll(".card-item");

//         allCardItems.forEach(inItem =>{
          
//             let itemPrice = inItem.querySelector(".price");
           
//             itpro(itemPrice.textContent)
//                itemPrice.innerHTML =  itpro(itemPrice.textContent)
         
//             if(inItem.querySelector("input").value === product.id){

//                 increaseItem(inItem,product)
//                 decreaseItem(inItem,product)
//                 removeItem(inItem,product)
//             }
//         })



//         cardItem.push(product);
//         calculateTotal();

        
//     })
// })



// function addItemToTheDom(product) {
//     console.log(allItem)
//     allItem.insertAdjacentHTML("afterbegin",
//         `<div class="card-item">
//         <input type="hidden" value="${product.id}">
// <i  class="fas fa-times close" action="remove"></i>
// <img src="${product.image}" alt="">
// <div class="name">${product.name}</div>
// <div class="price-box">
// <div class="price-main">300,000 <span>تومان</span></div>
// <div class="price">${product.price}<span>تومان</span</div>

// </div>
// <div class="box-edit">
// <div class="minus" action="decrease"><i class="fas fa-minus"></i></div>
// <div class="count">تعداد : <span class="product__quantity">${product.quantity}</span></div>
// <div class="plus" action="increase"><i class="fas fa-plus"></i></div>
// </div>
// </div>`)

// }





// function calculateTotal() {
//     let total = 0;
  
//     cardItem.forEach(item => {
       
//         total += item.quantity * item.price
     

//     })
//     totalPrice.innerText = total;
//     resulPrice.innerText = total;
//     conuter.innerText = cardItem.length;
//     if(conuter.innerText > 0){
//         conuter.classList.add("active")
//     }else{
//         conuter.classList.remove("active")
//     }

    
//      itpro(total.innerText)
    
//     totalPrice.innerText =  itpro(total)
//      resulPrice.innerText =  itpro(total)
// }

// function increaseItem(inItem,product){
//     inItem.querySelector("[action='increase']").addEventListener("click",function(){
//         cardItem.forEach(item =>{
//             if(item.id === product.id){
//                 inItem.querySelector(".product__quantity").innerText = ++item.quantity;
//                 calculateTotal()

//             }
//         })
//     })
// }


// function decreaseItem(inItem,product){
//     inItem.querySelector("[action='decrease']").addEventListener("click",function(){
       
//         cardItem.forEach(item =>{
//             if(item.id === product.id){
//               if(item.quantity > 1){
//                 inItem.querySelector(".product__quantity").innerText = --item.quantity;
//               }else{
//                cardItem = cardItem.filter(item=> item.id !== product.id)
//                 inItem.remove()
//               }
//                 calculateTotal()

//             }
//         })
//     })
// }


// const price = document.querySelectorAll(".product-item .price");
//  price.forEach(item =>{
//     itpro(item.innerText)
//      item.innerHTML = itpro(item.innerText)
    
// })


// function itpro(Number) 
// {
      
//        Number+= '';
//         Number= Number.replace(',', ''); Number= Number.replace(',', ''); Number= Number.replace(',', '');
//         Number= Number.replace(',', ''); Number= Number.replace(',', ''); Number= Number.replace(',', '');
//         x = Number.split('.');
//         y = x[0];
//         z= x.length > 1 ? '.' + x[1] : '';
//         var rgx = /(\d+)(\d{3})/;
//          while (rgx.test(y))
//           y= y.replace(rgx, '$1' + ',' + '$2');
//         return y+ z;
       
     
//   }
  




// function removeItem(inItem, product){
//     inItem.querySelector("[action='remove']").addEventListener('click', function(){
//         cardItem.forEach(item => {
//             if(item.id === product.id){
              
//                     cardItem = cardItem.filter(newElement => newElement.id !== product.id);
//                     inItem.remove();
//                 calculateTotal()
                
//             }
//         })
//     })
// }