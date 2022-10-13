import Task from "./modules/Task.js";

const mainContent = document.querySelector("#main");
const testDiv = document.querySelector("#test");
const taskArray = [];

// Form elements
const taskTitle = document.querySelector("#title");
const taskDesc = document.querySelector("#description");
const taskDeadline = document.querySelector("#deadline");

// Task button
const addTaskBtn = document.querySelector("#addTask");

addTaskBtn.addEventListener("click", () => {
  const task = new Task(taskTitle.value, taskDesc.value, taskDeadline.value);
  taskArray.push(task);
  testDiv.innerText = JSON.stringify(task);
  console.log(taskArray);
  return taskArray;
});