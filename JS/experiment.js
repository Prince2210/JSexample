let arr = [1, 2, 4, 5];

function multiplyArray(multipier) {
  return this.map((element) => element * multipier);
}
Array.prototype.multiplyArray = multiplyArray;
let res = arr.multiplyArray(7);

function funcationalArray(fun, multipier) {
  return function (...args) {
    return fun
      .call(
        this.map((e) => e * multipier),
        ...args
      )
      .map((e) => e + args[1]);
  };
}

Array.prototype.multipierMap = funcationalArray(Array.prototype.map, 3);

// function testFlight(a1) {
//   console.log("-->", a1);
// }
// let check = funcationalArray(testFlight);
// check(2);
let check = arr.multipierMap((x) => x, "pc", "ll", "aa");
console.log(check);
