const createTodoBtn = document.getElementById('create-todo-btn');
const closeFormBtn = document.getElementById('close-form-btn')
const todoForm = document.getElementById('todo-form');

createTodoBtn.addEventListener('click', () => {
    todoForm.style.display = 'block';
})

closeFormBtn.addEventListener('click', () => {
    todoForm.style.display = 'none';
})