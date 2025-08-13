var largestAltitude = function (gain) {
  let max = 0;
  let current = 0;
  for (let index = 0; index < gain.length; index++) {
    current = current + gain[index];
    max = Math.max(max, current);
  }
  return max;
};

let arr = [-5, 1, 5, 0, -7];
console.log(largestAltitude(arr));
