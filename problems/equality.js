function objectsEqual(obj1, obj2) {
  //Tests to see if two objects contain the same keys and values
  let result = true;

  if (obj1 === obj2) {
    return true;
  }

  for (const [key, value] of Object.entries(obj1)) {
    if (obj2[key] !== value) {
      result = false;
      break;
    }
  }

  for (const [key, value] of Object.entries(obj2)) {
    if (obj1[key] !== value) {
      result = false;
      break;
    }
  }

  return result;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false