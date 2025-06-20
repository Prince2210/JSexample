function curriedAdd(a) {
  return function (b) {
    return a + b;
  };
}

const add2 = curriedAdd(2);

// Generic curried
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}

// Example usage
function multiply(a, b, c) {
  return a * b * c;
}

const curriedMultiply = curry(multiply);

console.log(curriedMultiply(2)(3)(4)); // Output: 24
console.log(curriedMultiply(2, 3)(4));
