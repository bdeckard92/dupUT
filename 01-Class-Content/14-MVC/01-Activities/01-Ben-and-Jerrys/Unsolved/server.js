const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const PORT = process.env.PORT || 3001;

// Set Handlebars as the default templating engine here

// Add your Dummy Data here

app.get('/', (req, res) => {
  res.render('all');
});

// Create a route for specific ice cream here

app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
