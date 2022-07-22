// Problem 1
const walkMixin = {
  walk() {
    return "Let's go for a walk!";
  }
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}

Object.assign(Cat.prototype, walkMixin);

// let kitty = new Cat("Sophie");
// console.log(kitty.greet()); // Hello! My name is Sophie!
// console.log(kitty.walk()); // Let's go for a walk!

// Problem 2
const swimMixin = {
  swim() {
    return `${this.name} is swimming.`;
  }
};

class Fish {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(Fish.prototype, swimMixin);

class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log('Woof!');
  }
}

class Maltese extends Dog {
  constructor(name) {
    super(name);
  }
}
Object.assign(Maltese.prototype, swimMixin);

// let dog1 = new Maltese("Buddy");
// let fish1 = new Fish("Nemo");
// let dog2 = new Dog("Riley");

// console.log(dog1.swim());
// console.log(fish1.swim());
// console.log(dog1.bark());
// console.log(dog2.bark());

// console.log(Object.getPrototypeOf(Maltese) === Dog);
// console.log(Object.getPrototypeOf(dog1));

// Problem 3

const towMixin = {
  tow() {
    return "I can tow a trailer!";
  }
};

class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year) {
    super(year);
    // Mixin method 1: assign `this` to the mixin inside constructor function
    // This is less memory efficient
    // Object.assign(this, towMixin);
  }
}

// Mixin method 2: Assign prototype to the mixin outside the class
// Recommended method
Object.assign(Truck.prototype, towMixin);

class Car extends Vehicle {}

let truck = new Truck(2002);
console.log(truck.year);
console.log(truck.tow());

let car = new Car(2015);
console.log(car.year);