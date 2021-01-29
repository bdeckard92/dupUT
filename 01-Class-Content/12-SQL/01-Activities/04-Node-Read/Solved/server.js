const db = require('./db/connection');

db.connect(err => {
  if (err) throw err;
  console.log('connected as id ' + db.threadId);
  afterConnection();
});

afterConnection = () => {
  db.query('SELECT * FROM products', (err, res) => {
    if (err) throw err;
    console.log(res);
    db.end();
  });
};
