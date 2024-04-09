const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        addTodoItem(todoText);
        todoInput.value = '';
    }
});

function addTodoItem(todoText) {
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    todoItem.textContent = todoText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'O\'chirish';
    deleteButton.addEventListener('click', function() {
        todoItem.remove();
    });

    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
}



const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
});
