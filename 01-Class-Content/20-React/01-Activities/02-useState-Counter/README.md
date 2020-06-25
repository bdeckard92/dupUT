# useState Counter

In this activity, you will use the `useState` Hook to declare a state variable and update it by incrementing or decrementing using click handlers on buttons. 

## Instructions

* **Note** You will be using the same React application `reactpractice` for all of our activities today. Stop the server if it is still running.

* Copy the [Unsolved/src](Unsolved/src) folder and paste it into the React application. 

* Navigate to [01-Activities/reactpractice](../reactpractice) and start the app in dev mode by running `npm start` from your command line.

* Check out the application running on <http://localhost:3000> in your browser. 

* In [Counter.js](../reactpractice/src/components/Counter.js), implement the following:

  * Import `useState` Hook from React

  * Inside the `Counter` component, declare a new state variable by calling the `useState` Hook. It returns two values. Name the variable, `count`, and initialize it to zero by passing `0` as the only `useState` argument. The second returned item is a function, which you can name `setCount`.

  * Add a click handler to the two buttons so that when the buttons are clicked, `setCount` is called and `count` is assigned a new incremented or decremented value respectively.

* Check the application in your browser to see if the counter works properly.

## Hint(s)

* You can refer to the React Docs on [Using the State Hook](https://reactjs.org/docs/hooks-state.html).