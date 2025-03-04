//Establish DOM elements

const displayArea = $("ul.displayList");

const addButton = $("div.add-new-task");

const editButton = $("div.edit-tasks");

const taskCounter = $("div.task-counter");

//tasks is an array of objects, where each object is a task on the person's list.
let tasks = [];

let trashBin = [];

let checkedT = 0;

let totalT = -1;

updateInfoBar("add");

//
//
//
//Add new task button
addButton.on("click", function () {
  //Ask user for a new task
  let task = prompt("Please enter your new task...");

  //~task~ is just a string at this point.
  if (task !== null) {
    //Log the time this task was added
    let d = new Date();
    let currentTime = d.toUTCString();

    //This is the task object.
    const newTaskObject = {
      taskName: task,
      timeStamp: currentTime,
      priority: 0,
      dueDate: 0,
      comments: "",
    };

    //The task object is pushed to our array for storage
    tasks.push(newTaskObject);

    //Next function will crete the list element to be displayed on the page
    addToList(task);
  }
});

function addToList(task) {
  //Make a new list element
  const newLI = $('<li class="task"></li>');

  //The user will see this element displayed as their task input
  $(newLI).text(task);

  //Add event listener to the new list item, for when someone clicks on it.
  newLI.on("click", function () {
    //task item removal function
    if (editing === true) {
      //Save the name of the task we are deleting
      const taskToRemove = $(newLI).text();

      for (const taskObject of tasks) {
        if (taskObject.taskName === taskToRemove) {
          tasks.splice(tasks.indexOf(taskObject), 1);
        }
      }

      $(newLI).remove();

      updateInfoBar("remove");
    } else {
      return;
    }
  });

  //Add this element to the 'clipboard' on the app
  $(displayArea).append(newLI);

  //Update the display number, of total tasks on the displayed list
  //
  //Update the infobar for the user

  updateInfoBar("add");
}

//Update the display for the infobar on the app
function updateInfoBar(input) {
  if (input === "add") {
    totalT++;
  }

  if (input === "remove") {
    totalT--;
  }

  if (input === "complete") {
    checkedT++;
  }

  //Task counter display
  const currentTasks = checkedT + " / " + totalT;
  $(taskCounter).text(currentTasks);
}

//Editing event listener for when the user clicks the edit button
let editing = false;

editButton.on("click", function () {
  if (editing) {
    $(editButton).removeClass("yes-edit").addClass("no-edit");
    editing = false;
  } else {
    $(editButton).removeClass("no-edit").addClass("yes-edit");
    editing = true;
  }
});
