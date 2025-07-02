// [1,2.4,2,4,6]

function countAllOccurrence(arr, value) {
  let count = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] == value) count++;
  }
  return count;
}
let data = [1, 2, 4, 2, 4, 2, 6];
// console.log(countAllOccurrence(data, 2));

// function countAllOccurrence_rec(arr, value) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   let count = arr[0] === value ? 1 : 0;

//   return count + countAllOccurrence_rec(arr.slice(1), value);
// }
function countAllOccurrence_rec(arr, value, index = 0) {
  if (arr.length <= index) {
    return 0;
  }
  let count = arr[index] === value ? 1 : 0;
  return count + countAllOccurrence_rec(arr, value, index + 1);
}
console.log(countAllOccurrence_rec(data, 2));
