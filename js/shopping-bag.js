

const btnMinus = document.querySelectorAll(".minus")
const plusBTn = document.querySelectorAll(".plus");
const shoppingItem = document.querySelectorAll(".shopping-item")
const priceItem = document.querySelectorAll(".price-item")
const priceTotal = document.querySelector(".price p")
const resultPrice = document.querySelector(".result-price p")
const btnRmove = document.querySelectorAll(".shopping-item .close")
const discountPrice = document.querySelector(".total-profit .price p")
console.log(btnRmove)






window.addEventListener("load", function () {

    let text = 0;
    priceItem.forEach(item => {
        const count = item.parentElement.parentElement.querySelector(".product__quantity")
        let priceText = item.getAttribute("data-price")
        text = (text + +priceText) * count.innerHTML;

    })
    priceTotal.innerHTML = text
    resultPrice.innerHTML = priceTotal.innerHTML
    btnMinus.forEach(item => {
        shoppingItem.forEach(element => {
            const count = element.querySelector(".product__quantity")
            if (item.getAttribute("data-id") == element.getAttribute("data-id")) {
                if (count.innerHTML > 1) {
                    item.style.visibility = "visible"
                }
            }
        })
    })

})




plusBTn.forEach(item => {
    btnMinus.forEach(item => {
        item.style.visibility = "hidden"
    })
    item.addEventListener("click", function () {
        shoppingItem.forEach(element => {
            const count = element.querySelector(".product__quantity");
            if (item.getAttribute("data-id") == element.getAttribute("data-id")) {
                ++count.innerHTML
                calculateTotal(item)

                btnMinus.forEach(minusItem => {
                    if (minusItem.getAttribute("data-id") == element.getAttribute("data-id")) {
                        minusItem.style.visibility = "visible"
                    }
                })


            }
        })
    })
})

btnMinus.forEach(item => {

    item.addEventListener("click", function () {
        shoppingItem.forEach(element => {
            const count = element.querySelector(".product__quantity");
            if (item.getAttribute("data-id") == element.getAttribute("data-id")) {
                --count.innerHTML
                calculateTotal(item)
                if (count.innerHTML <= 1) {
                    item.style.visibility = "hidden"
                }
            }
        })
    })
})


btnRmove.forEach(item => {
    item.addEventListener("click", function () {
        shoppingItem.forEach(element => {
            if (item.getAttribute("data-id") === element.getAttribute("data-id")) {
                const priceElement = element.getAttribute("data-price")
                const countElemnet = element.querySelector(".product__quantity")
                console.log(priceTotal)
                priceTotal.innerHTML = priceTotal.innerHTML - (priceElement * countElemnet.innerHTML);
                resultPrice.innerHTML = priceTotal.innerHTML
                let discount = 0;
                const disText = item.parentElement.parentElement.querySelector(".price-main").getAttribute("data-main");
                discount = (disText * countElemnet.innerHTML) - (priceElement * countElemnet.innerHTML) ;
                console.log(disText * countElemnet.innerHTML)
                discountPrice.innerHTML = +discountPrice.innerHTML - Number(discount)
                element.remove()
            }
        })
    })
})




function calculateTotal(item) {
 

    if (item.getAttribute("data-status") == "plus") {
        let x = item.getAttribute("data-price")

        priceTotal.innerHTML = Number(priceTotal.innerHTML) + Number(x);
        resultPrice.innerHTML = priceTotal.innerHTML
        let discount = 0;
        const disText = item.parentElement.parentElement.querySelector(".price-main").getAttribute("data-main");
         discount = disText - x;
        discountPrice.innerHTML = +discountPrice.innerHTML + Number(discount)
    }

    if (item.getAttribute("data-status") == "minus") {
        let x = item.getAttribute("data-price")

        priceTotal.innerHTML = priceTotal.innerHTML - x;
        resultPrice.innerHTML = priceTotal.innerHTML
        itpro(resultPrice.innerHTML)
        resultPrice.innerHTML = itpro(resultPrice.innerHTML)
        let discount = 0;
        const disText = item.parentElement.parentElement.querySelector(".price-main").getAttribute("data-main");
         discount = disText - x;
        
        discountPrice.innerHTML = +discountPrice.innerHTML - Number(discount)

    }
    if (item.getAttribute("data-status") == "remove") {
        priceTotal.innerHTML = priceTotal.innerHTML - x;
       
    }





}




function itpro(Number) {

    Number += '';
    Number = Number.replace(',', ''); Number = Number.replace(',', ''); Number = Number.replace(',', '');
    Number = Number.replace(',', ''); Number = Number.replace(',', ''); Number = Number.replace(',', '');
    x = Number.split('.');
    y = x[0];
    z = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(y))
        y = y.replace(rgx, '$1' + ',' + '$2');
    return y + z;


}











