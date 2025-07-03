/*

const edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];

const graph = {
  b: [a],
  a: [b]
}

loop => check if DOES NOT exist, then add key => push both nodes

Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes.

After that you can find and node path etc.
Take care of cycle via visited technique.

*/
const edges = [
  ["b", "a"],
  ["c", "a"],
  ["b", "c"],
  ["q", "r"],
  ["q", "s"],
  ["q", "u"],
  ["q", "t"],
];

function graphConvertor(edges) {
  let graph = {};

  for (const [src, dest] of edges) {
    if (!(src in graph)) graph[src] = [];
    if (!(dest in graph)) graph[dest] = [];
    graph[src].push(dest);
    graph[dest].push(src);
  }

  return graph;
}
console.log(graphConvertor(edges));
