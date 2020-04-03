// 1. Object
const arya = {
  first: "Arya",
  last: "Stark",
  origin: "Winterfell",
};

const { first, last, origin } = arya;
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

const { brother1, brother2 } = john.family.brothers;
console.log(brother1); // <= Rob Stark
console.log(brother2); // <= Rickon Stark

// 3. Arrays
const characters = ["Ned Stark", "The Quiet Wolf", "House Stark"];

const [name, alias, allegiance] = characters;
console.log(name, alias, allegiance); // <= Ned Stark The Quiet Wolf House Stark

// 4. Strings
const skills = "male, Baratheon, Cersei";

const [gender, family, spouse] = skills.split(","); // set variables and split
console.log(gender, family, spouse); // <= male Baratheon Cersei
