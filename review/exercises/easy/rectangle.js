// Class
class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getArea() {
    return this.width * this.length;
  }
}

let rect = new Rectangle(4, 5);

console.log('\nClass');
console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

let square = new Square(5);
console.log(`Class: area of square = ${square.getArea()}`); // area of square = 25

// Factory Function
function createRectangle(width, length) {
  return {
    width,
    length,

    getWidth: function() {
      return this.width;
    },

    getLength: function() {
      return this.length;
    },

    getArea: function() {
      return this.width * this.length;
    }
  };
}

let rect1 = createRectangle(4, 5);

console.log('\nFactory Function');
console.log(rect1.getWidth());
console.log(rect1.getLength());
console.log(rect1.getArea());

// Constructor
function RectangleConstructor(width, length) {
  this.width = width;
  this.length = length;

  // These methods should get delegated to the prototype to save memory
  // this.getWidth = function() {
  //   return this.width;
  // };

  // this.getLength = function() {
  //   return this.length;
  // };

  // this.getArea = function() {
  //   return this.width * this.length;
  // };
}

RectangleConstructor.prototype.getWidth = function() {
  return this.width;
};

RectangleConstructor.prototype.getLength = function() {
  return this.length;
};

RectangleConstructor.prototype.getArea = function() {
  return this.width * this.length;
};

function SquareConstructor(side) {
  RectangleConstructor.call(this, side, side);
}

Object.setPrototypeOf(SquareConstructor.prototype, RectangleConstructor.prototype);
//Alternative method of setting prototype
// SquareConstructor.prototype = Object.create(RectangleConstructor.prototype);
SquareConstructor.prototype.constructor = SquareConstructor;


let rect2 = new RectangleConstructor(4, 5);

console.log('\nConstructor');
console.log(rect2.getWidth());
console.log(rect2.getLength());
console.log(rect2.getArea());

let square1 = new SquareConstructor(5);

console.log(`Constructor: area of square = ${square1.getArea()}`); // area of square = 25

// OLOO
let rectanglePrototype = {
  init(width, length) {
    this.width = width;
    this.length = length;
    return this;
  },

  getWidth() {
    return this.width;
  },

  getLength() {
    return this.length;
  },

  getArea() {
    return this.width * this.length;
  }
};

let squarePrototype = Object.create(rectanglePrototype);
squarePrototype.init = function(side) {
  rectanglePrototype.init.call(this, side, side);
  return this;
};

let rect3 = Object.create(rectanglePrototype).init(4, 5);

console.log('\nOLOO');
console.log(rect3.getWidth());
console.log(rect3.getLength());
console.log(rect3.getArea());

let square2 = Object.create(squarePrototype).init(5);

console.log(`OLOO: area of square = ${square2.getArea()}`); // area of square = 25
