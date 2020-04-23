const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const PORT = process.env.PORT || 3001;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

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
    read: false,
    author: 'Barbara Schultz'
  }
];

app.get('/', (req, res) => {
  // Send the books to the index handlebars file as an object
  const data = {
    library: books
  };

  res.render('index', data);
});

app.listen(PORT, () => {
  console.log('App listening on PORT ' + PORT);
});
