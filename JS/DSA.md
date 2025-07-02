# Data Structure and Algorithms

## Linear Data Structure

- Array
- Stacks
- Linked List
- Queue
- Deque (Doubly linked list)

<details>
  <summary>Stacks</summary>
  Stacks Based on principle that is LIFO

### Operations on Stack

- **Push**: Add an element to the top of the stack.
- **Pop**: Remove the top element from the stack.
- **Peek / Top**: View the top element without removing it.
- **isEmpty**: Check if the stack is empty.
- **Size**: Returns the number of elements in the stack.

- **Clear**: Removes all items from the stack.

 </details>
<details>
 <summary>Queue</summary>
 A Queue is a linear data structure that follows the FIFO principle:

### Operations on Queue

- **Enqueue**: Add an element to the rear end of queue.
- **Dequeue**: Remove and return item from the front.
- **Peek / Top**: View the top element without removing it.
- **isEmpty**: Check if the stack is empty.
- **Size**: Returns the number of elements in the stack.

- **Clear**: Removes all items from the stack.
</details>
<details>
<summary>Linked List</summary>

Linked List is linear Data structure which each node contains data and information of next node.

### Operation on LinkedList

- **Insert At Head** : Add node at the beginning
- **Insert At Tail(value)**: Add node at the end
- **Insert At**: Insert node at a specific index
- **Delete Head**: Remove the first node
- **Delete Tail** :Remove the last node
- **Delete At**: Remove node at a specific index
- **Search**: Find if a value exists in the list
- **Traverse**: Visit all nodes and print values
- **Reverse**: Reverse the linked list
- **Length** :Return the total number of nodes

### Important

- **_Reverse is important to visualize_**
- **_Traverse is important to visualize_**
- **_Insertion is important to visualize_**

</details>
<details>
  <summary>Doubly Linked List</summary>
 Doubly Linked List is linear Data structure which each node contains data and information of next node and Previous node.

### Operations on Doubly Linked List

1. #### Insertion

   **Insert At Head** — Add node at the beginning

   **Insert At Tail** — Add node at the end

   **Insert At Index** — Insert at a specific index

2. #### Deletion

   **Remove Head** — Remove the first node

   **Remove Tail** — Remove the last node

   **Remove By Value** — Remove the first node with the given value

   **Remove At Index** — Remove node at a specific index

3. #### Traversal

   **Print Forward** — Traverse from head to tail

   **Print Backward** — Traverse from tail to head

4. #### Search

   **Find** — Returns node if found, otherwise null

   **Contains** — Returns true if found, else false

5. #### Utility

   **Is Empty** — Check if the list is empty

   **Length** — Returns the number of nodes

   **Clear** — Deletes all nodes

### Important

- **_Reverse is important to visualize_**
- **_Traverse is important to visualize_**
- **_Insertion is important to visualize_**

</details>

## Hash Base Data Structure

- Hashmap
- Set

## Non - Linear Data Structure

- Tree
- Binary Tree
- Binary Search Tree (BST)
- Graphs
- Trie
- Heap

<details>
  <summary>Binary Tree</summary>
 A Binary Tree is a hierarchical data structure in which each node has at most two children, referred to as the left and right child. It is used for efficient searching, sorting, and hierarchical data representation.

### Key Features:

**_Root Node_**: The topmost node of the tree.

**_Leaf Nodes_**: Nodes with no children.

**_Height_**: The longest path from the root to a leaf.

**_Depth_**: The number of edges from the root to the node.

### Types of Binary Trees:

- **Full Binary Tree**: Every node has 0 or 2 children.

- **Complete Binary Tree**: All levels are completely filled except possibly the last, which is filled from left to right.

- **Perfect Binary Tree**: All internal nodes have 2 children and all leaves are at the same level.

- **Balanced Binary Tree**: The height of the left and right subtrees of every node differ by at most 1.

- **Binary Search Tree (BST)**: A binary tree where left child < parent < right child.

<!-- ![Tree Diagram](/Basic_DSA/BST.png) -->

### Operations on Binary

#### Traversal Operations

- **_In order (LNR)_** :
  Visit left subtree → Node → Right subtree
  → Used in BSTs to get sorted data.

- **_Pre order (NLR)_** :
  Visit Node → Left subtree → Right subtree
  → Used to create a copy of the tree.

- **_Post order (LRN)_** :
  Visit Left → Right → Node
  → Used to delete/free the tree.

- **_Level Order (BFS)_** :
  Visit nodes level by level using a queue.

#### Other Tree Operations

- **_Insertion_**:
  Add a node to the tree based on certain rules (e.g., BST rules).

- **_Deletion_**:
  Remove a node, handling three cases: leaf node, one child, or two children.

- **_Search_**:
  Find whether a value exists in the tree (efficient in BSTs).

- **_Find Min/Max_**:
  In BST, leftmost node = min, rightmost = max.

- **_Height / Depth Calculation_**:
  Length of the longest path from root to a leaf.

- **_Count Nodes / Leaves_**:
  Total number of nodes or only leaf nodes.

- **_Check Balanced_**:
  Whether height difference of left and right subtrees is ≤ 1 for all nodes.

- **_Mirror / Invert Tree_**:
  Swap all left and right children recursively.

- **_Lowest Common Ancestor (LCA)_**:
  Find the lowest shared ancestor of two nodes.

- **_Path Sum_**:
  Check if there is a path from root to any leaf with a given sum.

</details>

<details>
<summary>BST</summary>

A Binary Search Tree is a special type of binary tree where:

- Each node's left child contains only nodes with values less than the node’s value.

- Each node's right child contains only nodes with values greater than the node’s value.

- No duplicate values (in classic BSTs).

### Operation on BST

| Operation | Description                                                     |
| --------- | --------------------------------------------------------------- |
| Insertion | Insert a new value in the correct sorted position.              |
| Deletion  | Remove a node, handling leaf, one-child, or two-children cases. |
| Search    | Check whether a value exists in the tree.                       |
| Traversal | Visit all nodes (e.g., in order gives sorted order).            |

### Important

</details>

<details>
<summary>Graphs</summary>
A graph is a non-linear data structure consisting of:

- Vertices (or nodes) — points

- Edges — connections between points

#### Types of Graphs
- Directed Graphs
- Undirected Graph
### Directed Graphs
- Edges have direction: (u → v)

- Order matters: (u, v) ≠ (v, u)

- 🧪 Example: Twitter "follows" (A may follow B, but B doesn't have to follow A)

### Undirected Graphs

- Edges have no direction: {u, v}

- Symmetric relationship: if u is connected to v, then v is connected to u

 - 🧪 Example: Facebook "friends"
</details>
