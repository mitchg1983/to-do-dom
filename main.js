//Establish DOM elements

const displayArea = $("ul.displayList");


//tasks is an array of objects, where each object is a task on the person's list.
let tasks = [
  {
    taskName: "Eat a bagel.",
    priority: 0,
    dueDate: 0,
    comments: "",
  },
  {
    taskName: "Drink some coffee.",
    priority: 0,
    dueDate: 0,
    comments: "",
  },
];







//for each object in the tasks array, add a corresponding list item for the user to see
$.each(tasks, function (index, value) {

  const newListItem = $('<li class="task"></li>');

  //Change the text value of the new list item to be the task. Might need to add in
  //a check to the length of the string. So a person won't need to see a whole paragraph
  //printed out.
  $(newListItem).text(value.taskName);

  console.log(`${$(newListItem).text()}`);

  $(displayArea).append(newListItem);
});
