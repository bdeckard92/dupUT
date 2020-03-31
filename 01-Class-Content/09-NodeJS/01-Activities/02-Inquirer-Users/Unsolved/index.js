const fs = require('fs');
// Install the `inquirer` dependency here

// Your code for the prompt here

// Write the user response to a file by chaining the below callback method to the prompt above.
function(data) {

  // Bonus: Generate the name of your user file from their input
  // Your bonus code here

  fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
};
