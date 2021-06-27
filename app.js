const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');
const todoDelete = document.querySelector('.todo_delete');


todoButton.addEventListener("click", addTodo)

function addTodo(event) {
    event.preventDefault();
    todoInput.value.trim();
    //todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //todo LI 
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);

    if(todoInput.value === ""){
        return false;
    }
    
    if(todoList.childElementCount > 6) {
        return null;
    }

    todoList.appendChild(todoDiv);

    todoInput.value = "";

    //task checkbox
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="far fa-circle"></i>';
    completedButton.classList.add('complete_btn')
    todoDiv.appendChild(completedButton);

}

todoDelete.addEventListener('click', clearList)

function clearList() {
    if (todoList.childElementCount >= 1) {
        todoList.innerHTML = ""
    }
}
