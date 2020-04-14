# Sequelize Library

In this activity, you will use sequelize query methods to create the required routes.

## Instructions

* Create a `'sequelize_library'` DB.

* Be sure to modify the [connection.js](Unsolved/app/config/connection.js) file to include your MySQL user/database information.

* Modify the query methods in the [api-routes.js](Unsolved/app/routes/api-routes.js) file to use sequelize to GET the following:

  * Get all books

  * Get all books of a specific genre

  * Get all books from a specific author

  * Get all "long" books (books with 150 pages or more)

  * Get all "short" books (books with 150 pages or less)

  ## Hint(s)

  * You may need to consult the [Sequelize Manual on Operators](https://sequelize.org/master/manual/model-querying-basics.html#operators) for the last two queries involving book pages.