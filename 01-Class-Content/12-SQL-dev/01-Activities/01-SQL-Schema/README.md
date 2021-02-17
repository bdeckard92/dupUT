# MySQL Schema

In this activity, you will create tables for a MySQL database.

## Instructions

* In the [Unsolved](Unsolved/db) folder, open the `schema.sql` file for a database named `inventory_db`.

	* Add a MySQL command to use the `inventory_db` database.

	* Create a new table named `books`.

	  * The `books` table should have the following columns: `id`, `book_name`, `book_description`, `category_name`, `price`, and `in_stock`.

	  * Each column in the `books` table should have an appropriate data type. 

	  * The `id` and the `book_name` columns should not accept NULL values. 

	* Create a new table named `categories`.

	  * The `categories` table should have the following columns: `id` and `category_name`.

	  * Each column in the `categories` table should have an appropriate data type and not accept null values.
	  
* Execute the `schema.sql` file using the MySQL Shell to create the database and tables.

* To check that the tables have been successfully created and have the correct data types, type `DESCRIBE books;` or `DESCRIBE categories;` into the MySQL shell. 

* To exit the MySQL command line, type `quit;` or `exit;`

## Hint(s)

* Consult the MySQL documentation on [creating a table](https://dev.mysql.com/doc/refman/8.0/en/creating-tables.html).

* Consult the MySQL documentation on [data types](https://dev.mysql.com/doc/refman/8.0/en/data-types.html)


