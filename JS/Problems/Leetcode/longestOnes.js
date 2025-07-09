var longestOnes = function (nums, k) {
  let count = 0;
  let left = 0;
  let zeros = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      zeros++;
    }
    while (zeros > k) {
      if (nums[left] == 0) {
        zeros--;
      }
      left++;
    }
    count = Math.max(count, i - left + 1);
  }
  return count;
};
let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],
  k = 2;

console.log(longestOnes(nums, k));
