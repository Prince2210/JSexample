var maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let count = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum == k) {
      count++;
      left++;
      right--;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }
  return count;
};
var maxOperations1 = function (nums, k) {
  let map = new Map();
  let operation = 0;
  for (const element of nums) {
    let compliment = k - element;
    console.log(compliment, map.get(compliment));
    if (map.get(compliment) > 0) {
      operation++;
      map.set(compliment, map.get(compliment) - 1);
    } else {
      map.set(element, (map.get(element) || 0) + 1);
    }
  }
  console.log(map);
  return operation;
};
let nums = [1, 2, 3, 4];

console.log(maxOperations1(nums, 5));
