function sumOfNNumbers(num) {
  //   let res = 0;
  //   for (let i = 0; i <= num; i++) {
  //     res = res + i;
  //   }
  //   return res;
  return (num * (num + 1)) / 2;
}
// console.log(sumOfNNumbers(10));

function sumOfNNumbersRecursion(num) {
  if (num == 1) {
    return num;
  }
  return num + sumOfNNumbersRecursion(num - 1);
}

console.log(sumOfNNumbersRecursion(10));
