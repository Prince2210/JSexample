var maxArea = function (height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let currentHieght = Math.min(height[left], height[right]);
    let currentWidth = right - left;

    let Area = currentHieght * currentWidth;
    maxArea = Math.max(maxArea, Area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
