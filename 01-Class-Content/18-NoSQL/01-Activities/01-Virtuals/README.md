# Virtuals

In this activity, you will use virtuals to add a property to a user that won't be stored in the database. 

## Instructions

* Open [userModel.js](Unsolved/userModel.js) and do the following:

  * Create a virtual property named `username` that will be taken from the front part of the email address (before the `@` symbol)

  * Remember to set the `toJSON` schema option to `{ virtuals: true }` in order to include virtuals in `res.json()`

## 💡 Hint(s)

* You can use `slice()` to get the front part of the email address.