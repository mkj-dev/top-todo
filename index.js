import Todo from "./modules/Todo.js";

// Form elements
const todoTitle = document.querySelector("#title");
const todoDesc = document.querySelector("#description");
const todoDeadline = document.querySelector("#deadline");
const addTodoBtn = document.querySelector("#addTodo");
const todos = document.querySelector("#todos");
const todoArray = [];

// Retrieve the todoArray from local storage
const storedTodos = localStorage.getItem("todos");

if (storedTodos) {
  const parsedTodos = JSON.parse(storedTodos);

  parsedTodos.forEach((todo, index) => {
    const todoElement = document.createElement("div");
    todoElement.innerHTML = `<h3>${todo.title}</h3><p>${todo.description}</p><p>${todo.deadline}</p><button class="delete-todo-btn">Delete</button>`;
    todos.appendChild(todoElement);
  
    const deleteBtn = todoElement.querySelector(".delete-todo-btn");
    deleteBtn.addEventListener("click", () => {
      // Remove the todo from the todoArray
      parsedTodos.splice(index, 1);
      // Save the updated todoArray in local storage
      localStorage.setItem("todos", JSON.stringify(parsedTodos));
      // Remove the todo element from the todos div
      todoElement.remove();
    });
  });
}

addTodoBtn.addEventListener("click", () => {

  if (!todoTitle.value || !todoDesc.value || !todoDeadline.value) {
    alert("Please fill in all fields");
    return;
  }

  const todo = new Todo(todoTitle.value, todoDesc.value, todoDeadline.value);
  todoArray.push(todo);

  if (!localStorage['todos']) {
    // Save the todoArray in local storage
    localStorage.setItem("todos", JSON.stringify(todoArray));
  } else {
    const todosString = localStorage['todos'];
    const todosArray = JSON.parse(todosString);

    todosArray.push(todo);

    const updatedTodosString = JSON.stringify(todosArray);
    // Set the todos key to the new JSON string value
    localStorage['todos'] = updatedTodosString;
  }

  // Refresh the page after adding todo
  document.location.reload(true)
});