const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const PORT = process.env.PORT || 3001;

// Set Handlebars as the default templating engine here

const animals = [
  {
    animalType: 'dog',
    pet: true,
    fierceness: 4
  },
  {
    animalType: 'cat',
    pet: true,
    fierceness: 6
  },
  {
    animalType: 'giraffe',
    pet: false,
    fierceness: 4
  },
  {
    animalType: 'zebra',
    pet: false,
    fierceness: 8
  },
  {
    animalType: 'lion',
    pet: false,
    fierceness: 10
  }
];

app.get('/all-pets', (req, res) => {
  // Loop through the animals, and send those that are pets to the `index.handlebars` file.
  // Hint: Handlebars requires an object to be sent to the `index.handlebars` file, not an array!
});

app.get('/all-non-pets', (req, res) => {
  // Loop through the animals, and send those that are NOT pets to the `index.handlebars` file.
  // Hint: Handlebars requires an object to be sent to the `index.handlebars` file, not an array!
});

app.listen(PORT, () => {
  console.log('App listening on PORT ' + PORT);
});
