const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

function connectedIsland(graph) {
  let visited = new Set();
  let count = 0;
  function dfs(node) {
    let stack = [node];
    while (stack.length > 0) {
      let newNode = stack.pop();
      if (!visited.has(newNode)) {
        visited.add(newNode);
        for (const neighbor of graph[newNode]) {
          if (!visited.has(neighbor)) {
            stack.push(neighbor);
          }
        }
      }
    }
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      dfs(node);
      count++;
    }
  }
  return count;
}

console.log(connectedIsland(graph));
