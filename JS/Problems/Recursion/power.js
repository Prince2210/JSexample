function power(num, ex) {
  let res = 1;
  for (let i = 1; i <= ex; i++) {
    res = res * num;
  }
  return res;
}

// console.log(power(2, 10));

function powerRecursive(num, ex) {
  if (ex == 0) return 1;
  if (ex == 1) return num;
  return num * powerRecursive(num, ex - 1);
}

console.log(powerRecursive(2, 10));
