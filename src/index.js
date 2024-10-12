import home from "./pages/home";
import "./styles/style.css";
import popup from './pages/methods'
home();
let button=document.querySelector("#button");
button.addEventListener("click",()=>{
    popup();
});
