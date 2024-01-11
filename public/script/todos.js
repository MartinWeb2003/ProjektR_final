const form = document.getElementById('todos-form');
const input = document.getElementById('todos-input');
const todosUL = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));

if(todos && Array.isArray(todos)){
    todos.forEach(todo => addTodo(todo));
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
   
    if (input.value.trim().length === 0) {
       alert('Write a message, please ;)');
      input.value = '';
    } else {
      addTodo();
    }
}); 

function updateLS(){
    todosEl = document.querySelectorAll('ul#todos.todos li');

    const todos = [];

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        });
    });

    localStorage.setItem('todos',JSON.stringify(todos));
}

function addTodo(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo.text;
    }

    if (todoText) {
        const todoEl = document.createElement('li');

        // Corrected this line
        if (todo && todo.completed) {
            todoEl.classList.add('completed');
        }

        todoEl.innerText = todoText;
        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
            updateLS();
        });

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todoEl.remove();
            updateLS();
        });

        var firstChild = todosUL.firstChild;
        todosUL.insertBefore(todoEl, firstChild);
        input.value = '';

        updateLS();
    }
}
