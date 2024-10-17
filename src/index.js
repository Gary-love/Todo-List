import home from "./pages/home";
import "./styles/style.css";
import build from "./pages/methods";
import printTasks from "./pages/projects";
import loadFirst from "./pages/loadfirst"
loadFirst();
let button=document.querySelector("#button");
let projects=document.querySelectorAll(".project");
let closeBtn=document.querySelector(".close");
let content=document.querySelector("#content")

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
projects.forEach(project=>{
    project.addEventListener("click",()=>{
        content.textContent="";
        switch(project.id){
            case "all":
                home();
                break;
            default:
                console.log(project.id);
                break;
        }
    })
})
// projects.forEach(project=>{
//     project.addEventListener("click",()=>{
//          printTasks(project);
//     })
// })