/* Object.assign alternative

const mixup = function(target, ...sources) {
  for (let idx = 0; idx < sources.length; idx += 1) {
    for (let key in sources[idx]) {
      if (!(key in target)) { // Object.assign lacks this
        target[key] = sources[idx][key];
      }
    }
  }
  return target;
};
*/

class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}

const walkMixin = {
  walk() {
    return "Let's go for a walk!";
  }
};

Object.assign(Cat.prototype, walkMixin);

// let kitty = new Cat("Sophie");
// console.log(kitty.greet());
// console.log(kitty.walk());

const swimMixin = {
  swim() {
    return `${this.name} is swimming.`;
  }
};

class Fish {
  constructor(name) {
    this.name = name;
    //The line below adds a copy of the mixin directly to each new object
    // Object.assign(this, swimMixin);
  }
}
//It's better to assign mixins to the prototype, like so:
Object.assign(Fish.prototype, swimMixin);

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Maltese extends Dog {
  constructor(name) {
    super(name);
    // Object.assign(this, swimMixin);
  }
}
Object.assign(Maltese.prototype, swimMixin);

// let dog1 = new Maltese("Buddy");
// let fish1 = new Fish("Nemo");

// console.log(dog1.swim());
// console.log(fish1.swim());

const towMixin = {
  tow() {
    return "I can tow a trailer!";
  }
}

class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year) {
    super(year);
    Object.assign(this, towMixin);
  }
}

class Car extends Vehicle {}

let truck = new Truck(2002);
console.log(truck.year);
console.log(truck.tow());

let car = new Car(2015);
console.log(car.year);