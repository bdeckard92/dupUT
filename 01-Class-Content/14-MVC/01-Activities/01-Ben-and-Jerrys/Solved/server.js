// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');

// Create an instance of the express app.
const app = express();

// Set the port of our application
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default templating engine.
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Add your Dummy Data here
const icecreams = [
  { name: 'Milk and Cookies', price: 10, awesomeness: 3 },
  { name: 'Chocolate Peanut Butter Split', price: 4, awesomeness: 8 },
  { name: 'Bourbon Pecan Pie', price: 1, awesomeness: 1 },
  { name: 'Chubby Hubby', price: 5, awesomeness: 7 },
  { name: 'Coffee Toffee Bar Crunch', price: 6, awesomeness: 2 },
  { name: 'Ice Cream Sammie', price: 11, awesomeness: 15 }
];

// Route to see all ice cream flavors
app.get('/', (req, res) => {
  res.render('all');
});

// Create a route for specific ice cream here
app.get('/:num', (req, res) => {
  return res.render('icecream', icecreams[req.params.num - 1]);
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
