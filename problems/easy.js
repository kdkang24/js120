//PROBLEM 1
class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getArea() {
    return this.width * this.length;
  }
}

// let rect = new Rectangle(4, 5);

// console.log(rect.getWidth()); // 4
// console.log(rect.getLength()); // 5
// console.log(rect.getArea()); // 20

//PROBLEM 2
class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

// let square = new Square(5);
// console.log(`area of square = ${square.getArea()}`); // area of square = 25
// console.log(square.getWidth());
// console.log(square.getLength());
// console.log(Object.getPrototypeOf(square)); // Rectangle {}

//PROBLEM 3
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   speaks() {
//     return `${this.name} says meowwww.`;
//   }
// }

// let fakeCat = Object.create(Cat.prototype);
// console.log(fakeCat instanceof Cat); // logs true
// console.log(fakeCat.name);           // logs undefined
// console.log(fakeCat.speaks());       // logs undefined says meowwww.

//PROBLEM 4
// class Pet {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Cat extends Pet {
//   constructor(name, age, furColor) {
//     super(name, age);
//     this.furColor = furColor;
//   }

//   info() {
//     return `My cat ${this.name} is ${this.age} years old and has ${this.furColor} fur.`;
//   }
// }

// let pudding = new Cat('Pudding', 7, 'black and white');
// let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

// console.log(pudding.info());
// console.log(butterscotch.info());

//PROBLEM 5
class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }

  introduce() {
    return super.introduce() + ` Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}! Woof, woof!`;
  }
}


// let cat = new Cat("Pepe", 2, "happy");
// console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");//Logs true
// console.log(cat.legs);
// console.log(cat.species);


// let dog = new Dog("Riley", 3, "chill", "Kevin");
// console.log(dog.introduce() === "Hello, my name is Riley and I am 3 years old and chill."); //Logs true
// console.log(dog.greetMaster() === "Hello Kevin! Woof, woof!" ); //Logs true
// console.log(dog.legs);
// console.log(dog.species);

//PROBLEM 6
class Vehicle {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  info() {
    return `${this.make} ${this.model}`;
  }

  getWheels() {
    return this.wheels;
  }
}

class Car extends Vehicle {
  constructor(make, model) {
    super(make, model, 4);
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model) {
    super(make, model, 2);
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model, 6);
    this.payload = payload;
  }
}

let car = new Car('Toyota', 'Sienna');
console.log(car.make);
console.log(car.model);
console.log(car.wheels);

let truck = new Truck('Ford', 'Raptor', 'trailer');
console.log(truck.wheels);
console.log(truck.payload);