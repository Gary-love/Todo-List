const content=document.querySelector("#content");
import home from "./pages/home";
import menu from"./pages/menu";
import about from "./pages/about";
import loadFirst from "./pages/loadFirst";
loadFirst();
let buttons=document.querySelectorAll("button");
buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        content.textContent=""
        switch(button.textContent){
            case "Home":
                home();
                break;
            case "Menu":
                menu();
                break;
            case "About us":
                about();
                break;
        }
    })
})