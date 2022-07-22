// Function expressions cannot be called before being declared
// foo() will cause a reference error

bar();
function bar() {
  console.log("this is bar");
}

foo();
const foo = function() {
  console.log("this is foo");
};


let prompt = function() { // Assign to a variable

};

[1, 2, 3].forEach(function(elem) { // pass to another function
  console.log(elem);
});


function makeIncrementer(increment) {
  return function(value) { // return to caller
    return value + increment;
  }
}