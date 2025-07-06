let island = [
  [1, 1, 1, 0],
  [1, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 1],
  [0, 0, 1, 1],
];
function minPathCost(graph, row = 0, col = 0, memo = {}) {
  let position = row + "," + col;
  let rows = graph.length;
  let columns = graph[0].length;
  if (row < 0 || row >= rows || col < 0 || col >= columns) {
    return Infinity;
  }
  if (row == graph.length - 1 && col == graph[0].length - 1) {
    return graph[row][col];
  }
  if (position in memo) {
    return memo[position];
  }
  memo[position] =
    graph[row][col] +
    Math.min(
      minPathCost(graph, row + 1, col, memo),
      minPathCost(graph, row, col + 1, memo)
    );
  return memo[position];
}
console.log(minPathCost(island));

function maxPathCost(graph, row = 0, col = 0, memo = {}) {
  let position = row + "," + col;
  let rows = graph.length;
  let columns = graph[0].length;
  if (row < 0 || row >= rows || col < 0 || col >= columns) {
    return -Infinity;
  }
  if (row == graph.length - 1 && col == graph[0].length - 1) {
    return graph[row][col];
  }
  if (position in memo) {
    return memo[position];
  }
  memo[position] =
    graph[row][col] +
    Math.max(
      maxPathCost(graph, row + 1, col, memo),
      maxPathCost(graph, row, col + 1, memo)
    );
  return memo[position];
}
console.log(maxPathCost(island));
