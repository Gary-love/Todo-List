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
export default buildTask;
