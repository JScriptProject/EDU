let bar = document.querySelector(".bar");
let navbar = document.querySelector(".navbar");
let fabars =  document.querySelector(".fa-bars");
let header = document.querySelector("header");

bar.addEventListener("click", function(){
  navbar.classList.toggle("navbar-visible");
  fabars.classList.toggle("fa-xmark");
})

// add scroll bahaviour
window.addEventListener("scroll", function(){
    var scrollPosition= window.scrollY;
    
    if(scrollPosition >= 70){
        header.classList.add("header-active");
    }
    else{
        header.classList.remove("header-active");
    }
})

