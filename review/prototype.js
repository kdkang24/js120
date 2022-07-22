/* eslint-disable max-len */

/*
let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false

function assignProperty(targetObject, prop , value) {
  while (targetObject !== null) {
    if (targetObject.hasOwnProperty(prop)) {
      targetObject[prop] = value;
      break;
    }
    targetObject = Object.getPrototypeOf(targetObject);
  }
}

console.log(Object.getPrototypeOf(fooA)); // Returns [Object: null prototype] {}
console.log(Object.getPrototypeOf(fooB)); // Returns { bar: 1}  (fooA is its prototype)
console.log(Object.getPrototypeOf(fooC)); // Returns {}  (fooB is the prototype and does not have any properties of its own)

console.log(fooA.hasOwnProperty('bar')); // true
console.log(fooB.hasOwnProperty('bar')); // false
console.log(fooC.hasOwnProperty('bar')); // false
*/

//FOR...IN vs OBJECT.KEYS()
// let protoFoo = {
//   bar: 1,
//   qux: 2,
// };

// let foo = Object.create(protoFoo);
// foo.baz = 3;

// console.log('Using for...in loop'); // Will iterate through properties inherited from prototype
// for (let property in foo) {
//   console.log(`${property}: ${foo[property]}`);
// }

// console.log('\nUsing Object.keys()'); // Will only iterate through foo's own properties
// Object.keys(foo).forEach(property => {
//   console.log(`${property}: ${foo[property]}`);
// });

// NO PROTOTYPE
let noProto = Object.create(null);
console.log(Object.getPrototypeOf(noProto)); // null

if (Object.getPrototypeOf(noProto)) {
  console.log('I have a prototype!');
} else {
  console.log('I have NO PROTOTYPE!');
}