// Retrieve tasks and nextId from localStorage
// let taskList = JSON.parse(localStorage.getItem("tasks"));


// const taskContainer = $('#taskContainer');
const newTask = document.getElementById('#add-button');

// let nextId = JSON.parse(localStorage.getItem("nextId"));
// const addTaskButton = document.getElementById('#add-button');
// // const title = document.createElement("title");
// const description = document.createElement("description");

let taskIdCounter = 1;
function generateTaskId(prefix) {
    // for (i=1; i<6; i++) {
        let tmpTask =  prefix + taskIdCounter++;
        alert('tmpTask = '+tmpTask);
    // }
    return tmpTask;
}

// Todo: create a function to create a task card
function createTaskCard(newTask) {
    alert('createTaskCard');

    generateTaskId('Task');
    // Create input elements
    const title = document.createElement("title");
    title.setAttribute("type", "text");
    title.setAttribute("placeholder", "Enter Title");

    const description = document.createElement("description");
    description.setAttribute("type", "text");
    description.setAttribute("placeholder", "Enter Description");

    // Create 'Save' button
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.id = 'saveButtonId';
   
    // Get the container element and append Title, Desc and Button
    alert('title = '+tmpTask);
    newTask.appendChild(title);
    newTask.appendChild(document.createElement("br"));
    newTask.appendChild(description);
    newTask.appendChild(document.createElement("br"));
    newTask.appendChild(saveButton);

    // Add an event listener to the newTask using event delegation
    newTask.addEventListener('click', function(event) {
        // Check if the cliced element is the save button
        if (event.target && event.target.id === 'saveButtonId') {
            // Handle the click event for the save button
            alert('Save Button Clicked...!');
        }
    })
        // const enteredTitle = title.value;
        // const enteredDescription = description.value;


    return newTask;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    // alert('chk1');
    // generateTaskId('Task');
});

// generateTaskId('Task');
// createTaskCard();
// Submit event on the form
// formEl.on('submit', handleFormSubmit);

addTaskButton.on('click', createTaskCard(newTask));
// addTaskButton.addEventListener('submit', createTaskCard);
