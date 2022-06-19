//PROBLEM 1
// console.log("Hello".constructor.name);
// console.log([1,2,3].constructor.name);
// console.log({name: 'Srdjan'}.constructor.name);

//PROBLEM 2 - 8
class Cat {
  //The constructor method executes the statements contained within it
  //when a new object is initialized
  constructor(name) {
    this.name = name;
  }

  static genericGreeting() {
    console.log("Hello! I'm a cat!");
  }

  greet() {
    console.log(`Hello! My name is ${this.name}!`);
  }

  personalGreeting() {
    console.log(`Hello! My name is ${this.name}!`);
  }

  rename(newName) {
    this.name = newName;
  }
}


let kitty = new Cat("Sophie");
Cat.genericGreeting();
kitty.personalGreeting();

//The "new" keyword turns the function call into a constructor call
// let kitty = new Cat('Sophie');
// kitty.greet();

// let kitty = new Cat('Sophie');
// console.log(kitty.name); // Sophie
// kitty.rename('Chloe');
// console.log(kitty.name); // Chloe

//PROBLEM 7
class Person {
  constructor(name = 'John Doe') {
    this.name = name;
  }
}

let person1 = new Person();
let person2 = new Person("Pepe");

// console.log(person1.name); // John Doe
// console.log(person2.name); // Pepe