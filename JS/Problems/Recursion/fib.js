function fib(number) {
  if (number == 0) return 0;
  if (number == 1) return 0;
  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= number; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}
function fibRecursive(number) {
  if (number == 0) return 0;
  if (number == 1) return 1;
  return fibRecursive(number - 2) + fibRecursive(number - 1);
}
