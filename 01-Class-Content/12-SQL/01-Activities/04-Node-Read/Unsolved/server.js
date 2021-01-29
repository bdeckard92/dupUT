const db = require('./db/connection');

db.connect(err => {
  if (err) throw err;
  console.log('connected as id ' + db.threadId);
  afterConnection();
});

afterConnection = () => {
  // TODO: Write a simple query that will SELECT everything from the 'products' table
  // Log the results in the console
  //
  // YOUR CODE HERE
  //
};
