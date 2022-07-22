const Speed = {
  goFast() {
    // this.constructor.name references the name of the constructor function
    console.log(`I'm a ${this.constructor.name} and going super fast!`);
  }
};

class Car {
  goSlow() {
    console.log(`I'm safe and driving slow.`);
  }
}

class Truck {
  goVerySlow() {
    console.log(`I'm a heavy truck and like going very slow.`);
  }
}

Object.assign(Car.prototype, Speed);
Object.assign(Truck.prototype, Speed);

// Verification
// let car = new Car();
// let truck = new Truck();

// car.goFast();
// truck.goFast();

// // Using the 'in' operator to check
// console.log('goFast' in car);  // => true
// console.log('goFast' in truck); // => true

const Wheeled = {
  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  },

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }
};

class Vehicle {
  constructor(kmTravelledPerLiter, fuelCapInLiter) {
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }

  range() {
    return this.fuelCap *  this.fuelEfficiency;
  }
}

class Auto extends Vehicle {
  constructor(tirePressure) {
    // the array represents tire pressure for four tires
    super(50, 25.0);
    this.tirePressure = tirePressure;
  }
}
Object.assign(Auto.prototype, Wheeled);

class Motorcycle extends Vehicle {
  constructor(tirePressure) {
    // array represents tire pressure for two tires
    super(80, 8.0);
    this.tirePressure = tirePressure;
  }
}
Object.assign(Motorcycle.prototype, Wheeled);

class Catamaran extends Vehicle {
  constructor(propellerCount, hullCount) {
    // catamaran specific logic
    super(20, 100.0);
    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
  }
}

let auto = new Auto([30, 30, 32, 32]);
let bike = new Motorcycle([20, 20]);
let boat = new Catamaran(2, 2);

console.log(Object.getPrototypeOf(Auto));
// console.log(auto.tirePressure(0)); // 30
// console.log(bike.tirePressure(0)); // 20
// console.log(boat.range()); // 2000

console.log('tirePressure' in auto);