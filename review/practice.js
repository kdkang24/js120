var animal = {
  type: 'mammal',
  breathe: function() { 
    console.log("I'm breathing");
  },
}

var dog = Object.create(animal);

// console.log(dog);                      // {}
// console.log(dog.type);                 // "mammal"
// console.log(dog.__proto__);            // { type: 'mammal', breathe: ƒ }
// console.log(dog.__proto__ === animal); // true
// console.log(Object.getPrototypeOf(dog)); // { type: 'mammal', breathe: ƒ }
// console.log(Object.getPrototypeOf(dog) === animal); // true
console.log(dog.prototype);

let a = {
  foo: 1,
};

// console.log(Object.getPrototypeOf(a));
// console.log(Object.getPrototypeOf(a) === Object.prototype);

// Functions as return values
function createGreeter(language) {
  switch (language) {
    case 'en':
      return function() {
        console.log('Hello!');
      };
    case 'es':
      return function() {
        console.log('Hola!');
      };
    case 'fr':
      return function() {
        console.log('Bonjour!');
      };
  }
}

let greeterEs = createGreeter('es');
greeterEs(); // logs 'Hola!'
greeterEs(); // logs 'Hola!'
greeterEs(); // logs 'Hola!'

let greeterEn = createGreeter('en');
greeterEn(); // logs 'Hello!'



// Prototypal inheritance / object inheritance
let humanPrototype = {
  myName() { return this.name; },
  myAge() { return this.age; },
};

let personPrototype = Object.create(humanPrototype);
personPrototype.toString = function() {
  return `My name is ${this.myName()} and I'm ${this.myAge()} years old.`;
};

let will = Object.create(personPrototype);
will.name = 'William';
will.age = 28;
will.toString(); // => My name is William and I'm 28 years old.


//Pseudo-classical inheritance OR constructor/prototype pattern
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.toString = function() {
  return `My name is ${this.name} and I'm ${this.age} years old.`;
};