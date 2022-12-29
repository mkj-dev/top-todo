import Task from "./modules/Task.js";

const tasks = document.querySelector("#tasks");
const taskArray = [];

// Form elements
const taskTitle = document.querySelector("#title");
const taskDesc = document.querySelector("#description");
const taskDeadline = document.querySelector("#deadline");

// Task button
const addTaskBtn = document.querySelector("#addTask");

addTaskBtn.addEventListener("click", () => {

  if (!taskTitle.value || !taskDesc.value || !taskDeadline.value) {
    alert("Please fill in all fields");
    return;
  }

  const task = new Task(taskTitle.value, taskDesc.value, taskDeadline.value);
  taskArray.push(task);
  
});