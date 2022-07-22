/* eslint-disable max-len */
function sumNum(num1) {
  return this.num + num1;
}

let obj = {
  num: 42
};

let sumNum2 = sumNum.bind(obj);
// console.log(sumNum2(5)); // => 47
// console.log(sumNum2(6)); // 48
// console.log(sumNum2(100)); // 142

let object = {
  a: 'hello',
  b: 'world',
  foo: function() {
    return this.a + ' ' + this.b;
  },
};

let bar = object.foo;
console.log(bar());                                // "undefined undefined"

let baz = object.foo.bind(object);
console.log(baz());                                // "hello world"

// Bind PERMANENTLY binds functions, so you cannot change their execution context
// EVEN IF you use 'call' or 'apply' or 'bind' a second time
let object2 = {
  a: 'hi',
  b: 'there',
};

console.log(baz.call(object2));  // "hello world" - `this` still refers to `object`

let qux = object.foo;
console.log(qux.call(object2)); // 'hi there'

// BIND example
let greetings = {
  morning: 'Good morning, ',
  afternoon: 'Good afternoon, ',
  evening: 'Good evening, ',

  greeting: function(name) {
    let currentHour = (new Date()).getHours();

    if (currentHour < 12) {
      console.log(this.morning + name);
    } else if (currentHour < 18) {
      console.log(this.afternoon + name);
    } else {
      console.log(this.evening + name);
    }
  }
};

let spanishWords = {
  morning: 'Buenos dias, ',
  afternoon: 'Buenas tardes, ',
  evening: 'Buenas noches, '
};

let spanishGreeter = greetings.greeting.bind(spanishWords);

spanishGreeter('Jose');
spanishGreeter('Juan');