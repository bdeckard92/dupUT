# Ice Cream CRUD

In this activity, you will write functions that will query the database to perform CRUD operations. 

## Instructions

* In the [connection.js](Unsolved/db/connection.js) file, update the `password` with your MySQL password. The `schema.sql` and `seeds.sql` files have been included in the `db` folder in case you need to reset the database.

* Open the [server.js](Unsolved/server.js) file.

  * Examine the `createProduct()` function and use as a reference to write the following functions to UPDATE, DELETE, and READ data in the `ice_creamDB` database. 

  * Update the quantity for `Rocky Road` to 100

  * Delete the flavor `strawberry`

  * Read all of the data from the `products` table

  * Remember to include the callback functions!

* To check if everything was done correctly, run `npm install` and `npm start` in the command line. 

## Hint(s)

* Use the prepared statements for the UPDATE and DELETE operations.