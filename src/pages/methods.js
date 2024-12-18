import showProjTask from "../index";
import {store} from "./localStorage"
import {deleteData} from "./localStorage"
let untitledNum=1;
let select=document.querySelector('select');
let buildTask = () => {
  let name=document.querySelector("#name");
  let date=document.querySelector("#Date");
  let content=document.querySelector("#content");
  let tasks=document.querySelector('#tasks');
  let task = document.createElement("div");
  let dueDate = document.createElement("div");
  dueDate.classList="date"
  dueDate.textContent=date.value;
  task.classList.add("task");
  task.classList.add(select.value);
  task.id=select.value;
  let input = document.createElement("input");
  input.type = "checkbox";
  input.classList.add("checkbox");
  task.appendChild(input);
  let label = document.createElement("label");
  label.textContent = name.value;
  task.appendChild(label);
  input.addEventListener("click", () => {
    deleteData(task);
    task.remove();
  });
  task.appendChild(dueDate);
  tasks.appendChild(task);
  content.style.backgroundImage="none";
  store(task);
};
let buildProjects=()=>{
  let projects=document.querySelector("#project");
  let newProject=document.createElement("div");
  let input=document.createElement("input");
  let addBtn=document.querySelector("#add");
  input.type="text";
  input.id="newPro";
  newProject.classList.add("project");
  newProject.appendChild(input);
  projects.insertBefore(newProject,addBtn);
  addBtn.style.display="none";
  projects.appendChild(newProject);
  input.addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
      let addPro=document.querySelector("#newPro");
      let newProj=document.createElement("div");
      let option=document.createElement("option");
      if(addPro.value===""){
        newProj.id=`untitled${untitledNum}`;
        newProj.textContent=`untitled${untitledNum}`;
        untitledNum+=1;
      }
      else{
        newProj.id=addPro.value;
        newProj.textContent=addPro.value;
      }
      newProj.classList="project";
      projects.insertBefore(newProj,addBtn);
      option.value=newProj.id;
      option.textContent=newProj.id;
      select.appendChild(option)
      showProjTask();
      input.remove();
      newProject.remove();
      addBtn.style.display="block";
    }
  })  
}
export{buildProjects,buildTask};
