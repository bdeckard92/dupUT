const db = require('./db/connection');

db.connect(err => {
  if (err) throw err;
  console.log('connected as id ' + db.threadId + '\n');
  createProduct();
});

createProduct = () => {
  console.log('Inserting a new product...\n');
  const query = db.query(
    'INSERT INTO products SET ?',
    {
      flavor: 'Rocky Road',
      price: 3.0,
      quantity: 50
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + ' product inserted!\n');
      // Call updateProduct() AFTER the INSERT completes
      updateProduct();
    }
  );
  // logs the actual query being run
  console.log(query.sql);
};

updateProduct = () => {
  console.log('Updating all Rocky Road quantities...\n');
  // TODO: Update the quantity for 'Rocky Road' to 100
  //
  // YOUR CODE HERE
  //
  // TODO: Include the callback function to catch any errors,
  // log how many products were updated,
  // and call deleteProduct() AFTER the UPDATE completes
  //
  // YOUR CODE HERE
  //

  console.log(query.sql);
};

deleteProduct = () => {
  console.log('Deleting all strawberry ice cream...\n');
  // TODO: Delete the flavor 'strawberry'
  //
  // YOUR CODE HERE
  //
  // TODO: Include the callback function to catch any errors,
  // log how many products were deleted,
  // and call the readProducts() AFTER the DELETE completes
  //
  // YOUR CODE HERE
  //

  console.log(query.sql);
};

readProducts = () => {
  console.log('Selecting all products...\n');
  // TODO: Select all of the data from the 'products' table
  //
  // YOUR CODE HERE
  //
  // TODO: Include the callback function to catch any errors,
  // log all results of the SELECT statement,
  // and end the db
  //
  // YOUR CODE HERE
  //
};
