/*

"coin change problem", where you need to determine if it's possible to form a specific amount 
using any combination of elements from a given set, which can be used an unlimited number of times."

sumPossible(8, [5, 12, 4]); -> true
sumPossible(103, [6, 20, 1]); // -> true
sumPossible(8, [5, 3, 4]) -> true
sumPossible(15, [4, 6, 10]) -> false


*/

function sumPossible(sum, coins, memo = {}) {
  if (sum in memo) return memo[sum];
  if (sum === 0) return true;
  if (sum < 0) return false;
  for (let index = 0; index < coins.length; index++) {
    const element = coins[index];
    let res = sum - element;
    if (sumPossible(res, coins, memo)) {
      memo[sum] = true;
      return true;
    }
  }
  memo[sum] = false;
  return false;
}
function sumMinPossible(sum, coins, memo = {}) {
  if (sum in memo) return memo[sum];
  if (sum === 0) return 0;
  if (sum < 0) return -1;
  let min = Infinity;
  for (let index = 0; index < coins.length; index++) {
    const element = coins[index];
    let res = sum - element;
    let count = sumMinPossible(res, coins, memo);
    if (count !== -1) {
      min = Math.min(min, count + 1);
    }
  }
  memo[sum] = min === Infinity ? -1 : min;
  return memo[sum];
}
function sumMaxPossible(sum, coins, memo = {}) {
  if (sum in memo) return memo[sum];
  if (sum === 0) return 0;
  if (sum < 0) return -1;
  let min = 0;
  for (let index = 0; index < coins.length; index++) {
    const element = coins[index];
    let res = sum - element;
    let count = sumMaxPossible(res, coins, memo);
    if (count !== -1) {
      min = Math.max(min, count + 1);
    }
  }
  memo[sum] = min === 0 ? -1 : min;
  return memo[sum];
}
console.log(sumMinPossible(103, [6, 20, 1]));
console.log(sumMaxPossible(103, [6, 20, 1]));
