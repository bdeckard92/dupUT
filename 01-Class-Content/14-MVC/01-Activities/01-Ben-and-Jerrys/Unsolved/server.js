// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');

// Creates an instance of the Express app
const app = express();

// Sets the port of our application
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default template engine
// YOUR CODE HERE
//

// Add your Dummy Data
// YOUR CODE HERE
//

// Route to see all ice cream flavors
app.get('/', (req, res) => {
  res.render('all');
});

// Create a route for specific ice cream
// YOUR CODE HERE
//

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
