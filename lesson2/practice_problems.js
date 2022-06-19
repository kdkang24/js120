// PROBLEM 4
/*
Write a function that searches the prototype chain of an object for a given property and assigns it a new value.
If the property does not exist in any of the prototype objects, the function should do nothing
*/

let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

// console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(fooC))) === Object.prototype); // Object prototype is second to last in the chain
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(fooC)))) === null); // Final prototype is null

function assignProperty(obj, prop, value) {
  while (obj !== null) {
    if (obj.hasOwnProperty(prop)) {
      obj[prop] = value;
      break;
    }

    obj = Object.getPrototypeOf(obj);
  }
}

// assignProperty(fooC, "bar", 2);
// console.log(fooA.bar); // 2
// console.log(fooC.bar); // 2

// assignProperty(fooC, "qux", 3);
// console.log(fooA.qux); // undefined
// console.log(fooC.qux); // undefined
// console.log(fooA.hasOwnProperty("qux")); // false
// console.log(fooC.hasOwnProperty("qux")); // false

// PROBLEM 5
let bareObject = Object.create(null);

console.log(Object.getPrototypeOf(bareObject));