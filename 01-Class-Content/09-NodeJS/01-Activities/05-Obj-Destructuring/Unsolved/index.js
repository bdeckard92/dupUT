// 1. Object
const arya = {
  first: "Arya",
  last: "Stark",
  origin: "Winterfell",
};

// Your code here

console.log(first); // <= Arya
console.log(origin); // <= Winterfell

// 2. Nested Object
const john = {
  first: "John",
  last: "Snow",
  title: "Prince",
  family: {
    brothers: {
      brother1: "Rob Stark",
      brother2: "Rickon Stark"
    },
    sisters: {
      sister1: "Arya Stark",
      sister2: "Sansa Stark"
    }
  }
};

// Your code here

console.log(brother1); // <= Rob Stark
console.log(brother2); // <= Rickon Stark

// 3. Arrays
const characters = ["Ned Stark", "The Quiet Wolf", "House Stark"];

// Your code here

console.log(name, alias, allegiance); // <= Ned Stark The Quiet Wolf House Stark

// 4. Strings
const skills = "male, Baratheon, Cersei";

// Your code here
// Hint: set variables and split

console.log(gender, family, spouse); // <= male Baratheon Cersei
