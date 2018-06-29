const $ = require("jquery");
// this module needs to export an object with a method that will take an array of todos and print that array

const printer = Object.create({}, {
  printTodos: {
    value: function(todoArray) {
      // First we clear the container so we're not printing a million todo lists one after another
      $("#container").empty();
      // Then we loop through the todo array that we recieved as a parameter
      todoArray.forEach((todo) => {
        // Create a div and give it the id of the current todo's id
        const $todoDiv = $("<div>").attr("id", todo.id)
        // Create an H4 element with the task's name and append it to the div we just created
        $("<h4>").text(todo.name).appendTo($todoDiv);
        // Create a P element with the tasks's details and append it to the same div
        $("<p>").text(todo.details).appendTo($todoDiv);
        // Create a delete button and append it to the div
        $("<button>").text("Delete").addClass("delete-btn").appendTo($todoDiv);
        // Append the div to the container
        $($todoDiv).appendTo("#container");
      })
    }
  }
})


module.exports = printer;