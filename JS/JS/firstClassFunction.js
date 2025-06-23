// FCF : can be call as normal function ,passed as arguments, return as well

// HOC : can take function as arguments and return function

//HOC

function mutipply(multi) {
  return multi;
}

function mul(type) {
  return type * 2;
}
let m = mutipply(mul);
console.log(m(4));
