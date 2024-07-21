// // const addButtonEl = $('#btn-container');
// // const taskInputBoxEl = $('#task-input-box');
// const shoppingFormEl = $('#shopping-form');
// const shoppingListEl = $('#shopping-list');
// const taskFormEl = $('#btn-container');
// const taskListEl = $('#task-list')
// // function handleAddButton(event){
// //     event.preventDefault();
// //     alert('chk0');
// //     console.log('Add button clicked!');
// //     alert('chk1');
// //     return;

// // }
// function handleAddButton(event){
//     event.preventDefault();
//   alert('CHK......');
//     inputField = $('#task-input');
//     // select form element by its `name` attribute and get its value
//     // const shoppingItem = $('input[name="shopping-input"]').val();
//     const taskItem = inputField.val();
  
//     // if there's nothing in the form entered, don't print to the page
//     if (!taskItem) {
//       console.log('No task item filled out in form!');
//       return;
//     }
  
//     // print to the page
//     taskListEl.append(`<li>${taskItem}</li>`);
  
//     // clear the form input element
//     $('input[name="task-input"]').val('');
//     inputField.val('');
// }
// function handleFormSubmit(event) {
//     event.preventDefault();
  
//     inputField = $('#shopping-input');
//     // select form element by its `name` attribute and get its value
//     // const shoppingItem = $('input[name="shopping-input"]').val();
//     const shoppingItem = inputField.val();
  
//     // if there's nothing in the form entered, don't print to the page
//     if (!shoppingItem) {
//       console.log('No shopping item filled out in form!');
//       return;
//     }
  
//     // print to the page
//     shoppingListEl.append(`<li>${shoppingItem}</li>`);
  
//     // clear the form input element
//     // $('input[name="shopping-input"]').val('');
//     inputField.val('');
//   }
  
// // addButtonEl.on('click', handleAddButton(event));
// shoppingFormEl.on('submit', handleFormSubmit);
// taskFormEl.on('submit', handleAddButton);


// Add Task Button
const addButtonEl = $('#add-task-btn');

// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const task = {};
// const container = $('container');
// const taskInputBoxEl = document.getElementById('#task-input-box')
const taskInputBoxEl = document.createElement('task-input-box')

const taskArray = [];
const currentTask = {};
const updatedTaskArrayString = JSON.stringify(taskArray);
localStorage.setItem('taskArray', updatedTaskArrayString);


let taskIdCounter = 1;
// Todo: create a function to generate a unique task id
function generateTaskId(prefix) {
    let uniqueTaskId =  prefix + taskIdCounter++;
    // alert(uniqueTaskId);
    return uniqueTaskId;
}

// Todo: create a function to create a task card
function createTaskCard() {
    
    // Create a div element
    const newDiv = document.createElement('div');
    newDiv.style.display = 'inline-block';

    const newTitleDiv = document.createElement('div');
    // const newDescriptionDiv = document.createElement('div');

    // Create a Title element
    const title = document.createElement('h2');
    title.textContent = 'Task Name: ';
    newTitleDiv.appendChild(title);

    // Create an input box for Title
    const titleInputBox = document.createElement('input');
    titleInputBox.setAttribute('type', 'text');
    newTitleDiv.appendChild(titleInputBox);
    // let tmpTitle = title.textContent + titleInputBox;
    // newDiv.appendChild(tmpTitle);

    // Create a div element
    const newDescriptionDiv = document.createElement('div');

    // Create a Description element
    const description = document.createElement('h2');
    description.textContent = 'Description: ';
    newDescriptionDiv.appendChild(description);
    // Create an input box for Description
    const descriptionInputBox = document.createElement('input');
    descriptionInputBox.setAttribute('type', 'text');
    newDescriptionDiv.appendChild(descriptionInputBox);
    
    // Create a submit button
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';

    newDiv.appendChild(newTitleDiv);
    newDiv.appendChild(newDescriptionDiv);
    newDiv.appendChild(submitButton);

    // document.body.appendChild(newDiv);

    // Append the new div to an existing element on the page
    const container = document.getElementById('task-input-box'); // Assuming there is an existing element with id 'container'
    container.appendChild(newDiv);

    // alert('CHK==================================');

    $("#task-container").on('click', submitButton, function() {
        const enteredTitle = `${titleInputBox.value}`;
        const enteredDescription = `${descriptionInputBox.value}`;
        const tmpTask = {}
        tmpTask.titleName = enteredTitle;
        // alert('tmpTask.titleName  =  ' + tmpTask.titleName);
        tmpTask.descriptionName = enteredDescription;
        // currentTask = tmpTask;

        alert('titleName = ' + tmpTask.titleName);
        alert('descriptionName = ' + tmpTask.descriptionName);
        const tmpTaskArray = localStorage.getItem('taskArray');

        alert('taskArray = ' + tmpTaskArray);
        taskArray = taskArray ? JSON.parse(tmpTaskArray) : [];
        alert('*** taskArray after parsed = ' + taskArray);            

        taskArray.push(tmpTask);
        alert('*** taskArray after task pushed = ' + taskArray);
        const updatedTaskArrayString = JSON.stringify(taskArray);
        localStorage.setItem('taskArray', updatedTaskArrayString);

        alert('currentTask = ' + currentTask + '    updatedTaskArrayString = ' + updatedTaskArrayString);


        // alert('Submit Button Clicked...!');
        // alert('Entered Title = ' + enteredTitle + '    Entered Description = ' + enteredDescription);
        // container.innerHTML = "";
    })
    
// submitButton.on('click', function() {
//     alert('Add Button Clicked...!');
//     container.innerHTML = "";


    // createTaskCard();
    // createTaskCard(task);
// });



    // task-input-box
    // const taskInputBox = $('#task-input-box');
    // const taskInputBox = document.createElement('taskInputBoxEl');
    // alert('createTaskCard entered...!');
    // let generatedNewTaskId = generateTaskId('Task');
    // alert('generatedNewTaskId processed...!: '+ generatedNewTaskId);

    // Create input elements
    // const title = document.createElement("title");
    // title.setAttribute("type", "text");
    // title.setAttribute("placeholder", "Enter Title");
    // title.setAttribute("background-color", "blue");
    // title.setAttribute("width", "100px");
    // alert('Before append title....! Title = '+$(title));

    // const description = document.createElement("description");
    // description.setAttribute("type", "text");
    // description.setAttribute("placeholder", "Enter Description");

    // Create 'Save' button
    // const saveButton = document.createElement("button");
    // saveButton.textContent = "Save";
    // saveButton.addEventListener('click', function() {
    //         alert('input title: '+title);
    //         }
    //     )   

    // Get the container element and append Title, Desc and Button
    // var inputContainer = document.createElement('form');
    // alert('Before append title....!');
    // title.style.backgroundColor = "red";
    // container.appendChild(taskInputBoxEl);
        // alert('after append title....!');

    // taskInputBoxEl.appendChild(inputContainer);
    // container.appendChild(title);
    // alert('after appendtaskInputBox....!');

    // taskInputBox.append(document.createElement("br"));
    // taskInputBox.appendChild(description);
    // taskInputBox.appendChild(document.createElement("br"));
    // taskInputBox.append(saveButton);

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    // alert('chk3');
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
    // alert('chk');
    // generateTaskId('Task');
    createTaskCard(task);
    // renderTaskList();
});

addButtonEl.on('click', function() {
    // alert('Add Button Clicked...!');
    // container.innerHTML = "";
    createTaskCard(task);
    // alert('CHK $$$#######');

    // container.innerHTML = "";
});


