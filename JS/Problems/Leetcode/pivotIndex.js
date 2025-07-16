var pivotIndex = function (nums) {
  let left = 0;
  let res = 0;
  let sum = nums.reduce((acc, num) => acc + num, 0);
  while (left < nums.length - 1) {
    let right = sum - res - nums[left];
    if (res == right) return left;
    res += nums[left];
    left++;
  }
  return -1;
};

let nums = [1, 7, 3, 6, 5, 6];

console.log(pivotIndex(nums));
