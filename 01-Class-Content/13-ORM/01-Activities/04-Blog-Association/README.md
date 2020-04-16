# Blog Association

In this activity, you will create relationships between the `Post` and `Author` models so that they are associated with each other. 

## Instructions

* Navigate to the [Unsolved](Unsolved/) folder and run `npm install` in your terminal.

* Be sure to modify the [connection.js](Unsolved/app/config/connection.js) file to include your MySQL user/database information.

* Open the [index.js](Unsolved/models/index.js) file and create the following associations:

  * Create a relationship that instructs the `Post` to belong to `Author`.

  * Create a relationship that instructs `Author` that it has many `Post`.

* To test if the association was created properly, open your terminal and run `npm start` and check your MySQL Workbench. If the Posts table now has a foreign key of AuthorId, you were successful.

## Hint(s)

* You may need to consult the [Sequelize Manual on Associations](https://sequelize.org/master/manual/assocs.html). 