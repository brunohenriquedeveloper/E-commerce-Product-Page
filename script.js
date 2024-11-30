const menuBtn = document.querySelector(".menu")
const menuBlock = document.querySelector(".menu-block")
const closeBtn = document.querySelector(".close-btn") 
const minusButton = document.querySelector('.minus')
const plusButton = document.querySelector('.plus')
const zeroElement = document.querySelector('.zero')
const images = document.querySelectorAll('.images img')
const nextButton = document.querySelector('.next')
const previousButton = document.querySelector('.previous')
let currentIndex = 0


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

