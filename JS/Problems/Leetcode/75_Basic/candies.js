function kidsWithCandies(candies, extraCandies) {
  let max = Math.max(...candies);
  let res = [];
  for (let index = 0; index < candies.length; index++) {
    let maxCandies = extraCandies + candies[index];
    res.push(maxCandies >= max);
  }
  return res;
}

let candies = [2, 3, 5, 1, 3];

console.log(kidsWithCandies(candies, 3));
