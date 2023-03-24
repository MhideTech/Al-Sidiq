const nav = document.querySelector("nav")
const active = document.querySelector("navbar-active")
document.addEventListener("scroll", function(){
    if(window.scrollY > 174){
        nav.style.backgroundColor = "#1CB9C8";
        nav.style.width = "100%";
        nav.style.height = "fit-content";
        nav.style.margin = "0px auto"
        active.style.color = "#00122D"
        active.style.color = "#fff"
    } else{
        nav.style.width = "100%"
        nav.style.backgroundColor = "transparent"
    }
})