const createTodoBtn = document.getElementById('create-todo-btn');
const todoForm = document.getElementById('todo-form');

createTodoBtn.addEventListener('click', () => {
    todoForm.style.display = 'block';
})