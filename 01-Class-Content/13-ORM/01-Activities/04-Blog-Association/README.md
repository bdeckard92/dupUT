# Blog Association

In this activity, you will modify the `Post` and `Author` models so tht they are associated with each other. 

## Instructions

* Navigate to the [Unsolved](Unsolved/) folder and run `npm install` in your terminal.

* Be sure to modify the [connection.js](Unsolved/app/config/connection.js) file to include your MySQL user/database information.

* Open the [index.js](Unsolved/models/index.js) file and create the following associations:

  * Create a relationship that instructs the `Posts` to belong to `Authors`.

  * Create a relationship that instructs `Authors` that it has many `Posts`.

* You will need to set an `associate` property to the `Post` model after it's defined. 

## Hint(s)

## Bonus
