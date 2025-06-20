// let ob1 = {
//   name: "Prince",
//   suranme: "Chauana",
// };

// function address(adds) {
//   this.adds = adds;
// }
// function test(fn) {
//   return fn.call(this, "address");
// }
// Object.prototype.test1 = function () {
//   return test.call(this, address);
// };
// ob1.test1();

// console.log(ob1);

let ob1 = {
  name: "Prince",
  suranme: "Chauana",
};

function address(adds) {
  this.adds = adds;
}

Object.prototype.test1 = function () {
  return address.call(this, "address");
};

ob1.test1();

console.log(ob1);
