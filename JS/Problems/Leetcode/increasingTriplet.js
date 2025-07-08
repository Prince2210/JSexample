function increasingTriplet(nums) {
  let first = Infinity;
  let second = Infinity;
  for (const element of nums) {
    if (element <= first) {
      first = element;
    } else if (element <= second) {
      second = element;
    } else {
      return true;
    }
  }
}

let nums = [20, 100, 10, 12, 5, 13];

console.log(increasingTriplet(nums));
