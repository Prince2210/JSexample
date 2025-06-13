function curriedAdd(a) {
  return function (b) {
    return a + b;
  };
}

const add2 = curriedAdd(2); // returns a function that adds 2
console.log(add2);
