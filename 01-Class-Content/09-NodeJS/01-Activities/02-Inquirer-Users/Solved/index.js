var fs = require('fs');
// Install the `inquirer` dependency
var inquirer = require("inquirer");

//Prompt your user
inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "What is your name?"
  },
  {
    type: "list",
    message: "What is your preferred method of communication?",
    name: "contact",
    choices: [
      "email",
      "phone",
      "Slack",
      "smoke signal"
    ]
  },
  {
    type: "checkbox",
    message: "What languages do you know?",
    name: "stack",
    choices: [
      "HTML", 
      "CSS", 
      "JavaScript", 
      "SQL"
    ]
  }
])
// Then write the user response to a file using the below callback function
.then(function(data) {
  
  // Bonus: Generate the name of your user file from their input
  var filename = data.name.toLowerCase().split(' ').join('') + ".json";

  fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
});
