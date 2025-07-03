const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

function biggestIsland(graph) {
  let visited = new Set();
  let largest = 0;
  function dfs(node) {
    if (visited.has(node)) return 0;
    visited.add(node);
    let size = 1;
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        size += dfs(neighbor);
      }
    }
    return size;
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      let dfsLength = dfs(node);
      if (dfsLength > largest) {
        largest = dfsLength;
      }
    }
  }
  return largest;
}
console.log(biggestIsland(graph));
