import home from "./pages/home";
import "./styles/style.css";
import {buildTask} from "./pages/methods";
import {buildProjects} from "./pages/methods";
import printTasks from "./pages/projects";
import loadFirst from "./pages/loadfirst"
loadFirst();
let button=document.querySelector("#button");
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
    buildTask();
})

let showProjTask=function(){
    let projects=document.querySelectorAll(".project");
    projects.forEach(project=>{
        project.addEventListener("click",()=>{
            let tasks=document.querySelectorAll(".task");
            // content.textContent="";
            switch(project.id){
                case "all":
                    printTasks(project,tasks);
                    break;
                default:
                     printTasks(project,tasks)
                    break;
            }
        })
    })
}
showProjTask();

let addProj=document.querySelector("#add");
addProj.addEventListener("click",()=>{
    buildProjects();
})
export default showProjTask;