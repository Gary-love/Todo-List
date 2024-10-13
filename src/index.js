import home from "./pages/home";
import "./styles/style.css";
import build from "./pages/methods";
home();
let button=document.querySelector("#button");
let closeBtn=document.querySelector(".close")
button.addEventListener("click",()=>{
    document.querySelector(".data").style.display="flex";
    
})
closeBtn.addEventListener("click",()=>{
    document.querySelector(".data").style.display="none";
    
})
document.querySelector(".submit").addEventListener("click",()=>{
    document.querySelector(".data").style.display="none";
    build();
})