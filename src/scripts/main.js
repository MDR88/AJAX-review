const formBuilder = require("./FormBuilder")
const $ = require("jquery");
const printer = require("./Printer");


// Build the form
formBuilder.buildForm()

// This defines a function that prints all the todos on page load
const printOnPageLoad = () => {
  // This is leftover from before we refactored and put all our database handling into a seperate module. Now we could just import the DatabaseHandler module and call the getAllTasks function instead of making an AJAX call here, but I'm leaving it here just so y'all can see that it works the same way :)
  $.ajax("http://localhost:3000/todos")
  .then((todos) => {
    printer.printTodos(todos);
  })
}

// And then we call that down here
printOnPageLoad();