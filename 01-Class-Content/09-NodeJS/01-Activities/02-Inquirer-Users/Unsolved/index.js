var fs = require('fs');
// Install the `inquirer` dependency

// Prompt your user

// Then write the user response to a file using the below callback function
// Hint: How can you chain this callback method to the prompt above?
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
