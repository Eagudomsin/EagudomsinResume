let menu = document.querySelector(".menu")
let navbar = document.querySelector(".nav")
let closebtn = document.querySelector(".close-btn")

menu.addEventListener("click", () => {
    menu.style.display = "none"
    navbar.style.display = "initial"
    navbar.style.animation ="menuClick 0.3s"
    closebtn.style.display = "initial"
})

closebtn.addEventListener("click", ()=> {
    menu.style.display = "initial"
    setTimeout(()=> {navbar.style.display = "none"} ,300)
    navbar.style.animation = "closeClick 0.3s"
    closebtn.style.display = "none"
})