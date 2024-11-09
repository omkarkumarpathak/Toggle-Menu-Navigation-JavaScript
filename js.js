const buttonEL=document.getElementById("clickme");
const menubar=document.getElementById("menubar");
const spanEl=document.getElementById("cut")

buttonEL.addEventListener("click",(e)=>{
    menubar.classList.toggle("active");
    
},false)

spanEl.addEventListener("click",(e)=>{
    menubar.classList.remove("active");
})