function fib(num) {
  if (num == 0) return 0;
  if (num == 1) return 1;
  let prev = 0;
  let current = 1;
  let fib;
  for (let index = 2; index <= num; index++) {
    fib = prev + current;
    prev = current;
    current = fib;
  }
  return fib;
}

function tribonacci(num) {
  if (num == 0) return 0;
  if (num == 1 || num == 1) return 1;
  let a = 0;
  let b = 1;
  let c = 1;
  let tri;
  for (let index = 3; index <= num; index++) {
    tri = a + b + c;
    a = b;
    b = c;
    c = tri;
  }
  return tri;
}

function fib_memo(num, memo = {}) {
  if (num in memo) return memo[num];
  if (num <= 1) return num;
  memo[num] = fib_memo(num - 1, memo) + fib_memo(num - 2, memo);
  return memo[num];
}

function tribonacci_memo(num, memo = {}) {
  if (num in memo) return memo[num];
  if (num <= 1) return num;
  if (num == 2) return 1;
  memo[num] =
    tribonacci_memo(num - 1, memo) +
    tribonacci_memo(num - 2, memo) +
    tribonacci_memo(num - 3, memo);
  return memo[num];
}

function tri_tabulation(num) {
  if (num <= 1) return num;
  if (num == 2) return 1;
  const table = Array(num + 1).fill(0);
  table[1] = 1;
  table[2] = 1;
  for (let i = 3; i <= num; i++) {
    table[i] = table[i - 1] + table[i - 2] + table[i - 3];
  }
  return table[num];
}

// console.log(tri_tabulation(8));
// console.log(tribonacci(8));
