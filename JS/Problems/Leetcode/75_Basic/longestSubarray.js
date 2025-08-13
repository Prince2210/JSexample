var longestSubarray = function (nums) {
  let left = 0,
    count = 0,
    max = 0;
  for (let r = 0; r < nums.length; r++) {
    if (nums[r] == 0) {
      max++;
    }
    while (max > 1) {
      if (nums[left] == 0) {
        max--;
      }
      left++;
    }
    if (max === 1) {
      count = Math.max(count, r - left);
    }
  }
  return max === 0 ? nums.length : count;
};

let nums = [1, 1, 0, 1];

console.log(longestSubarray(nums));
