document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskInput = document.getElementById("new-task-description");
    const taskText = taskInput.value.trim(); 
        if (taskText !== "") {
   
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;

     
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "X";
      deleteButton.addEventListener("click", function() {
        taskItem.remove(); 
      });

      taskItem.appendChild(deleteButton); 
      taskList.appendChild(taskItem); 

      form.reset();
        }
  });
});
