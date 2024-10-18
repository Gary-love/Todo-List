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
    content.appendChild(todo);
    content.appendChild(task);
    content.appendChild(addBtn);
}
export default home;