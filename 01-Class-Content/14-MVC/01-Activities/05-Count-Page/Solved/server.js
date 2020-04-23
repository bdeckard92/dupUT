const express = require('express');
const exphbs = require('express-handlebars');
// Require the 'express-session' module here
const session = require(`express-session`);

const app = express();

const PORT = process.env.PORT || 3001;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Set up the sessions with the 'secret', 'resave', 'saveUninitialized' options here
app.use(
  session({
    secret: 'This is a major secret!',
    resave: false,
    saveUninitialized: false
  })
);

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
  if (req.session.countPage) {
    // If the 'countPage' session variable exists, increment it by 1 and set the 'firstTime' session variable to 'false'
    req.session.countPage++;
    req.session.firstTime = false;
  } else {
    // If the 'countPage' session variable doesn't exist, initialize it and set it to 1.
    // Initialize and set the 'firstTime' session variable to 'true'
    req.session.countPage = 1;
    req.session.firstTime = true;
  }
  const data = {
    library: books,
    // Include the 'countPage' and 'firstTime' session variables to be sent over to index.handlebars
    countPage: req.session.countPage,
    firstTime: req.session.firstTime
  };
  res.render('index', data);
});

app.listen(PORT, () => {
  console.log('App listening on PORT ' + PORT);
});
