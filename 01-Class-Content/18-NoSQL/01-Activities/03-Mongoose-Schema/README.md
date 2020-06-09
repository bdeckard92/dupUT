# Mongoose Schema

In this activity you will create a user schema with Mongoose.

## Instructions

* Open [userModel.js](Unsolved/userModel.js) and add four attributes to your schema:

  * username: A string that will be be required, and also trimmed.

  * password: A string that will be required, trimmed, and at least 6 characters.

  * email: A string that must be a valid email address and unique in our collection.

  * userCreated: A date that will default to the current date.

## 💡 Hint(s)

* The regex for checking if a string is an email is: `/.+\@.+\..+/`

## 🏆 Bonus 

* Insert five more documents with one command. Use [https://docs.mongodb.com/manual/tutorial/query-documents/](https://docs.mongodb.com/manual/tutorial/query-documents/) to see how you can accomplish this.
