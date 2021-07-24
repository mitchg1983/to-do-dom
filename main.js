let tasks = [
  
    {
      taskName: "Eat a bagel.",
      priority: 0,
      dueDate: 0,
      comments: "",
    }
  ,
  
    {
      taskName: "Drink some coffee.",
      priority: 0,
      dueDate: 0,
      comments: "",
    },
  
];

let taskList = $("ul.displayList");

$.each(tasks, function(index, value) {



const outputTask = value.taskName;

const displayArea = $('ul.displayList');

const newListItem = $('<li class="task"></li>');



$(newListItem).text(outputTask);
console.log (`${$(newListItem).text()}`);


$(displayArea).append(newListItem);

    });

