// with Classes
class Vehicle {
  constructor(year) {
    this.year = year;
  }

  startEngine() {
    return 'Ready to go!';
  }
}

class Truck extends Vehicle {
  constructor(year, bedType) {
    super(year);
    this.bedType = bedType;
    this.startEngine();
  }

  startEngine(speed) {
    return `${super.startEngine()} Drive ${speed}, please!`;
  }
}

class Car extends Vehicle {}

// let truck = new Truck(2003, 'Short');
// console.log(truck.year); // 2003
// console.log(truck.bedType); // Short

// let car = new Car(2015);
// console.log(car.year); // 2015

// let truck1 = new Truck();
// console.log(truck1.startEngine('fast'));

// let truck2 = new Truck();
// console.log(truck2.startEngine('slow'));


// with Constructors
function VehicleConstructor(year) {
  this.year = year;

  // this.startEngine = function() {
  //   return 'Ready to go!';
  // };
}

VehicleConstructor.prototype.startEngine = function() {
  return 'Ready to go!';
};

function TruckConstructor(year, bedType) {
  VehicleConstructor.call(this, year);
  this.bedType = bedType;
}

// Object.setPrototypeOf(TruckConstructor, VehicleConstructor);
// Object.setPrototypeOf(TruckConstructor.prototype, VehicleConstructor.prototype);
// Object.setPrototypeOf(TruckConstructor.prototype, VehicleConstructor);
// Object.setPrototypeOf(TruckConstructor, VehicleConstructor.prototype);

TruckConstructor.prototype.startEngine = function(speed) {
  return VehicleConstructor.prototype.startEngine() + ` Drive ${speed}, please!`;
};

let conTruck = new TruckConstructor(2003, 'Short');
console.log(conTruck.year);
console.log(conTruck.bedType);
console.log(conTruck.startEngine('fast'));
console.log(conTruck.startEngine('slow'));
console.log(Object.getPrototypeOf(TruckConstructor) === VehicleConstructor);
console.log(Object.getPrototypeOf(TruckConstructor.prototype) === VehicleConstructor);
console.log(Object.getPrototypeOf(TruckConstructor) === VehicleConstructor.prototype);
console.log(TruckConstructor.prototype.constructor.name);


// OLOO