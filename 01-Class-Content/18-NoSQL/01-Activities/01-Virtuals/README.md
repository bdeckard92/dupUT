# Virtuals

In this activity, you will use Mongoose virtuals to add a property that won't be stored in the database to a user. 

## Instructions

* Open [userModel.js](Unsolved/userModel.js) and do the following:

  * Create a virtual property named `username` that will be taken from the front part of the email address (before the `@` symbol)

  * Remember to set the `toJSON` schema option to `{ virtuals: true }` in order to include virtuals in `res.json()`

* To test it out, run `npm install` and `npm start` in your command line to start the server.

* Open Insomnia and make a POST request to `/submit` with data for a new user in JSON format, i.e.

  ```js
  {
    "firstName": "Jane",
    "lastName": "Doe",
    "password": "Password123",
    "email": "janedoe@email.com"
  }
  ```

  * You should see the response in JSON that includes a `username` virtual property.

  * If you make a few more users and then make a GET request to `/users` in Insomnia, you should see all of the users in the database with `username` as a virtual property.

## 💡 Hint(s)

* You can use `slice()` or `split()` to get the front part of the email address.