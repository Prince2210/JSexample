var equalPairs = function (grid) {
  let row = [...grid];
  let col = [];
  for (let i = 0; i < grid[0].length; i++) {
    let c = [];
    for (let j = 0; j < grid.length; j++) {
      c.push(grid[j][i]);
    }
    col.push(c);
  }
  let count = 0;
  for (let index = 0; index < row.length; index++) {
    for (let cIndex = 0; cIndex < col.length; cIndex++) {
      if (row[index].join(",") === col[cIndex].join(",")) count++;
    }
  }
  return count;
};
let grid = [
  [11, 1],
  [1, 11],
];

console.log(equalPairs(grid));
