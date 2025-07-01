function first_occ(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

let arr = [3, 4, 1, 8, 1, 7];
// console.log(first_occ(arr, 1));

function first_occ_recu(arr, value, index = 0) {
  if (arr.length <= index) {
    return -1;
  }
  if (arr[index] == value) {
    return index;
  }
  return first_occ_recu(arr, value, index + 1);
}
// console.log(first_occ_recu(arr, 1));

function last_occ(arr, value) {
  let last = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      last = i;
    }
  }
  return last;
}
// console.log(last_occ(arr, 1));

function last_occ_rec(arr, value, index = 0) {
  if (index >= arr.length) return -1;
  let res = last_occ_rec(arr, value, index + 1);
  console.log(res);
  if (res !== -1) return res;
  return arr[index] === value ? index : -1;
}

console.log(last_occ_rec(arr, 1));
