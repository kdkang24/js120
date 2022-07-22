// Class
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  info() {
    return `${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(make, model) {
    super(make, model);
  }

  getWheels() {
    return 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model) {
    super(make, model);
  }

  getWheels() {
    return 2;
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model);
    this.payload = payload;
  }

  getWheels() {
    return 6;
  }
}

console.log('\nClass');
let car = new Car('Toyota', 'Sienna');
let bike =  new Motorcycle('Kawasaki', 'Ninja');
let truck =  new Truck('Ford', 'F-150', 'rocks');

console.log(car.info());
console.log(car.getWheels());
console.log(bike.info());
console.log(bike.getWheels());
console.log(truck.info());
console.log(truck.getWheels());
console.log(truck.payload);


// Constructor
console.log('\nConstructor');
function VehicleConstructor(make, model) {
  this.make = make;
  this.model = model;
}

VehicleConstructor.prototype.info = function() {
  return `${this.make} ${this.model}`;
};

function CarConstructor(make, model) {
  VehicleConstructor.call(this, make, model);
}

CarConstructor.prototype.getWheels = function() {
  return 4;
};

Object.setPrototypeOf(CarConstructor.prototype, VehicleConstructor.prototype);

function MotorcycleConstructor(make, model) {
  VehicleConstructor.call(this, make, model);
}

MotorcycleConstructor.prototype.getWheels = function() {
  return 2;
};

Object.setPrototypeOf(MotorcycleConstructor.prototype, VehicleConstructor.prototype);

function TruckConstructor(make, model, payload) {
  VehicleConstructor.call(this, make, model);
  this.payload = payload;
}

TruckConstructor.prototype.getWheels = function() {
  return 6;
};

Object.setPrototypeOf(TruckConstructor.prototype, VehicleConstructor.prototype);

let car2 = new CarConstructor('Toyota', 'Sienna');
let bike2 = new MotorcycleConstructor('Kawasaki', 'Ninja');
let truck2 = new TruckConstructor('Ford', 'F-150', 'rocks');

console.log(car2.info());
console.log(car2.getWheels());
console.log(bike2.info());
console.log(bike2.getWheels());
console.log(truck2.info());
console.log(truck2.getWheels());
console.log(truck2.payload);


// OLOO
let vehiclePrototype = {
  init(make, model) {
    this.make = make;
    this.model = model;
    return this;
  },

  info: function() {
    return `${this.make} ${this.model}`;
  },
};

let carPrototype = Object.create(vehiclePrototype);
carPrototype.getWheels = function() {
  return 4;
};

let motorcyclePrototype = Object.create(vehiclePrototype);
motorcyclePrototype.getWheels = function() {
  return 2;
};

let truckPrototype = Object.create(vehiclePrototype);
truckPrototype.init = function(make, model, payload) {
  vehiclePrototype.init.call(this, make, model);
  this.payload = payload;
  return this;
};

truckPrototype.getWheels = function() {
  return 6;
};

console.log('\nOLOO');
let car3 = Object.create(carPrototype).init('Toyota', 'Sienna');
let bike3 = Object.create(motorcyclePrototype).init('Kawasaki', 'Ninja');
let truck3 = Object.create(truckPrototype).init('Ford', 'F-150', 'rocks');

console.log(car3.info());
console.log(car3.getWheels());
console.log(bike3.info());
console.log(bike3.getWheels());
console.log(truck3.info());
console.log(truck3.getWheels());
console.log(truck3.payload);

// Factory Function
function createVehicle(make, model) {
  return {
    make,
    model,

    info() {
      return `${this.make} ${this.model}`;
    },
  };
}

function createCar(make, model) {
  let car = createVehicle(make, model);
  car.getWheels = function() {
    return 4;
  };
  return car;
}

function createMotorcycle(make, model) {
  let motorcycle = createVehicle(make, model);
  motorcycle.getWheels = function() {
    return 2;
  };
  return motorcycle;
}

function createTruck(make, model, payload) {
  let truck = createVehicle(make, model);
  truck.payload = payload;
  truck.getWheels = function() {
    return 6;
  };
  return truck;
}

console.log('\nFactory Function');
let car4 = createCar('Toyota', 'Sienna');
let bike4 =  createMotorcycle('Kawasaki', 'Ninja');
let truck4 =  createTruck('Ford', 'F-150', 'rocks');

console.log(car4.info());
console.log(car4.getWheels());
console.log(bike4.info());
console.log(bike4.getWheels());
console.log(truck4.info());
console.log(truck4.getWheels());
console.log(truck4.payload);