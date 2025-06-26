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
}

let BST = new BinarySearchTree();
BST.insert(8);
BST.insert(10);
BST.insert(11);
BST.insert(4);

console.log(BST);
