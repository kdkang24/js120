// NOTE: Run this code from a file; don't use the REPL

// bar();
// function bar() {
//   console.log("this is bar");
// }

// foo();
// const foo = function() {
//   console.log("this is foo");
// };

// let foo = {
//   bar: function() {
//     console.log(this);
//   }
// };

// foo.bar(); // `foo` is the implicit execution context for `bar`
// // { bar: [Function: bar] }

// let baz = foo.bar;
// baz(); // Object [global] {...}


// function logNum() {
//   console.log(this.num);
// }

// let obj = {
//   num: 42
// };

// logNum.call(obj); // logs 42
