const fs = require('fs');
const inquirer = require('inquirer');

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
]).then(function(data) {
  
  // Bonus: Generate the name of your user file from their input
  const filename = data.name.toLowerCase().split(' ').join('') + ".json";

  fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
});
