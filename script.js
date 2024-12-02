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
const cartProductsList = document.querySelector('.cart-section__products')

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
    if (!event.target.closest('.cart-section') && !event.target.closest('.cart-item')) {
        cartsection.classList.add("hidden");
    }
})



cartButton.addEventListener("click", function(){
   const quantity = parseInt(zeroElement.textContent)
    if(quantity > 0) {
        emptyMsg.style.display = "none"

        checkoutButton.style.display = "block"

        cartProductsList.innerHTML = ' '

        const totalPrice = quantity * productInfo.price

        const cartItem = document.createElement('li')
        cartItem.classList.add('cart-item') 
        

        cartItem.innerHTML = `<div class="cart-item-block">
      <img src="${productInfo.image}" alt="${productInfo.name}" width="50" />
        <p>${productInfo.name}</p>
        <div class="cart-item-values" >
            
        <span>$${productInfo.price.toFixed(2)}</span> 
               <span>x</span>  <span> ${quantity}</span>
                  <span id="total-cart">$${totalPrice.toFixed(2)}</span>
        </div><svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#231F20" d="M56,4H40c0-2.211-1.789-4-4-4h-8c-2.211,0-4,1.789-4,4H8C5.789,4,4,5.789,4,8v5c0,0.553,0.447,1,1,1h54 c0.553,0,1-0.447,1-1V8C60,5.789,58.211,4,56,4z"></path> <path fill="#231F20" d="M20,24c-0.553,0-1,0.447-1,1v26c0,0.553,0.447,1,1,1s1-0.447,1-1V25C21,24.447,20.553,24,20,24z"></path> <path fill="#231F20" d="M32,24c-0.553,0-1,0.447-1,1v26c0,0.553,0.447,1,1,1s1-0.447,1-1V25C33,24.447,32.553,24,32,24z"></path> <path fill="#231F20" d="M44,24c-0.553,0-1,0.447-1,1v26c0,0.553,0.447,1,1,1s1-0.447,1-1V25C45,24.447,44.553,24,44,24z"></path> <path fill="#231F20" d="M9,16H7v44c0,2.211,1.789,4,4,4h42c2.211,0,4-1.789,4-4V16h-2H9z M23,51c0,1.657-1.343,3-3,3s-3-1.343-3-3 V25c0-1.657,1.343-3,3-3s3,1.343,3,3V51z M35,51c0,1.657-1.343,3-3,3s-3-1.343-3-3V25c0-1.657,1.343-3,3-3s3,1.343,3,3V51z M47,51 c0,1.657-1.343,3-3,3s-3-1.343-3-3V25c0-1.657,1.343-3,3-3s3,1.343,3,3V51z"></path> </g> </g></svg></div>`

      cartProductsList.appendChild(cartItem)
    } else {
        emptyMessage.style.display = 'block'
        checkoutButton.classList.add('hidden')
    }
})

