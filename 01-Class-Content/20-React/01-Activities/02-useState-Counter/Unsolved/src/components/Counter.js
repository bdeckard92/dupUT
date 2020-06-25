// Import useState Hook from React
import React from 'react';

function Counter() {
  // Call the useState Hook directly inside our component
  // Declare a new state variable, called "count", and set it to 0
  // YOUR CODE HERE
  //

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      <div className="card-body">
        <p className="card-text">Click Count: {count}</p>
        {/* When the button is clicked, we call setCount with the incremented value of count */}
        <button className="btn btn-primary">Increment</button>{' '}
        {/* When the button is clicked, we call setCount with the decremented value of count */}
        <button className="btn btn-danger">Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
