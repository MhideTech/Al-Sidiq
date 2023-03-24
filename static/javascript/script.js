const nav = document.querySelector("nav")
const active = document.querySelector(".nav-active")
const active2 = document.querySelector(".nav-active2")
document.addEventListener("scroll", function(){
    if(window.scrollY > 100){
        nav.style.backgroundColor = "#1CB9C8";
        nav.style.width = "100%";
        nav.style.height = "fit-content";
        nav.style.margin = "0px auto"
        active.style.color = "#00122D"
        active2.style.color = "#00122D"
    } else{
        nav.style.width = "100%"
        nav.style.backgroundColor = "transparent"
    }
})