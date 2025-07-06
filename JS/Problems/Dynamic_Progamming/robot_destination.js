let island = [
  [1, 1, 1, 0],
  [1, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 1],
  [0, 0, 1, 1],
];
function robotDestination(graph, row = 0, col = 0, memo = {}) {
  let position = row + "," + col;
  let rows = graph.length;
  let columns = graph[0].length;
  if (
    row < 0 ||
    row >= rows ||
    col < 0 ||
    col >= columns ||
    graph[row][col] == 0
  ) {
    return 0;
  }
  if (row == graph.length - 1 && col == graph[0].length - 1) {
    return 1;
  }
  if (position in memo) {
    return memo[position];
  }
  memo[position] =
    robotDestination(graph, row + 1, col, memo) +
    robotDestination(graph, row, col + 1, memo);
  return memo[position];
}
console.log(robotDestination(island));
