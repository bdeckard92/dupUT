# Component Map

In this activity, you will map over a list of groceries and render components from each piece of data.

## Instructions

* **Note** You will be using the same React application, [reactpractice](../reactpractice), for all of our activities today.

* Copy the [Unsolved/src](Unsolved/src) folder and paste it into the React application. 

* Navigate to [01-Activities/reactpractice](../reactpractice) and start the app in dev mode by running `npm start` from your command line.

* Check out the application running on <http://localhost:3000> in your browser. Then take a minute to study the included components:

  * **App.js**: Our application's root component.

  * **List.js**: Responsible for rendering an unordered list from `props`.

* Modify the `List` component so that inside of its `ul` tags, it renders one `li` tag for each item in the array of grocery objects being passed via props. 

  * Each `li` tag should display the `text` property of each grocery object. 
  
  * The `.map()` method should be used for this.

* Check the application in your browser to see all of the groceries listed.

* Press `CTRL + C` to stop the server before moving on to the next activity.

## Hint(s)

* You can refer to the React Docs on [Lists and Keys](https://facebook.github.io/react/docs/lists-and-keys.html) and the MDN Web Docs on [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

## Bonus

* For styling purposes, give each `li` tag a class of `list-group-item`.
