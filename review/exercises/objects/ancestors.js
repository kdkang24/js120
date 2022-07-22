// name property added to make objects easier to identify
let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

Object.prototype.ancestors = function() {
  let ancestors = [];
  let self = this;

  while (Object.getPrototypeOf(self) !== Object.prototype) {
    ancestors.push(Object.getPrototypeOf(self));
    self = Object.getPrototypeOf(self);
  }
  ancestors.push(Object.prototype);
  return ancestors;
};

// qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']


