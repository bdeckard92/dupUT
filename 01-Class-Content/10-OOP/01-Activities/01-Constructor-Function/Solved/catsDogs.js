// Create a constructor function called `Animal` that takes in two parameters `raining` and `noise`
// Include a function called `makeNoise()`
function Animal(raining, noise) {
  this.raining = raining;
  this.noise = noise;
  this.makeNoise = function() {
    if (this.raining === true) {
      console.log(this.noise);
    }
  };
}

// Creates `dog` and `cat` objects with `raining` and `noise` properties
let dog = new Animal(true, 'Woof!');
let cat = new Animal(false, 'Meow!');

// Calls the `makeNoise()` methods on the `dog` and `cat` objects
dog.makeNoise();
cat.makeNoise();

// Bonus code
cat.raining = true;
cat.makeNoise();
