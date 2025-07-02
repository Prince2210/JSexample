function gcd_rec(num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  return gcd_rec(num2, num1 % num2);
}

// itrative

function gcd(num1, num2) {
  let res = 1;
  for (let i = 1; i <= num1; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      res = i;
    }
  }
  return res;
}
// console.log(gcd(36, 24));

function lcm_rec(num1, num2) {
  return (num1 * num2) / gcd_rec(num1, num2);
}
// console.log(lcm_rec(36, 24));/

function lcm(num1, num2) {
  let max = Math.max(num1, num2);
  while (true) {
    if (max % num1 === 0 && max % num2 == 0) {
      return max;
    }
    max++;
  }
}
// console.log(lcm(36, 24));
