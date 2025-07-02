class BSTNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }
  // without recursion

  // insertion(data) {
  //   let node = new BSTNode(data);
  //   if (this.root == null) {
  //     this.root = node;
  //     return;
  //   }
  //   let root = this.root;
  //   while (true) {
  //     if (root.data > data) {
  //       if (root.left == null) {
  //         root.left = node;
  //         break;
  //       }
  //       root = root.left;
  //     } else {
  //       if (root.right == null) {
  //         root.right = node;
  //         break;
  //       }
  //       root = root.right;
  //     }
  //   }
  // }

  insert(data) {
    let newNode = new BSTNode(data);
    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertion(this.root, newNode);
    }
  }

  insertion(node, newNode) {
    if (node.data < newNode.data) {
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.insertion(node.right, newNode);
      }
    }
    if (node.data > newNode.data) {
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.insertion(node.left, newNode);
      }
    }
  }

  delete(data) {
    this.root = this.deleteNode(this.root, data);
  }
  deleteNode(node, data) {
    if (node == null) {
      return null;
    }
    if (node.data > data) {
      node.left = this.deleteNode(node.left, data);
      //move to left
    } else if (node.data < data) {
      node.right = this.deleteNode(node.right, data);
      //  move to right
    } else {
      // leaf node case
      if (node.left == null && node.right == null) {
        return null;
      }
      // only right node
      else if (node.left == null) {
        return node.right;
      }
      // only left node
      else if (node.right == null) {
        return node.left;
      } else {
        let tempNode = this.findMinNode(node.right);
        node.data = tempNode.data;
        node.right = this.deleteNode(node.right, tempNode.data);
      }
    }
    return node;
  }
  findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }
  inOrderTraversal() {
    let result = [];
    this.inOrder(this.root, result);
    return result;
  }
  inOrder(node, result) {
    if (node !== null) {
      this.inOrder(node.left, result);
      result.push(node.data);
      this.inOrder(node.right, result);
    }
  }
  preOrderTraversal() {
    let result = [];
    this.preOrder(this.root, result);
    return result;
  }
  preOrder(node, result) {
    if (node !== null) {
      result.push(node.data);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
  }
  postOrderTraversal() {
    let result = [];
    this.postOrder(this.root, result);
    return result;
  }
  postOrder(node, result) {
    if (node !== null) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.data);
    }
  }
}

function depthFirstTraversal(root) {
  if (root == null) {
    return;
  }
  let stack = [root];
  let result = [];
  while (stack.length > 0) {
    let node = stack.pop();
    result.push(node.data);
    if (node.left !== null) {
      stack.push(node.left);
    }
    if (node.right !== null) {
      stack.push(node.right);
    }
  }
  return result;
}
function breadthFirstTraversal(root) {
  if (root == null) {
    return;
  }
  let queue = [root];
  let result = [];
  while (queue.length > 0) {
    let node = queue.shift();
    result.push(node.data);
    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
  return result;
}
function depthFirstTraversalRecursive(root) {
  if (root == null) {
    return [];
  }

  let leftValues = depthFirstTraversalRecursive(root.left);
  let rightValues = depthFirstTraversalRecursive(root.right);

  return [root.data, ...leftValues, ...rightValues];
}
let BST = new BinarySearchTree();
[8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15].forEach((val) =>
  BST.insert(val)
);
// BST.delete(2);

console.log(depthFirstTraversalRecursive(BST.root));
Array(15)[(8, 4, 2, 1, 3, 6, 5, 7, 12, 10, 9, 11, 14, 13, 15)];
