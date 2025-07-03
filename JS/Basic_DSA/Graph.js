const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};
function depthFirstSearch(graph, start) {
  let stack = [start];
  let visited = new Set();
  while (stack.length > 0) {
    let node = stack.pop();
    if (!visited.has(node)) {
      visited.add(node);
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }
  return visited;
}

// console.log(depthFirstSearch(graph, "a"));

function dfsRecursive(graph, start, visited = new Set()) {
  if (visited.has(start)) return visited;
  visited.add(start);
  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfsRecursive(graph, neighbor, visited);
    }
  }
  return visited;
}
// console.log(dfsRecursive(graph, "a"));

function breadthFirstSearch(graph, start) {
  let visited = new Set();
  let queue = [start];
  while (queue.length > 0) {
    let node = queue.shift();
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return visited;
}

console.log(breadthFirstSearch(graph, "d"));
