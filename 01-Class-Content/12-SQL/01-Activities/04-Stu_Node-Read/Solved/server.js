const sqlite3 = require('sqlite3').verbose();

// Connect to database 
const db = new sqlite3.Database('./iceCream.db', err => {
  if (err) {
    return console.error(err.message);
  }

  console.log('Connected to the ice cream database.');
  afterConnection();
});

const afterConnection = () => {
  // Execute query
  db.all('SELECT * FROM products', [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }

    // Log results
    console.log(rows);
  });
};