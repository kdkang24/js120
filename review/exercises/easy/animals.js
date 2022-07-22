// Class
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
    super(name, age, 4, 'cat', status);
  }

  introduce() {
    return `${super.introduce()} Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, 'dog', status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}! Woof, woof!`;
  }
}

console.log('\nClass');
let cat = new Cat("Pepe", 2, "happy");
let dog = new Dog("Riley", 3, "chill", "Kevin");
console.log(cat.introduce());
console.log(dog.introduce());
console.log(dog.greetMaster());

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

Object.setPrototypeOf(CatConstructor.prototype, AnimalConstructor.prototype);

CatConstructor.prototype.introduce = function() {
  return `${AnimalConstructor.prototype.introduce.call(this)} Meow meow!`;
};

function DogConstructor(name, age, status, master) {
  AnimalConstructor.call(this, name, age, 4, 'dog', status);
  this.master = master;
}

Object.setPrototypeOf(DogConstructor.prototype, AnimalConstructor.prototype);

DogConstructor.prototype.greetMaster = function() {
  return `Hello ${this.master}! Woof, woof!`;
};

console.log('\nConstructor');
let cat1 = new CatConstructor("Pepe", 2, "happy");
let dog1 = new DogConstructor("Riley", 3, "chill", "Kevin");
console.log(cat1.introduce());
console.log(dog1.introduce());
console.log(dog1.greetMaster());

// OLOO
let animalPrototype = {
  init(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
    return this;
  },

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  }
};

let catPrototype = Object.create(animalPrototype);
catPrototype.init = function(name, age, status) {
  animalPrototype.init.call(this, name, age, 4, 'cat', status);
  return this;
};

catPrototype.introduce = function() {
  return `${animalPrototype.introduce.call(this)} Meow meow!`;
};

let dogPrototype = Object.create(animalPrototype);
dogPrototype.init = function(name, age, status, master) {
  animalPrototype.init.call(this, name, age, 4, 'dog', status);
  this.master = master;
  return this;
};

dogPrototype.greetMaster = function() {
  return `Hello ${this.master}! Woof, woof!`;
};

console.log('\nOLOO');
let cat2 = Object.create(catPrototype).init("Pepe", 2, "happy");
console.log(cat2.introduce());

let dog2 = Object.create(dogPrototype).init("Riley", 3, "chill", "Kevin");
console.log(dog2.introduce());
console.log(dog2.greetMaster());

// Factory Function
function createAnimal(name, age, legs, species, status) {
  return {
    name,
    age,
    legs,
    species,
    status,

    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
    }
  };
}

function createCat(name, age, status) {
  let cat = createAnimal(name, age, 4, 'cat', status);
  cat.introduce = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}. Meow meow!`;
  };
  return cat;
}

function createDog(name, age, status, master) {
  let dog = createAnimal(name, age, 4, 'dog', status);
  dog.master = master;
  dog.greetMaster = function() {
    return `Hello ${this.master}! Woof, woof!`;
  };
  return dog;
}

console.log('\nFactory Function');
let cat3 = createCat('Pepe', 2, 'happy');
let dog3 = createDog('Riley', 3, 'chill', 'Kevin');

console.log(cat3.introduce());

console.log(dog3.introduce());
console.log(dog3.greetMaster());
