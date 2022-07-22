//PRESERVING CONTEXT

function repeatThreeTimes(func) {
  func();
  func();
  func();
}

//Context gets lost because the inner function uses global object as its context
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    });
  },
};

obj.foo();

// => 1 undefined undefined
// => 2 undefined undefined
// => 3 undefined undefined

// Arrow function solution
let obj1 = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(number =>
      console.log(String(number) + ' ' + this.a + ' ' + this.b));
  }
};

obj1.foo();
// => 1 hello world
// => 2 hello world
// => 3 hello world


//Bind solution
let obj2 = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    }.bind(this));
  },
};

obj2.foo();

// => 1 hello world
// => 2 hello world
// => 3 hello world

// Outer scope variable solution
let obj3 = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let self = this;
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + self.a + ' ' + self.b);
    });
  },
};

obj3.foo();

// => 1 hello world
// => 2 hello world
// => 3 hello world

// thisArg argument solution
let obj4 = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    }, this);
  },
};

obj4.foo();

// => 1 hello world
// => 2 hello world
// => 3 hello world