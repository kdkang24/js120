// Objects Linking to Other Objects

//Define a prototype
let carPrototype = {
  start: function() {
    this.started = true;
  },

  stop: function() {
    this.started = false;
  },
  // init to pass initial arguments
  init(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    // return a reference to the created object
    return this;
  },
};

//Chain together Object.create() and init to instantiate new object
let car1 = Object.create(carPrototype).init('Toyota', 'Corolla', 2016);