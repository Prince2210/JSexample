function outer() {
  let outerVariable = "Prince";
  return function inner() {
    return outerVariable;
  };
}
let data = outer();
console.log(data());
console.log(data()); //// not good example

function counterGenrator() {
  let count = 0;
  return function incrementCount() {
    return ++count;
  };
}
let counter = counterGenrator();

console.log(counter());
console.log(counter());
console.log(counter()); ///go example
