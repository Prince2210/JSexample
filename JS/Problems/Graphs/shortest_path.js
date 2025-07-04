const edges = [
  ["a", "x"], // step 1
  ["x", "y"], // step 2
  ["y", "c"], // step 3
  ["b", "a"], // optional extra connection
  ["b", "c"], // could form cycle, but shortest path still through x → y
  ["q", "r"],
  ["q", "s"],
  ["q", "u"],
  ["q", "t"],
];

function graphConvertor(edges) {
  let graph = {};

  for (const [edge1, edge2] of edges) {
    if (!graph[edge1]) graph[edge1] = [];
    if (!graph[edge2]) graph[edge2] = [];

    if (graph[edge1]) graph[edge1].push(edge2);
    if (graph[edge2]) graph[edge2].push(edge1);
  }
  return graph;
}

// function breadthFirstSearch(graph, node) {
//   let visited = new Set();
//   let queue = [node];
//   while (queue.length > 0) {
//     let newNode = queue.shift();
//     for (const neighbor of graph[newNode]) {
//       if (!visited.has(neighbor)) {
//         queue.push(neighbor);
//         visited.add(neighbor);
//       }
//     }
//   }
//   return visited;
// }

function shortestDistance(edges, start, end) {
  let graph = graphConvertor(edges);
  let queue = [[start, 0]];
  let visited = new Set([start]);

  while (queue.length > 0) {
    let [node, distance] = queue.shift();
    if (node === end) return distance;

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, distance + 1]);
        visited.add(neighbor);
      }
    }
  }

  return -1; // ✅ return -1 if path doesn't exist
}

function shortestPath(edges, start, end) {
  let graph = graphConvertor(edges);
  let queue = [[start, [start]]];
  let visited = new Set([start]);

  while (queue.length > 0) {
    let [node, path] = queue.shift();
    if (node === end) return path;

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, [...path, neighbor]]);
        visited.add(neighbor);
      }
    }
  }

  return -1; // ✅ return -1 if path doesn't exist
}
console.log(shortestDistance(edges, "a", "c"));
console.log(shortestPath(edges, "a", "c"));
