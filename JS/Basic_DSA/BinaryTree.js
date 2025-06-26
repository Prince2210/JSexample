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
  insertion(data) {
    let node = new BSTNode(data);
    if (this.root == null) {
      this.root = node;
    }
    let root = this.root;
    while (root) {
      if (root.left < root.right) {
      }
    }
  }
}

let BST = new BinarySearchTree();
BST.insertion(8);
// console.log(BST);
