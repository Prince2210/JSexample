let sequence = [6, 1, 7, 4, 2, 9];

function insertionSort(seq) {
  for (let i = 1; i < seq.length; i++) {
    let temp = seq[i];
    let j;
    for (j = i - 1; j >= 0 && seq[j] > temp; j--) {
      seq[j + 1] = seq[j];
    }
    seq[j + 1] = temp;
  }
  return seq;
}

console.log(insertionSort(sequence));

/// a exercise for understanding

// let arr = [1, 2, 3, 4];

// function shifting(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < array[i + 1]) {
//       array[i] = array[i + 1];
//       console.log(array);
//     }
//   }
//   return array;
// }
// console.log(shifting(arr));
