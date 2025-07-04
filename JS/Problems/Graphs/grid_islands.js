let island = [
  [1, 0, 0, 1],
  [0, 1, 1, 0],
  [1, 1, 0, 0],
  [0, 0, 1, 1],
  [1, 1, 1, 1],
];

function islandCount(grid) {
  const rows = grid.length;
  const columns = grid[0].length;
  let visited = new Set();
  let count = 0;
  function dfs(r, c) {
    let pos = r + "," + c;
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= columns ||
      visited.has(pos) ||
      grid[r][c] == 0
    ) {
      return;
    }
    visited.add(pos);
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let pos = r + "," + c;
      if (grid[r][c] == 1 && !visited.has(pos)) {
        count++;
        dfs(r, c);
      }
    }
  }
  return count;
}

console.log(islandCount(island));
