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
    return super.startEngine() + ` Drive ${speed}, please!`;
  }
}

class Car extends Vehicle {

}

let truck1 = new Truck();
console.log(truck1.startEngine('fast'));
console.log(`truck1.constructor is ${truck1.constructor}`);
console.log(truck1 instanceof Truck);
console.log(truck1 instanceof Vehicle);

let truck2 = new Truck();
console.log(truck2.startEngine('slow'));

// let car = new Car(2015);
// console.log(car.year); // 2015