const Child = require('./child');
const DayCare = require('./dayCare');

const child1 = new Child('Amir', 3);
const child2 = new Child('Zhang Wei', 1);
const child3 = new Child('Kyle', 2);

const dayCare = new DayCare();

dayCare.addChild(child1);
dayCare.addChild(child2);
dayCare.addChild(child3);

console.log(dayCare.children);
console.log('\n');

const child4 = new Child('Rosie', 1);
dayCare.addChild(child4);

// Capacity reached, Rosie not added
console.log(dayCare.children);
console.log('\n');

dayCare.pickupChild('Amir');

// Amir is no longer at daycare
console.log(dayCare.children);
console.log('\n');

// Able to add Rosie now
dayCare.addChild(child4);
console.log(dayCare.children);
console.log('\n');

dayCare.pickupChild('Zhang Wei');

// Jan not added, she's above the age limit
const child5 = new Child('Jan', 20);
dayCare.addChild(child5);
console.log(dayCare.children);
