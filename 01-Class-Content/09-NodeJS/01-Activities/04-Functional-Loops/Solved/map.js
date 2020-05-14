const originalArray = [1, 7, 4, 5, 10];

const doubledArray = originalArray.map(function(data) {
  return data * 2;
});

console.log(originalArray);
console.log(doubledArray);

// 1. A map that triples the originalArray and sets the result equal to a new array `tripledArray`

const tripledArray = originalArray.map(data => data * 3);
console.log(tripledArray);

// 2. A map that takes the originalArray and returns a new array `oddOrEven` containing the text "even" if the number is even and the text "odd" if the number is odd

const oddOrEven = originalArray.map(num => (num % 2 === 0 ? 'even' : 'odd'));
console.log(oddOrEven);

// Bonus: Use arrow functions as callbacks!
