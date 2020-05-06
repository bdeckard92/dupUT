# SQL JOIN

In this activity, you will join the `books` and `authors` data together using JOIN queries.

## Instructions 

* In the [Unsolved/](Unsolved/) folder, create a `join.sql` file and write JOIN queries for the following: 

    * show ALL books with authors: INNER JOIN will only return all matching values from both tables

    * show ALL books, even if we don't know the author: LEFT JOIN returns all of the values from the left table, and the matching ones from the right table

    * show ALL authors, even if we don't know the book: RIGHT JOIN returns all of the values from the right table, and the matching ones from the left table

* To initiate the MySQL command line, type: `mysql -u root -p` in your command line and then your MySQL password.

* To set up the database, type into the MySQL command line: `source schema.sql`

* To seed the database, type into the MySQL command line: `source seeds.sql`

* To check if everything was done correctly, type into the MySQL command line: `source join.sql`

* To exit the MySQL command line, type `quit;` or `exit;`

## Hint(s)

* You may need to consult the MySQL documentation on [the JOIN clause](https://dev.mysql.com/doc/refman/5.7/en/join.html)