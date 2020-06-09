# Mongoose Schema

In this activity, you will create a user schema with Mongoose.

## Instructions

* Open [userModel.js](Unsolved/userModel.js) and add four attributes to your schema:

  * username: A string that will be trimmed and required with a custom error message, i.e. 'Username is Required'. 

  * password: A string that will be trimmed, required with a custom error message, and at least 6 characters.

  * email: A string that must be a valid email address and unique in our collection.

  * userCreated: A date that will default to the current date.

* To test it out, run `npm install` and `npm start` in your command line to start the server.

  * Open Insomnia and make a POST request to `/submit` with data for a new user in JSON format, i.e.

  ```js
    {
      "username": "janedoe",
      "password": "Password123",
      "email": "janedoe@email.com"
    }
  ```

  * You should see your new user created in the data returned from our POST request. 

## 💡 Hint(s)

* To check if an email address is valid, you can use `match` which will create a validator that checks if the value matches the given regex, which for checking if a string is an email is: `/.+\@.+\..+/`

* You can refer to the Mongoose docs on [Validations](https://mongoosejs.com/docs/validation.html) or on [String Validators](https://mongoosejs.com/docs/schematypes.html#string-validators)

## 🏆 Bonus 

* Insert five more documents with one command. Use the [MongoDB Manual on Query Documents](https://docs.mongodb.com/manual/tutorial/query-documents/) to see how you can accomplish this.
