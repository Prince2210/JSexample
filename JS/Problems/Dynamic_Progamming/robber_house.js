let arr = [2, 4, 5, 6, 10];

function robber_house(houses, i = 0, memo = {}) {
  if (i in memo) {
    return memo[i];
  }
  if (i >= houses.length) return 0;
  let skip = robber_house(houses, i + 1, memo);
  let take = houses[i] + robber_house(houses, i + 2, memo);

  memo[i] = Math.max(skip, take);
  return memo[i];
}

console.log(robber_house(arr));
