const menuBtn = document.querySelector(".menu")
const menuBlock = document.querySelector(".menu-block")
const closeBtn = document.querySelector(".close-btn") 

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
