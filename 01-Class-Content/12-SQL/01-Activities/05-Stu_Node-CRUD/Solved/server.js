const sqlite3 = require('sqlite3').verbose();

// Connect to database 
const db = new sqlite3.Database('./iceCream.db', err => {
  if (err) {
    return console.error(err.message);
  }

  console.log('Connected to the ice cream database.');
  createProduct();
});

const createProduct = () => {
  console.log('Inserting a new product...');

  // Set up query with ? placeholders
  const sql = 'INSERT INTO products (flavor, price, quantity) VALUES(?,?,?)';
  const params = ['Rocky Road', 3.0, 50];

  // Must use regular function syntax to preserve the context of `this`
  db.run(sql, params, function(err) {
    if (err) {
      return console.error(err.message);
    }
    
    console.log(`Product ID #${this.lastID} inserted!`);

    // Call UPDATE after INSERT completes
    updateProduct();
  });
};

const updateProduct = () => {
  console.log('Updating Rocky Road...');

  const sql = 'UPDATE products SET quantity = ? WHERE flavor = ?';
  const params = [100, 'Rocky Road'];

  db.run(sql, params, function(err) {
    if (err) {
      return console.error(err.message);
    }
    
    console.log(`${this.changes} row(s) were updated!`);

    // Call DELETE after UPDATE completes
    deleteProduct();
  });
};

const deleteProduct = () => {
  console.log('Deleting strawberry ice cream...');

  const sql = 'DELETE FROM products WHERE flavor = ?';
  const params = ['strawberry'];

  db.run(sql, params, function(err) {
    if (err) {
      return console.error(err.message);
    }
    
    console.log(`${this.changes} row(s) were deleted!`);

    // Call SELECT after DELETE completes
    readProducts();
  });
};

const readProducts = () => {
  db.all('SELECT * FROM products', [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }

    console.log(rows);
  });
};