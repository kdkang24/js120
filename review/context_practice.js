// let obj = {
//   func: function() {
//     return this;
//   },
// };

// let context = obj.func();

// console.log(context); //outputs the object 'obj'


let foo = {
  a: 1,
  b: 2,
};

let bar = {
  a: 'abc',
  b: 'def',
  add: function() {
    return this.a + this.b;
  },
};

console.log(bar.add.call(foo));
