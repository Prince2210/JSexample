//working but memory consuming

// var findMaxAverage = function (nums, k) {
//   let max = -Infinity;
//   let j = 0;
//   for (let i = 0; i <= nums.length - k; i++) {
//     let sum = 0;
//     while (j < k) {
//       sum = sum + nums[i + j];
//       j++;
//     }
//     max = Math.max(max, sum);
//     j = 0;
//   }
//   return max / k;
// };

let nums = [1, 12, -5, -6, 50, 3],
  k = 4;

//sliding window
function findMaxAverage(nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let maxsum = sum;
  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i];
    maxsum = Math.max(sum, maxsum);
  }
  return maxsum / k;
}
console.log(findMaxAverage(nums, k));
