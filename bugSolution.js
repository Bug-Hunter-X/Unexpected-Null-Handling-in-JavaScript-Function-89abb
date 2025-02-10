function foo(a, b) {
  // Handle null values by throwing an error
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.');
  }
  return a + b; 
}

//Alternative - handle null as 0
function foo2(a, b) {
  a = a === null ? 0 : a; 
  b = b === null ? 0 : b;
  return a + b;
}

console.log(foo2(1, 2)); // 3
console.log(foo2(null, 2)); // 2
console.log(foo2(1, null)); // 1
console.log(foo2(null, null)); // 0
//console.log(foo(1, 2)); // 3
//console.log(foo(null, 2)); // Throws Error
//console.log(foo(1, null)); // Throws Error
//console.log(foo(null, null)); // Throws Error