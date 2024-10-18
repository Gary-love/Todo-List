let things = document.querySelector(".task")
let printTasks = function (option) {
   things.forEach(task=>{
    if(task.id===option.id){
        console.log(task.class);
    }
   })
};
export default printTasks;
