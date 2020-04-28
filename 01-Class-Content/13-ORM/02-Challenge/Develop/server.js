const express = require('express');
const sequelize = require('./config/config');
require('./models');

const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
  sequelize.sync({ force: false });
});
