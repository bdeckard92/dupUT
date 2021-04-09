// Define class using class declaration
class Toy {
    // Initializes object
    constructor(name, price, count) {
      this.name = name;
      this.price = price;
      this.count = count;
    }
  }
  // Creates two new instances of toy: Action Figure and Rare Toy
  const toys = [
    // New instance of will have the name 'Action Figure', price of 14.99 and count of 5
    new Toy("Action Figure", 14.99, 5),
    new Toy("Rare Toy", 17.99, 1)
  ];
  
  module.exports = {
    Toy,
    toys
  };
