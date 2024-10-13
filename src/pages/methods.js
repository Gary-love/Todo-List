let buildTask = () => {
  let content=document.querySelector("#content");
  let tasks=document.querySelector('#tasks');
  let task = document.createElement("div");
  task.classList.add("task");
  let input = document.createElement("input");
  input.type = "checkbox";
  input.classList.add("checkbox");
  task.appendChild(input);
  let label = document.createElement("label");
  label.textContent = "Your task";
  task.appendChild(label);
  input.addEventListener("click", () => {
    task.remove();
  });
  tasks.appendChild(task);
  content.style.backgroundImage="none";
};
export default buildTask;
