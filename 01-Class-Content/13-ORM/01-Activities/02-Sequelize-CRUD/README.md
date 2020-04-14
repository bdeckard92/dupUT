# Sequelize CRUD

In this activity, you will use Sequelize CRUD methods to create new todos, update and delete todos, and view all todos. 

## Instructions

* Create a `'todolist'` DB.

* Navigate to the [Unsolved](Unsolved/) folder and run `npm install` in your terminal.

* Be sure to modify the [connection.js](Unsolved/app/config/connection.js) file to include your MySQL user/database information.

* In the [api-routes.js](Unsolved/app/routes/api-routes.js) file, add the following Sequelize methods:

  * Add a Sequelize `findAll()` method inside the GET route which finds all of the todos and returns them to the user as JSON.

  * Add a Sequelize `create()` method to the POST route to save a new todo to the database using the data sent to the server in `req.body`.

  * Add a Sequelize `destroy()` method to the DELETE route to delete the todo with the id available to us in `req.params.id`.

  * Add a Sequelize `update()` method to the PUT route to update a todo with the new todo data sent to the server in `req.body`.

* To test if this worked, open your terminal and run `npm start` and navigate to `localhost:3001` in your browser. If you are able to save new todos, as well as update and delete todos, you were successful.

## Hint(s)

* You may need to read the Sequelize documentation on the [findAll()](http://docs.sequelizejs.com/class/lib/model.js~Model.html#static-method-findAll), [create()](http://docs.sequelizejs.com/class/lib/model.js~Model.html#static-method-create), [update()](http://docs.sequelizejs.com/class/lib/model.js~Model.html#static-method-update), [destroy()](http://docs.sequelizejs.com/class/lib/model.js~Model.html#static-method-destroy) methods, as well as [how to apply the "where" clause](https://sequelize.org/master/manual/model-querying-basics.html#applying-where-clauses).