// class BSTNode {
//   constructor(data, left = null, right = null) {
//     this.data = data;
//     this.left = left;
//     this.right = right;
//   }
// }
// class BinarySearchTree {
//     constructor(root = null) {
//       this.root = root;
//     }
function SumOfAllNodes(root) {
  let result = 0;
  if (root == null) {
    return result;
  }
  let stack = [root];
  while (stack.length > 0) {
    let node = stack.pop();
    result += node.data;
    if (node.left !== null) {
      stack.push(node.left);
    }
    if (node.right !== null) {
      stack.push(node.right);
    }
  }
  return result;
}
module.exports = { SumOfAllNodes };
