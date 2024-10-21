let printTasks = function (option,tasks) {
  console.log(tasks)
  console.log(option)
   tasks.forEach(task=>{
      if(option.id===task.id){
        task.style.display="flex";
        console.log(task);
      }
      else{
        task.style.display="none";
      }
      if(option.id==="all"){
        task.style.display="flex";
      }
       
   })
};
export default printTasks;