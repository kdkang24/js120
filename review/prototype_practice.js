// function doSomething() {}
// doSomething.prototype.foo = 'bar';
// console.log(doSomething.prototype);
// console.log(Object.getPrototypeOf(doSomething));

// const doSomeInstancing = new doSomething();
// doSomeInstancing.prop = 'some value'; // add a property onto the object
// console.log(doSomeInstancing);


//  It does not matter how you declare the function; a
//  function in JavaScript will always have a default
//  prototype property — with one exception: an arrow
//  function doesn't have a default prototype property:
// const doSomethingFromArrowFunction = () => {};
// console.log(doSomethingFromArrowFunction.prototype);


// Constructor
function AnimalConstructor(name, age, legs, species, status) {
  this.name = name;
  this.age = age;
  this.legs = legs;
  this.species = species;
  this.status = status;
}

AnimalConstructor.prototype.introduce = function() {
  return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
};

function CatConstructor(name, age, status) {
  AnimalConstructor.call(this, name, age, 4, 'cat', status);
}

// Object.setPrototypeOf(CatConstructor.prototype, AnimalConstructor.prototype);
CatConstructor.prototype = Object.create(AnimalConstructor.prototype);

CatConstructor.prototype.introduce = function() {
  return `${AnimalConstructor.prototype.introduce.call(this)} Meow meow!`;
};

function DogConstructor(name, age, status, master) {
  AnimalConstructor.call(this, name, age, 4, 'dog', status);
  this.master = master;
}

// Object.setPrototypeOf(DogConstructor.prototype, AnimalConstructor.prototype);
DogConstructor.prototype = Object.create(AnimalConstructor.prototype);

DogConstructor.prototype.greetMaster = function() {
  return `Hello ${this.master}! Woof, woof!`;
};

console.log('\nConstructor');
let cat1 = new CatConstructor("Pepe", 2, "happy");
let dog1 = new DogConstructor("Riley", 3, "chill", "Kevin");
// console.log(cat1.introduce());
// console.log(dog1.introduce());
// console.log(dog1.greetMaster());
console.log(CatConstructor.prototype.constructor);
