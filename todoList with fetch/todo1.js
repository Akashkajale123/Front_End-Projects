const fetch_todos=document.getElementById('fetch_todos');
const show_all=document.getElementById('show_all');
const pending=document.getElementById('show_pending');
const Completed=document.getElementById('show_completed');
const buttons=document.getElementById('buttons');
let add_Todos; // Declare add_Todos in the global scope

let todos=[];
fetch_todos.addEventListener('click', async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    todos = data;
    displayTodos(todos);

    fetch_todos.remove();
    const inputBox=document.createElement('input');
    inputBox.type = 'text';
    inputBox.placeholder = 'Add Todos';
    inputBox.id = 'my-input';
     add_Todos=document.createElement('button');
    add_Todos.id='addTodo'
    add_Todos.textContent='Add ToDo';
    // console.log(add_Todos)
   
    buttons.appendChild(inputBox);
    buttons.appendChild(add_Todos)
    buttons.insertBefore(add_Todos,buttons.firstChild);
    buttons.insertBefore(inputBox,buttons.firstChild);

     // Add Todos
    add_Todos.addEventListener('click',()=>{
        add_Todos.style.backgroundColor='blue';
        add_Todos.style.color='white';
        const newTodo = inputBox.value.trim();
        if (newTodo) {
            todos.unshift({ id:'New',userId:'User',title: newTodo, completed: false });
            displayTodos(todos);
            inputBox.value = "";
        }
    
    })
})
// showAll
show_all.addEventListener('click',()=>{
        show_all.style.backgroundColor='blue';
        show_all.style.color='white';
        displayTodos(todos);
})
// pending
pending.addEventListener('click',()=>{
        pending.style.backgroundColor='red';
        pending.style.color='white';
        const pendingTodos = todos.filter(todo => !todo.completed);
        displayTodos(pendingTodos);
})
// completed
Completed.addEventListener('click',()=>{
        Completed.style.backgroundColor='green';
        Completed.style.color='white';
        const completedTodos = todos.filter(todo => todo.completed);
        displayTodos(completedTodos);
})

 function displayTodos(todos){
    //create table
    const tableContainer=document.getElementById('todo-list');
    tableContainer.innerHTML = ''; // Clear the existing table
    const table=document.createElement('table');
    table.style.border='1px solid black';
    table.style.borderRadius='10px'
    const head=document.createElement('thead');
    const body=document.createElement('tbody');
    const headerRow=document.createElement('tr');
    const h1=document.createElement('th');
    const h2=document.createElement('th');
    const h3=document.createElement('th');
    const h4=document.createElement('th');
    h1.textContent='Id';
    h1.style.width='10%';
    h2.textContent='User Id';
    h2.style.width='15%';
    h3.textContent='Description';
    h3.style.width='55%';
    h4.textContent='Status';
    h4.style.width='30%';
    headerRow.appendChild(h1);
    headerRow.appendChild(h2);
    headerRow.appendChild(h3);
    headerRow.appendChild(h4);
    head.appendChild(headerRow);
    table.appendChild(head);
    
    // body
    todos.forEach(todo => {
        const row=document.createElement('tr');
        const cell1=document.createElement('td');
        cell1.textContent=todo.id;
        cell1.style.textAlign='center';

        const cell2=document.createElement('td');
        cell2.textContent=todo.userId;
        cell2.style.textAlign='center';

        const cell3=document.createElement('td');
        cell3.textContent=todo.title;
        cell3.style.textAlign='center';

        const cell4=document.createElement('td');
        cell4.textContent=todo.completed ? "Completed" : "Pending...";
        cell4.style.textAlign='center';
        if(todo.completed){
            row.style.backgroundColor='green'
            row.style.color='white'
        }else{
            row.style.backgroundColor='red'
            row.style.color='white'
        }


        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        body.appendChild(row)

        
    });
    table.appendChild(body);
    tableContainer.appendChild(table);

 }

