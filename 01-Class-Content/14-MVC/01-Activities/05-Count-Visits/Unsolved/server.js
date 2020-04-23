const express = require('express');
const exphbs = require('express-handlebars');
// Require the 'express-session' module here

const app = express();

const PORT = process.env.PORT || 3001;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Set up the session with the 'secret', 'resave', 'saveUninitialized' options here

const books = [
  {
    title: 'Love You Forever',
    read: false,
    author: 'Robert Munsch'
  },
  {
    title: 'The Giving Tree',
    read: false,
    author: 'Shel Silverstein'
  },
  {
    title: 'Where the Red Fern Grows',
    read: true,
    author: 'Wilson Rawls'
  },
  {
    title: 'The Fault in Our Stars',
    read: true,
    author: 'John Green'
  },
  {
    title: 'Out of My Mind',
    read: false,
    author: 'Sally Engelfried'
  },
  {
    title: 'Wonder',
    read: true,
    author: 'Barbara Schultz'
  }
];

app.get('/', (req, res) => {
  if (req.session.countVisit) {
    // If the 'countVisit' session variable exists, increment it by 1 and set the 'firstTime' session variable to 'false'
  } else {
    // If the 'countVisit' session variable doesn't exist, set it to 1 and set the 'firstTime' session variable to 'true'
  }
  const data = {
    // Include the 'books' array, 'countVisit' and 'firstTime' session variables to be sent over to index.handlebars
  };
  res.render('index', data);
});

app.listen(PORT, () => {
  console.log('App listening on PORT ' + PORT);
});
