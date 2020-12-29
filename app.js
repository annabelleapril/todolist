//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const completedButton = document.querySelector('.completed');
const trashButton = document.querySelector('.trash');
const filterTodos = document.querySelector('.filter-todo');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterTodos.addEventListener('click', updateList);


//Functions
function addTodo(event){
    //Prevent Default
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //Append to list
    todoList.appendChild(todoDiv);
    //Clear input
    todoInput.value ='';
};

    //Remove Item
 function deleteCheck(e) {
     const item = e.target;
     if(item.classList.contains('trash-btn')){
        const todo = item.parentElement;
        todo.remove();
        
    };};
    
    

/*     
    if(e.target.classList.contains("check")){
        e.target.parentElement.parentElement.classList.toggle("completed");}
        };

        function updateList(e){
           const todos = todoList.childNodes;
           todos.forEach(function(todo){
               switch(e.target.value){
                   case "all":
                    todo.style.display = "flex";
                   break;

                   case "completed":
                   if(todo.classList.contains("completed")){
                       todo.style.display = "flex";
                   }else{
                       todo.style.display = "none";
                   }

               }
           });
        }
 */
