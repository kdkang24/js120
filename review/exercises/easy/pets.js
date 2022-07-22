// Class
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cat extends Pet {
  constructor(name, age, color) {
    super(name, age);
    this.animal = 'cat';
    this.color = color;
  }

  info() {
    return `My ${this.animal} ${this.name} is ${this.age} years old and has ${this.color} fur.`;
  }
}

let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log('\nClass');
console.log(pudding.info());
console.log(butterscotch.info());

// Constructor

function PetConstructor(name, age) {
  this.name = name;
  this.age = age;
}

function CatConstructor(name, age, color) {
  PetConstructor.call(this, name, age);
  this.color = color;
}

CatConstructor.prototype.info = function() {
  return `My ${this.animal} ${this.name} is ${this.age} years old and has ${this.color} fur.`;
};

Object.setPrototypeOf(CatConstructor.prototype, PetConstructor.prototype);

let pudding1 = new CatConstructor('Pudding', 7, 'black and white');
let butterscotch1 = new CatConstructor('Butterscotch', 10, 'tan and white');

console.log('\nConstructor');

console.log(pudding1.info());
console.log(butterscotch1.info());

// OLOO

let petPrototype = {
  init(name, age) {
    this.name = name;
    this.age = age;
  }
};

let catPrototype = Object.create(petPrototype);

catPrototype.init = function(name, age, color) {
  petPrototype.init.call(this, name, age);
  this.color = color;
  return this;
};

catPrototype.info = function() {
  return `My ${this.animal} ${this.name} is ${this.age} years old and has ${this.color} fur.`;
};

let pudding2 = Object.create(catPrototype).init('Pudding', 7, 'black and white');
let butterscotch2 = Object.create(catPrototype).init('Butterscotch', 10, 'tan and white');

console.log('\nOLOO');

console.log(pudding2.info());
console.log(butterscotch2.info());

// Factory Function

function createPet(name, age) {
  return {
    name,
    age,
  };
}

function createCat(name, age, color) {
  let cat = createPet(name, age);
  cat.color = color;
  cat.animal = 'cat';
  cat.info = function() {
    return `My ${this.animal} ${this.name} is ${this.age} years old and has ${this.color} fur.`;
  };
  return cat;
}

let pudding3 = createCat('Pudding', 7, 'black and white');
let butterscotch3 = createCat('Butterscotch', 10, 'tan and white');

console.log('\nFactory Function');

console.log(pudding3.info());
console.log(butterscotch3.info());