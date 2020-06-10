# Mongoose CRUD

In this activity, you will create, update, and delete notes from the database using Mongoose. 

## Instructions

* Open [note-model.js](Unsolved/note-model.js) to see the Note schema.

* Open [server.js](Unsolved/server.js) and modify the following routes:

  * In the POST route to `/submit`, create a new note in the database's collection.

  * In the GET route to `/all`, retrieve all notes in the collection.

  * In the POST route to `/update/:id`, update one note by its ObjectId, `_id`.

  * In the DELETE route to `/delete/:id`, delete one note by its ObjectId, `_id`.

* To test it out, run `npm install` and `npm start` in your command line to start the server.

  * Open Insomnia and make a POST request to `/submit` with data for a new note in JSON format, i.e. 

  ```js
  {
    "title": "Post 1",
    "note": "Here is Post 1."
  }
  ```

  * Now make a GET request to `/all`, POST request to `/update/:id`, and DELETE request to `/delete/:id` to check the rest of your routes.

## Hint(s)

* You can refer to the Mongoose docs on [queries](https://mongoosejs.com/docs/queries.html).