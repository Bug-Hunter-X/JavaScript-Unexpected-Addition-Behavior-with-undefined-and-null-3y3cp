function foo(a, b) {
  a = a === undefined ? 0 : a; // Handle undefined values
  b = b === undefined ? 0 : b; // Handle undefined values
  a = a === null ? 0 : a; // Handle null values
  b = b === null ? 0 : b; // Handle null values

  if (isNaN(a) || isNaN(b)) {
    return 0; //Handle NaN values
  }

  return a + b;
}

console.log(foo(undefined, 5)); // 5
console.log(foo(null, 5));    // 5
console.log(foo(NaN, 5));      // 0