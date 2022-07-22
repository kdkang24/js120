function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  Dog.allDogs.push(this);
}

//Static properties
Dog.species = "Canis lupus";
Dog.allDogs = [];

let riley = new Dog('Riley', 'Jindo', 25);

console.log(`Dogs belong to the species ${Dog.species}`);
console.log(Dog.allDogs);

//Static methods
Dog.showSpecies = function() {
  console.log(`Dogs belong to the species ${Dog.species}`);
};

Dog.showSpecies();