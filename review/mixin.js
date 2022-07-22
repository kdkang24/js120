// Mix-in use case

// Swim method defined separately
const Swimmable = {
  swim() {}
}

class Bird {}

// Some birds can fly
class FlyingBird extends Bird {
  fly() {}
}

// Storks can fly
class Stork extends FlyingBird {}

// Parrots can fly
class Parrot extends FlyingBird {}

// Penguins cannot fly, but can swim
class Penguin extends Bird {}
Object.assign(Penguin.prototype, Swimmable);

// Ostriches cannot fly, but can swim
class Ostrich extends Bird {}
Object.assign(Ostrich.prototype, Swimmable);

// Ducks can both swim AND fly
// Duck extends FlyingBird
// Swim method added as mix-in
class Duck extends FlyingBird {}
Object.assign(Duck.prototype, Swimmable);

// Goose same as Duck
class Goose extends FlyingBird {}
Object.assign(Goose.prototype, Swimmable);