




let inc = document.querySelectorAll('.increment');
let dec = document.querySelectorAll('.decrement');
let quantity = document.querySelectorAll('.quantity')

for( let i = 0 ; i < inc.length ; i++){
    let plusbutton = inc[i] ;
    let counter = 0
    plusbutton.addEventListener("click", (e) =>{
       // let buttonclicked = e.target
        let productquantity = plusbutton.parentElement.children[1]
        counter = productquantity.innerHTML
        counter ++
        productquantity.innerHTML = counter
})
}



for( let i = 0 ; i < dec.length ; i++){
    let minusbutton = dec[i] ;
    let counter = 0
    minusbutton.addEventListener("click", (e) =>{
       // let buttonclicked = e.target
       let productquantity = minusbutton.parentElement.children[1]
       counter = productquantity.innerHTML
       counter --
       if ( counter >= 0){
        productquantity.innerHTML = counter
       } else {
        alert('quantity can not be less than 0')
       }
})
} 




  for( let i = 0 ; i < inc.length ; i++){
    let plusbutton = inc[i] ;
    let count = 0

    plusbutton.addEventListener("click", (e) =>{
       
        let productsquantity = document.getElementById('cartAmount')
        count = productsquantity.innerHTML
        count ++
        productsquantity.innerHTML = count

})
}

for( let i = 0 ; i < dec.length ; i++){
    let minusbutton = dec[i] ;
    let counter = 0
    minusbutton.addEventListener("click", (e) =>{
       
       let productsquantity = document.getElementById('cartAmount')
       counter = productsquantity.innerHTML
       counter --
       if ( counter >= 0){
        productsquantity.innerHTML = counter
       } else {
        alert('quantity can not be less than 0')
       }
})
}


let likebuttons = document.querySelectorAll('.like')



//  for ( let i = 0 ; i < likebuttons.length ; i++){
//     let likebutton = likebuttons[i]
//      likebutton.addEventListener('click', () => {
//         if (likebutton.style.color == "red"){
//             likebutton.style.color = "white"
//         } else {
//             likebutton.style.color = "red"
//         }
//      })
//  }
likebuttons.forEach ((likebutton) => {
    likebutton.addEventListener('click', () => {
       if (likebutton.style.color == "red"){
           likebutton.style.color = "white"
       } else {
           likebutton.style.color = "red"
       }
    })

})




/** for (let i = 0 ; i < inc.length ; i++){
    let button = inc[i]
    button.addEventListener('click',()=>{
        //let item = document.getElementsByClassName('item')
        let priceproduct = document.getElementsByClassName('product-price')
        let price = parseInt(priceproduct[i].innerText.replace('$', ''))
        //console.log(price)
        let quantityproduct = document.getElementsByClassName('quantity')
        let quantity = quantityproduct[i].innerHTML
        //console.log(quantity)
        let itemprice = document.getElementsByClassName('item-price')
        let total = 0
        total += quantity * price
        //console.log(total)
        itemprice[i].innerHTML = total + '$'
    }
    )
}

*/
  

/**for (let i = 0 ; i < dec.length ; i++){
    let button = dec[i]
    button.addEventListener('click',()=>{
        
        let priceproduct = document.getElementsByClassName('product-price')
        let price = parseInt(priceproduct[i].innerHTML.replace('$', ''))
        console.log(price)
        let quantityproduct = document.getElementsByClassName('quantity')
        let quantity = quantityproduct[i].innerHTML
        console.log(quantity)
        let itemprice = document.getElementsByClassName('item-price')
        let total =  itemprice[i].innerHTML.replace('$','')
        
        if (total > 0){
            total -= price
        } 
        //console.log(total)
        itemprice[i].innerHTML = total + '$'
    }
    )
}
**/
for (let i = 0 ; i < inc.length ; i++){
    let button = inc[i]
    button.addEventListener('click',()=>{
        let totalitemsprice = document.getElementById('total')
        let priceproduct = document.getElementsByClassName('product-price')
        let price = parseInt(priceproduct[i].innerHTML.replace('$', ''))
        let totalprice = parseInt(totalitemsprice.innerHTML)
        totalitemsprice.innerHTML = totalprice + price
    })
}
for (let i = 0 ; i < dec.length ; i++){
    let button = dec[i]
    button.addEventListener('click',()=>{
        let totalitemsprice = document.getElementById('total')
        let priceproduct = document.getElementsByClassName('product-price')
        let price = parseInt(priceproduct[i].innerHTML.replace('$', ''))
        let totalprice = parseInt(totalitemsprice.innerHTML)
        if (totalitemsprice.innerHTML > 0){
            totalitemsprice.innerHTML = totalprice - price 
        }
    })
}


let removeButtons = document.querySelectorAll('.remove')

/*
for (let i = 0 ; i < removeButtons.length ; i++){
    let removebutton = removeButtons[i]
    removebutton.addEventListener('click', (e)=>{
       let totalquantity = getElementById('cartAmount')
       let quantityproduct = document.querySelector('quantity')
       let productquantity = quantityproduct.innerHTML
        totalquantity.innerHTML = totalquantity.innerHTML - productquantity
    })
}
 */

removeButtons.forEach ((removebutton) => {
    removebutton.addEventListener('click', (e)=>{
        let totalitemsprice = document.getElementById('total')
        let priceproduct = removebutton.parentElement.children[1].children[0]
        let price = parseInt(priceproduct.innerHTML.replace('$', ''))
        let quantity = removebutton.parentElement.children[1].children[1].children[1]
        let productquantity = quantity.innerHTML
        totalitemsprice.innerHTML = totalitemsprice.innerHTML - (price * productquantity)
        let totalquantity = document.getElementById('cartAmount')
        totalquantity.innerHTML = totalquantity.innerHTML - productquantity
        let removebuttonclicked = e.target
        removebuttonclicked.parentElement.parentElement.remove()
    })
}
)
