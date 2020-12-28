//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const completedButton = document.querySelector('.completed');
const trashButton = document.querySelector('.trash');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', seriousButts);



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
    completedButton.classList.add('check');
    newTodo.appendChild(completedButton);
    //Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i> ';
    trashButton.classList.add('trash');
    newTodo.appendChild(trashButton);
    todoInput.value="";
    // trashButton.addEventListener('click', seriousButts)
};
    //Remove Item
 function seriousButts(e) {
     if(e.target.classList.contains("trash")){
    //Animation
    e.target.parentElement.parentElement.classList.add("fall");
    e.target.parentElement.parentElement.addEventListener('transitionend', function(){
        e.target.parentElement.parentElement.remove();
        
    });
    
}
    
    if(e.target.classList.contains("check")){
        e.target.parentElement.parentElement.classList.toggle("completed");}
        };