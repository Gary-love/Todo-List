let home=function(){
    const content=document.querySelector("#content");
    let todo=document.createElement("div");
    todo.id="todo";
    todo.textContent="Todo";
    let task=document.createElement("div");
    task.id='tasks'
    let addBtn=document.createElement("button");
    addBtn.id="button";
    addBtn.textContent="+";
    let task1=document.createElement("div");
    task1.id="work";
    task1.classList.add("task");
    task1.textContent="touch grass";
    task.appendChild(task1)
    task.appendChild(task1);
    content.appendChild(todo);
    content.appendChild(task);
    content.appendChild(addBtn);
}
export default home;