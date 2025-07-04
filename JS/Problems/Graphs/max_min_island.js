let island = [
  [1, 0, 0, 1],
  [0, 1, 1, 0],
  [1, 1, 0, 0],
  [0, 0, 1, 1],
  [1, 1, 1, 1],
];

function maxIsland(grid) {
  let max = 0;
  let rows = grid.length;
  let columns = grid[0].length;
  let visited = new Set();
  function dfs(r, c) {
    let pos = r + "," + c;
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= columns ||
      visited.has(pos) ||
      grid[r][c] === 0
    ) {
      return 0;
    }
    visited.add(pos);
    let size = 1;
    size += dfs(r + 1, c);
    size += dfs(r - 1, c);
    size += dfs(r, c + 1);
    size += dfs(r, c - 1);
    return size;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let pos = r + "," + c;
      if (grid[r][c] === 1 && !visited.has(pos)) {
        let islandSize = dfs(r, c);
        if (islandSize > max) {
          max = islandSize;
        }
      }
    }
  }
  return max;
}

// console.log(maxIsland(island));
// console.log(minIsland(island));
function minIsland(grid) {
  let min = Infinity;
  let rows = grid.length;
  let columns = grid[0].length;
  let visited = new Set();
  function dfs(r, c) {
    let pos = r + "," + c;
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= columns ||
      visited.has(pos) ||
      grid[r][c] === 0
    ) {
      return 0;
    }
    visited.add(pos);
    let size = 1;
    size += dfs(r + 1, c);
    size += dfs(r - 1, c);
    size += dfs(r, c + 1);
    size += dfs(r, c - 1);
    return size;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let pos = r + "," + c;
      if (grid[r][c] === 1 && !visited.has(pos)) {
        let islandSize = dfs(r, c);
        if (islandSize < min) {
          min = islandSize;
        }
      }
    }
  }
  return min;
}
