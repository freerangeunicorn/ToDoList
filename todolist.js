const appState = {
    currentUser: 'Anonymous',
    toDos: [
        {
            body: 'First Task Example',
            isDone: true,
            createdAt: new Date() 
        },
        {
            body: 'Second Task Example',
            isDone: true,
            createdAt: new Date()
        }
    ]
}


function addToDo() {
    console.log(appState) ;

    const newTask = {
        body: document.getElementById('thingToDo').value ,
        isDone: false,
        createdAt: new Date(),
    }
    appState.toDos.push(newTask); 
    console.log(appState) ;
    renderToDoList()
}




function renderToDoList() { 
    const tasksHTML = appState.toDos.map((task,idx) => {
        return `
        <li
        >${task.body} <a href="#" onclick="deleteTask(${idx})">Delete</a> 
        <a href="#" onclick="toggleIsDone(${idx})">DONE</a> 
        </li>
        `
        
    })
    document.getElementById('todoList').innerHTML = tasksHTML.join('');
    console.log("first line", appState);
}

const deleteTask = ((idx) => {
    console.log("within delete state 1" , appState);
    appState.toDos.splice(idx, 1);
    renderToDoList();
    console.log("within delete state " ,appState);
})

const toggleIsDone = (idx => {
    appState.toDos[idx].isDone = !(appState.toDos[idx].isDone);
    renderToDoList();
   
})

renderToDoList()