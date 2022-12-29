import Task from "./modules/Task.js";

const tasks = document.querySelector("#tasks");

// Retrieve the taskArray from local storage
const storedTasks = localStorage.getItem("tasks");

if (storedTasks) {
  const parsedTasks = JSON.parse(storedTasks);

  parsedTasks.forEach(task => {
    const taskElement = document.createElement("div");
    taskElement.innerHTML = `<h3>${task.title}</h3><p>${task.description}</p><p>${task.deadline}</p>`;
    tasks.appendChild(taskElement);
  });
}

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

  // Save the taskArray in local storage
  localStorage.setItem("tasks", JSON.stringify(taskArray));
});