# Subdocuments

In this activity, you will create notes as a subdocument array for notebooks.

## Instructions



* To test it out, run `npm install` and `npm start` in your command line to start the server.

* Open Insomnia and make a POST request to `/notebook` with data for a new notebook in JSON format, i.e.

  ```js
  {
    "title": "Notebook 1"
  }
  ```

  * Using the `_id` of the notebook, make a POST request `/:notebookId` with data for a new note in JSON format, i.e.

  ```js
  {
    "notesText": "Here is Note 1"
  }
  ```

  * You should see the note included in the notebook.