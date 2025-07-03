/*
Given two nodes (start and dest) in a directed acyclic graph (DAG), return true if there is a directed path from start to dest,
otherwise return false.

Example 1:

Input: start = 1, dest = 3
Output: true
Explanation: There is a directed path 1 -> 2 -> 3.
Example 2:

Input: start = 1, dest = 4
Output: false
Explanation: There is no path from 1 to 4.



*/
const dag = {
  a: ["b", "c"],
  b: ["d"],
  c: ["d", "e"],
  d: ["f"],
  e: ["f"],
  f: [],
};

function directedPath(graph, start, end) {
  let stack = [start];

  let visited = new Set();

  while (stack.length > 0) {
    let node = stack.pop();
    if (node === end) return true;
    if (!visited.has(node)) {
      visited.add(node);
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }
  return false;
}
function directedPathBFS(graph, start, end) {
  let queue = [start];

  let visited = new Set();

  while (queue.length > 0) {
    let node = queue.shift();
    if (node === end) return true;
    if (!visited.has(node)) {
      for (const neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }
  return false;
}

function directedPath_rec(graph, start, end, visited = new Set()) {
  if (start == end) return true;
  if (visited.has(start)) {
    return false;
  }
  visited.add(start);
  for (const neighbor of graph[start]) {
    if (directedPath_rec(graph, neighbor, end) === true) {
      return true;
    }
  }
  return false;
}

console.log(directedPath(dag, "c", "f"));
