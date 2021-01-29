# SQL Schema

In this activity, you will create a MySQL database and tables.

## Instructions

* In the [Unsolved](Unsolved/) folder, create a `schema.sql` file for a database named `books_db`.

	* Add SQL commands to drop the database if it already exists, create the database, and use the database at the top of the file.

	* Create two tables, one for `books` and one for `authors`

		* The `books` table should have an `id` with the `PRIMARY KEY` and `AUTO_INCREMENT` attributes, `authorId`, and `title`.

		* The `authors` table should have an `id` with the `PRIMARY KEY` and `AUTO_INCREMENT` attributes, `firstName`, and `lastName`.

		* Carefully consider what data types those fields should be.

* To create this database, initiate the MySQL Shell. Be sure your MySQL Server is running!

* Execute the `schema.sql` file on the MySQL command line.

* To check if everything was done correctly, type `show databases;` and `show tables;` in the MySQL command line. Don't forget the semicolon!

* To exit the MySQL command line, type `quit;` or `exit;`

## Hint(s)

* You may need to consult the MySQL documentation on [creating a table](https://dev.mysql.com/doc/refman/8.0/en/creating-tables.html).