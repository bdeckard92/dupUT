# Node Read

In this activity, you will use the `mysql2` npm package to connect to a MySQL database and print all of the rows of the database's table in the console. 

## Instructions 

* Navigate to the [Unsolved](Unsolved/) folder and set up the database:

  * Initialize the MySQL Shell and run the `schema.sql` and `seeds.sql` files to create and populate the `ice_creamDB` database. Exit the MySQL Shell when done.

* Open the [connection.js](Unsolved/db/connection.js) file and update the `password` with your MySQL password.

* Open the [server.js](Unsolved/server.js) file and do the following:

  * In the `afterConnection()` function, write a simple query that will `SELECT` everything from the `products` table and log the results in the console.

  * Be sure to end the connection with `db.end();`. 

* To check if everything was done correctly, run `npm install` and `npm start` in the command line.

## Hint(s)

* You may need to consult the documentation for the [mysql2 package](https://www.npmjs.com/package/mysql2).