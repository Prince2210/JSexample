let ob1 = {
  name: "Prince",
  suranme: "Chauana",
};

function address(adds) {
  this.adds = adds;
}
function test(fn) {
  return fn.call(this, "address");
}
Object.prototype.test1 = function () {
  return test.call(this, address);
};
ob1.test1();

console.log(ob1);
// ➤ Step 1:
// Call: ob1.test1()

// this inside test1 is ob1.

// ➤ Step 2:
// Inside test1:
// test.call(this, address)
// → becomes: test.call(ob1, address)

// ➤ Step 3:
// Inside test:
// fn.call(this, "address")
// → becomes: address.call(ob1, "address")

// ➤ Step 4:
// Inside address:
// this.adds = "address"
// → modifies ob1 by adding a new property: adds: "address"
ob1 = {
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
