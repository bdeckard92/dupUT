// Define class using class declaration
class Store {
  // Initializes object created with class
  constructor(name, stock) {
    // The 'this' keyword refers to the current object
    this.name = name;
    this.stock = stock;
    this.revenue = 0;
  }
  // Method that holds functionality needed to process product sales within store
  processProductSale(name) {
    this.stock.forEach(item => {
      if (item.name === name) {
        if (item.count > 0) {
          item.count--;
          this.revenue += item.price;
          console.log(`Purchased ${item.name} for ${item.price}`);
        } else {
          console.log(`Sorry, ${item.name} is out of stock!`);
        }
      }
    });
  }

  // Method to replenish stock
  replenishStock(name, count) {
    this.stock.forEach(item => {
      if (item.name === name) {
        item.count += count;
        console.log(`Replenished ${item.name} by ${item.count}`);
      }
    });
  }

  // Method logs revenue
  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }

  // Method to provide welcome to store
  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }
}

module.exports = Store;
