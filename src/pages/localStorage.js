let store = thing => {
  let num = 0;
  if (localStorage.getItem("num") === null) {
    console.log(num);
  } else {
    num = localStorage.getItem("num");
    console.log("wow");
  }
  num++;
  localStorage.setItem(`task${num}id`, `${thing.id}`);
  localStorage.setItem(`task${num}class1`, `${thing.classList[0]}`);
  let label = thing.querySelector("label");
  localStorage.setItem(`task${num}class2`, `${thing.classList[1]}`);
  localStorage.setItem(`task${num}content`, `${label.textContent}`);
  localStorage.setItem(`num`, `${num}`);
};
let deleteData = thing => {
  let num = localStorage.getItem("num");
  for (let i = 1; i <= num; i++) {
    let task = localStorage.getItem(`task${i}content`);
    if (task === thing.textContent) {
      localStorage.removeItem(`task${i}id`);
      localStorage.removeItem(`task${i}class1`);
      localStorage.removeItem(`task${i}class2`);
      localStorage.removeItem(`task${i}content`);
    } else {
      console.log("not yet");
    }
  }
};
let printTask = () => {
  let num = localStorage.getItem("num");
  for (let i = 1; i <= num; i++) {
    let taskClass1 = localStorage.getItem(`task${i}class1`);
    let taskClass2 = localStorage.getItem(`task${i}class2`);
    let taskId = localStorage.getItem(`task${i}id`);
    let taskContent = localStorage.getItem(`task${i}content`);
    if (taskId != null) {
      //   let task = document.querySelector(`#${taskId}`);
      //   tasks.appendChild(task);
      let name = document.querySelector("#name");
      let date = document.querySelector("#Date");
      let content = document.querySelector("#content");
      let tasks = document.querySelector("#tasks");
      let task = document.createElement("div");
      //   let dueDate = document.createElement("div");
      //   dueDate.classList = "date";
      //   dueDate.textContent = date.value;
      task.classList.add(`${taskClass1}`);
      task.classList.add(`${taskClass2}`);
      task.id = taskId;
      let input = document.createElement("input");
      input.type = "checkbox";
      input.classList.add("checkbox");
      task.appendChild(input);
      let label = document.createElement("label");
      label.textContent = taskContent;
      task.appendChild(label);
      input.addEventListener("click", () => {
        deleteData(task);
        task.remove();
      });
      //   task.appendChild(dueDate);
      tasks.appendChild(task);
      content.style.backgroundImage = "none";
      if (
        taskClass2 != "work" &&
        taskClass2 != "school" &&
        taskClass2 != "default"
      ) {
        let select=document.querySelector('select');
        let newProj=document.createElement("div");
        let project = document.querySelector("#project");
        let option=document.createElement("option");
        newProj.id=`${taskClass2}`
        newProj.classList = "project";
        newProj.textContent=`${taskClass2}`
        project.insertBefore(newProj,project.lastChild);
        option.value = newProj.id;
        option.textContent = newProj.id;
        select.appendChild(option);
      }
    }
  }
};
export { store, deleteData, printTask };
