document.addEventListener("DOMContentLoaded", function(){
const menuBtn = document.querySelector(".menu")
const menuBlock = document.querySelector(".menu-block")
const closeBtn = document.querySelector(".close-btn") 
const minusButton = document.querySelector('.minus')
const plusButton = document.querySelector('.plus')
const zeroElement = document.querySelector('.zero')
const images = document.querySelectorAll('.images img')
const nextButton = document.querySelector('.next')
const previousButton = document.querySelector('.previous')
const cartButton = document.querySelector(".cart-button")
const cartImg = document.querySelector("#cart")
const cartsection = document.querySelector(".cart-info")
const emptyMsg = document.querySelector(".empty-msg")
const checkoutButton = document.querySelector(".cart-section__btn-checkout")
const cartProductsList = document.querySelector('.cart-section__body')
const cartDiv = document.querySelector(".cart-item-block")
const quantity2 = document.querySelector(".quantity")

let currentIndex = 0

const productInfo = {
    name: "Autumn Limited Edition...",
    price: 125.00, 
    image: "ecommerce-product-page-main/ecommerce-product-page-main/images/image-product-1.jpg", 
  }


menuBtn.addEventListener("click", () => {
    menuBlock.classList.remove("hidden")
})


closeBtn.addEventListener("click", () => {
    menuBlock.classList.add("hidden")
})

menuBlock.addEventListener("click", (event) => {
    if (event.target === menuBlock) {
        menuBlock.classList.add("hidden")
    }
})


minusButton.addEventListener('click', () => {
    let currentValue = parseInt(zeroElement.textContent);
    if (currentValue > 0) {
        zeroElement.textContent = currentValue - 1;
    }
})

plusButton.addEventListener('click', () => {
    let currentValue = parseInt(zeroElement.textContent);
    zeroElement.textContent = currentValue + 1;
})

function showImage(index) {
    images.forEach((img, i) =>{
        img.style.display = i === index ? 'block': 'none'
    })
    previousButton.style.display = 'block'
    nextButton.style.display = 'block'

}

showImage(currentIndex)

nextButton.addEventListener("click", function(){
    if(currentIndex < images.length -3) {
        currentIndex ++
        showImage(currentIndex)
    } else {
        showImage(currentIndex = 0)
    }
})

previousButton.addEventListener("click", function(){
    if(currentIndex > 0){
        currentIndex --
        showImage(currentIndex)
    } else {
        showImage(currentIndex = 3)
    }
})

cartImg.addEventListener("click", function(){
    cartsection.classList.toggle("hidden")
})

cartsection.addEventListener("click", (event) => {
    if (!event.target.closest('.cart-section') && !event.target.closest('.cart-item') && event.target.closest('.container')) {
        cartsection.classList.add("hidden");
        cartinner.classList.add("hidden")
    }
})

cartButton.addEventListener("click", function(){
    const quantity = parseInt(zeroElement.textContent)
        if(quantity > 0) {
            emptyMsg.style.display = "none"
    
            checkoutButton.style.display = "block"
    
            cartProductsList.innerHTML = ' '
    
            const totalPrice = (quantity * productInfo.price).toFixed(2)

            const totalCart = document.querySelector("#total-cart")

            
            quantity2.textContent = `${quantity}`

            totalCart.textContent = `$${totalPrice}`

            cartProductsList.classList.toggle("hidden2")
            cartDiv.classList.toggle("hidden") 
            checkoutButton.classList.toggle("hidden")

           

} else{
    cartDiv.classList.toggle("hidden") 
    checkoutButton.classList.toggle("hidden")
}})

const svgTrash = document.querySelector("#SVGRepo_iconCarrier")

svgTrash.addEventListener("click", function(){
    cartProductsList.classList.add("hidden2");
    cartProductsList.style.display = "none";
    emptyMsg.style.display = "block";
    cartDiv.classList.add("hidden");
    checkoutButton.classList.add("hidden");
});


})