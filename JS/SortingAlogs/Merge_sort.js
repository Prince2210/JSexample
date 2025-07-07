let arr = [2, 6, 7, 3, 1, 4];

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftBox = 0;
  let rightBox = 0;

  while (leftBox < left.length && rightBox < right.length) {
    if (left[leftBox] < right[rightBox]) {
      result.push(left[leftBox]);
      leftBox++;
    } else {
      result.push(right[rightBox]);
      rightBox++;
    }
  }
  while (leftBox < left.length) {
    result.push(left[leftBox]);
    leftBox++;
  }

  while (rightBox < right.length) {
    result.push(right[rightBox]);
    rightBox++;
  }

  return result;
}

console.log(mergeSort(arr));
