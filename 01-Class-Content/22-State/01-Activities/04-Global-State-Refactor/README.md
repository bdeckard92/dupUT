# Global State Refactor

In this activity, you will refactor the components to read state data from the store and dispatch updates to it. 

## Instructions

* **Note** You will be using one web application, [Book-Lounge](../Book-Lounge), for all of our activities today.

* Copy the [src](Unsolved/src) folder and paste it into the [Book-Lounge](../Book-Lounge) app. 

* Take a moment to think about which components need to access the global state. Look at [App.js](../Book-Lounge/client/src/App.js) to see where the prop drilling is happening.

* Open [Header.js](../Book-Lounge/client/src/components/Header.js) and update the code to use global state. Use the comments to guide you.

* Open [Detail.js](../Book-Lounge/client/src/pages/Detail.js) and update the code to use the global state. Use the comments to guide you.

  * For the `useEffect` Hook, the return statement has been provided for you.
  
  * Once the `data` is returned from the `useQuery()` but before there is a `currentBook` set, execute the `dispatch()` function to trigger the `UPDATE_BOOKS` action with the books from the `data`. 

  * Once the books have been loaded, `currentBook` will have a value of a book. That should then trigger the `UPDATE_CURRENT_BOOK` action with the `currentBook`.

* Open [App.js](../Book-Lounge/client/src/App.js) and remove the prop drilling.

* Navigate to [01-Activities/Book-Lounge](../Book-Lounge) and start the app in dev mode by running `npm start` from your command line.

* Check out the application running on <http://localhost:3000> in your browser. Everything should work as before, but now using global state!

* Press `CTRL + C` to stop the server before moving on to the next activity.

## Hint(s)

* Check out [BookList.js](../Book-Lounge/client/src/pages/BookList.js) for an example of refactoring already done for you.

* You can refer to the [React Docs on useEffect](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects)
