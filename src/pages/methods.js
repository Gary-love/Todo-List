import showProjTask from "../index";
let untitledNum=1;
let buildTask = () => {
  let name=document.querySelector("#name");
  let select=document.querySelector('select');
  let content=document.querySelector("#content");
  let tasks=document.querySelector('#tasks');
  let task = document.createElement("div");
  task.classList.add("task");
  task.id=select.value;
  let input = document.createElement("input");
  input.type = "checkbox";
  input.classList.add("checkbox");
  task.appendChild(input);
  let label = document.createElement("label");
  label.textContent = name.value;
  task.appendChild(label);
  input.addEventListener("click", () => {
    task.remove();
  });
  tasks.appendChild(task);
  content.style.backgroundImage="none";
  fun(content);
};
let fun=function(content){
  let select=document.querySelector('select');
  if(select.value==="add"){
    select.options[select.options.length]=new Option('text','sth')
  }

}
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
  let addPro=document.querySelector("#newPro");
  input.addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
      let addPro=document.querySelector("#newPro");
      let newProj=document.createElement("div");
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
      showProjTask();
      input.remove();
      newProject.remove();
      addBtn.style.display="flex";
    }
  })  
}

export{buildProjects,buildTask};
