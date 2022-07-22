//Execution context changes depending on how the function is invoked
let foo = {
  bar: function() {
    console.log(this);
  }
};

foo.bar(); // `foo` is the implicit execution context for `bar`
// { bar: [Function: bar] }

let baz = foo.bar;
baz(); // Object [global] {...}


// CALL - General syntax
someObject.someMethod.call(context, arg1, arg2, arg3, ...)

// APPLY - General syntax (args are passed as an array)
someObject.someMethod.apply(context, [arg1, arg2, arg3, ...])

// APPLY is not needed in ES6+ since CALL can be used with a spread operator
let args = [arg1, arg2, arg3];
someObject.someMethod.call(context, ...args);

//BIND - Permanently bind a function to a context and returns a new function
let foo = someObject.someMethod.bind(context);
foo();