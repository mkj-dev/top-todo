import Task from "./modules/Task.js";

// Form elements
const taskTitle = document.querySelector("#title");
const taskDesc = document.querySelector("#description");
const taskDeadline = document.querySelector("#deadline");
const addTaskBtn = document.querySelector("#addTask");
const tasks = document.querySelector("#tasks");
const taskArray = [];

// Retrieve the taskArray from local storage
const storedTasks = localStorage.getItem("tasks");

if (storedTasks) {
  const parsedTasks = JSON.parse(storedTasks);

  parsedTasks.forEach((task, index) => {
    const taskElement = document.createElement("div");
    taskElement.innerHTML = `<h3>${task.title}</h3><p>${task.description}</p><p>${task.deadline}</p><button class="delete-task-btn">Delete</button>`;
    tasks.appendChild(taskElement);
  
    const deleteBtn = taskElement.querySelector(".delete-task-btn");
    deleteBtn.addEventListener("click", () => {
      // Remove the task from the taskArray
      parsedTasks.splice(index, 1);
      // Save the updated taskArray in local storage
      localStorage.setItem("tasks", JSON.stringify(parsedTasks));
      // Remove the task element from the tasks div
      taskElement.remove();
    });
  });
}

addTaskBtn.addEventListener("click", () => {

  if (!taskTitle.value || !taskDesc.value || !taskDeadline.value) {
    alert("Please fill in all fields");
    return;
  }

  const task = new Task(taskTitle.value, taskDesc.value, taskDeadline.value);
  taskArray.push(task);

  // Save the taskArray in local storage
  localStorage.setItem("tasks", JSON.stringify(taskArray));
});