//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const completedButton = document.querySelector('.completed');
const trashButton = document.querySelector('.trash');

//Event Listeners
todoButton.addEventListener('click', addTodo);
trash.addEventListener('click', removeItem);



//Functions
function addTodo(event){
    //Prevent Default
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');
    todoList.appendChild(todoDiv);
    //Create LI
    const newTodo = document.createElement('ul');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i> ';
    completedButton.classList.add('completed');
    newTodo.appendChild(completedButton);
    //Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i> ';
    trashButton.classList.add('trash');
    newTodo.appendChild(trashButton);
};
    //Remove Item

    