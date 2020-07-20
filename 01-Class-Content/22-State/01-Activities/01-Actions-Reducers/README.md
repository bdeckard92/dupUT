# Actions and Reducers

In this activity, you will create actions and reducers in order to implement a global store for the `Book-Lounge` app.

## Instructions

* **Note** You will be using the same React application, [Book-Lounge](../Book-Lounge), for all of our activities today.

* Copy the [src](Unsolved/src) folder and paste it into the [Book-Lounge](../Book-Lounge) app. 

* Navigate to [01-Activities/Book-Lounge](../Book-Lounge) and start the app in dev mode by running `npm start` from your command line.

* Check out the application running on <http://localhost:3000> in your browser. 

* Open [App.js](../Book-Lounge/src/App.js) and notice how we are managing the state and what components are using it. 

* In the [utils](../Book-Lounge/src/utils) folder, create two files: `actions.js` and `reducers.js`.

  * In `actions.js`, define two actions: `UPDATE_BOOKS` and `UPDATE_CURRENT_BOOK`.

  * In `reducers.js`, create a function called `reducer()` that takes in the `state` and an `action`.

    * Remember to import the two actions we created along with `useReducer` from `react` on top of the page.

    * Use a `switch` statement to compare the `action.type` with our two actions. 

    * For `UPDATE_BOOKS`, return a new object with a copy of the `state` argument and set the `books` key to a new array with the `action.books` value spread across it.

    * For `UPDATE_CURRENT_BOOK`, return a new object with a copy of the `state` and set the `currentBook` key to `action.currentBook`.

    * Export the function `useBookReducer()` that utilizes the `useReducer()` Hook to initialize our global state object and update the state by running it through our `reducer()` function.

* Check the application running the browser to make sure everything still compiles and functions correctly. 

* Press `CTRL + C` to stop the server before moving on to the next activity.

## Hint(s)

* You can refer to the [React Docs on useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
