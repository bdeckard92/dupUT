# SQL Seeds 

In this activity, you will populate the `books_db` database with data.

## Instructions

* In the [Unsolved](Unsolved/) folder, create a `seeds.sql` file.

  * Insert the following names, in this order, into their corresponding columns in the `authors` table:

    1. Jane Austen
    
    2. Mark Twain
    
    3. Lewis Carroll
    
    4. Andre Asselin

  * Insert the following titles and `authorId` into their corresponding columns in the `books` table:

    * 'Pride and Prejudice', 1

    * 'Emma', 1

    * 'The Adventures of Tom Sawyer', 2

    * 'Adventures of Huckleberry Finn', 2

    * 'Alice''s Adventures in Wonderland', 3

    * 'Dracula', null 

* To create this database, initiate the MySQL Shell. Be sure your MySQL Server is running!

* If needed, execute the `schema.sql` file again and then seed the database.

* To check if the database was seeded correctly, query the database to select all of the authors or all of the books.

* To exit the MySQL command line, type `quit;` or `exit;`

## Hint(s)

* You may need to consult the MySQL documentation on [loading data into a table](https://dev.mysql.com/doc/refman/8.0/en/loading-tables.html).