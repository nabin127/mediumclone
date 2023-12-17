let nav = document.querySelector(".navbar")
document.addEventListener("scroll",(ev)=>{
    console.log(scrollY)
     if(scrollY>360){
        nav.classList.add("white")
        nav.classList.remove("yellow")
     }
     else{
        nav.classList.add("yellow")
        nav.classList.remove("white")

     }
})