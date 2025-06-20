let ob1 = {
  name: "Prince",
  suranme: "Chauana",
  address: "Pr",
};

function test(fn) {
  return fn.call(this, "address");
}

function address(adds) {
  this.adds = adds;
}

Object.prototype.test1 = function () {
  return test.call(this, address);
};
ob1.test1();

console.log(ob1);
