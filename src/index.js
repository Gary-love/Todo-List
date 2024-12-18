import "./styles/style.css";
import {buildTask} from "./pages/methods";
import {buildProjects} from "./pages/methods";
import printTasks from "./pages/projects";
import loadFirst from "./pages/loadfirst";
loadFirst();
let button=document.querySelector("#button");
let closeBtn=document.querySelector(".close");
let tasks=document.querySelector("#tasks");
let removeInput=document.querySelectorAll(".checkbox");
let content=document.querySelector("#content");
let todo=document.querySelector("#todo");

console.log(tasks)
console.log(tasks.childElementCount)
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
removeInput.forEach((input)=>{
    input.addEventListener("click", () => {
        if(tasks.childElementCount===0){
            content.style=`
            background-image: url("./577079783ec440e56f88.svg");`
            todo.textContent="No tasks, relax";
        }
      });

})

let showProjTask=function(){
    let projects=document.querySelectorAll(".project");
    projects.forEach(project=>{
        project.addEventListener("click",()=>{
            let tasks=document.querySelectorAll(".task");
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