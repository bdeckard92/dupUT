# Friends List

In this activity, you will map through `friendsList` and render a `FriendCard` component for each friend. You will also add functionality to remove a `FriendCard` from the page.

## Instructions

* **Note** You will be using the same React application `reactpractice` for all of our activities today. Stop the server if it is still running.

* Copy the [Unsolved/src](Unsolved/src) folder and paste it into the React application. 

* Navigate to [01-Activities/reactpractice](../reactpractice) and start the app in dev mode by running `npm start` from your command line.

* Check out the application running on <http://localhost:3000> in your browser. Right now, you can't see any `FriendCard` rendered on the page.

* Open [App.js](../reactpractice/src/App.js) and do the following:
  
  * Import the `useState` Hook from React. 
  
  * Using `useState`, declare a new state variable `friendsList` and set the initial value to the imported `friends` array from `friends.json`. Name the returned setter method `setFriendsList`.

  * Add functionality so that when the red X icon on a `FriendCard` is clicked, that `FriendCard` is removed from the page. To do that, create a method `removeFriend` that accepts an `id` parameter and then utilizes the `.filter()` method to create a new array of friends without the passed `id`. Update the state with this new filtered array.

  * Map through `friendsList` to render a `FriendCard` for each friend. Remember to pass the `removeFriend` method into each `FriendCard` along with each property of a `friend`.

* Keep checking the application in your browser as you make the changes.

* Press `CTRL + C` to stop the server.

## Hint(s)

* Check `friends.json` for the properties of a `friend` to pass into `FriendCard`.

* You can refer to the React Docs on [Using the State Hook](https://reactjs.org/docs/hooks-state.html), [Lists and Keys](https://reactjs.org/docs/lists-and-keys.html), and the [MDN Docs on .filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).