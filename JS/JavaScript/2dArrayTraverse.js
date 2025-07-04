let twoD = [
  [1, 0, 0, 1],
  [0, 1, 1, 0],
  [1, 1, 0, 0],
  [0, 0, 1, 1],
  [1, 1, 1, 1],
];

// traversal of each element with foreach method
twoD.forEach((row, i) => {
  row.forEach((rowValue, j) => {
    console.log(rowValue, `[${i + 1},${j + 1}] row`);
  });
});

// traversal of each element with for loop method
for (let i = 0; i < twoD.length; i++) {
  for (let j = 0; j < twoD[i].length; j++) {
    console.log(twoD[i][j]);
  }
}
// traversal of every row with foreach

twoD.forEach((row, i) => {
  console.log(row, `this is ${i + 1} row.`);
});
// traversal of every row with for loop

for (let i = 0; i < twoD.length; i++) {
  console.log(twoD[i]);
}

// traversal of every col with for loop
// let twoD = [
//   [1, 0, 0, 1],
//   [0, 1, 1, 0],
//   [1, 1, 0, 0],
//   [0, 0, 1, 1],
// ];

for (let i = 0; i < twoD[0].length; i++) {
  let col = [];
  for (let j = 0; j < twoD.length; j++) {
    col.push(twoD[j][i]);
  }
  console.log(col, `this is ${i + 1} col.`);
}
