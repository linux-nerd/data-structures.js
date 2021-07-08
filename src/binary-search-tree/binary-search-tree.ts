import { Queue } from "../queue/queue";
/**
 * This creates a node
 * @name BSTNode
 * @param key
 * @param left
 * @param right
 * @return BSTNode
 */
export class BSTNode<T> {
  private _key: T;
  private _details: any;
  private _left: BSTNode<T> | null;
  private _right: BSTNode<T> | null;

  constructor(
    key: T,
    details: any = null,
    left: BSTNode<T> | null = null,
    right: BSTNode<T> | null = null
  ) {
    // the constructor creates the leaf node
    this._key = key;
    this._details = details;
    this._left = left;
    this._right = right;
  }

  /* Getter and Setter for key */
  get key(): T {
    return this._key;
  }
  set key(key) {
    this._key = key;
  }

  /* Getter and Setter for details */
  get details(): any {
    return this._details;
  }
  set details(details) {
    this._details = details;
  }

  /* Getter and Setter for left sub tree */
  get left(): BSTNode<T> | null {
    return this._left;
  }
  set left(left) {
    this._left = left;
  }

  /* Getter and Setter for right sub tree */
  get right(): BSTNode<T> | null {
    return this._right;
  }
  set right(right) {
    this._right = right;
  }
}

/**
 * Private methods name
 */
const inOrderTraversal = Symbol("inorder");
const preOrderTraversal = Symbol("preorder");
const postOrderTraversal = Symbol("postorder");
const levelOrderTraversal = Symbol("levelorder");



/**
 * Binary Search Tree
 */
export class BST<T> {
  public root: BSTNode<T>;
  private length: number;

  constructor() {
    this.root = null;
    this.length = 0;
  }
  set len(l) {
    this.length = l;
  }
  get len(): number {
    return this.length;
  }

  /**
   * Insert value in the BST
   * @param {*} val
   */
  insert(val: T, details: any = null) {
    // create a BST node
    const bstNode = new BSTNode<T>(val, details);

    /**
     * @name recurseBST
     * @param {*} node - optional, default value is this.root
     */
    const recurseBST = (node = this.root) => {
      if (node.key > val && !node.left) {
        node.left = bstNode;
        this.length++;
      } else if (node.key > val) {
        recurseBST(node.left);
      } else if (node.key < val && !node.right) {
        node.right = bstNode;
        this.length++;
      } else if (node.key < val) {
        recurseBST(node.right);
      }
    };

    if (!this.root) {
      // if the root is null then assign the created node to the root.
      this.root = bstNode;
      this.length++;
    } else {
      recurseBST();
    }
  }

  delete(val: T) {
    if (!this.root) {
      return new Error("BST is empty. Cannot delete from empty BST");
    } else {
      let findNode = this.lookup(val);
      if (findNode.hasVal) {
        // case 1
        // when the node has no children or when its a leaf
        // then simply delete the node
        if (!findNode.currentNode.left && !findNode.currentNode.right) {
          //check if the node is the root node
          if (findNode.parentNode === null) {
            this.root = null;
          } else {
            const direction = findNode.parentNode.key > val ? "left" : "right";
            findNode.parentNode[direction] = null;
          }
          this.length--;
        }
        // case 2
        // when node has just 1 child
        // Simply delete the key and point the parent to the child
        else if (+!!findNode.currentNode.left ^ +!!findNode.currentNode.right) {
          const parentToCurNodeDir =
            findNode.parentNode.key > val ? "left" : "right";
          const curNodeToChildDir = findNode.currentNode.left
            ? "left"
            : "right";
          findNode.parentNode[parentToCurNodeDir] =
            findNode.currentNode[curNodeToChildDir];
          this.length--;
        }
        // case 3
        // when node has both left and right children
        // Find minimum value in the right subtree of the node containing the key to be deleted.
        // Replace the key to be deleted with the min value.
        // Then delete the min val from the right subtree.
        else if (findNode.currentNode.left && findNode.currentNode.right) {
          // find successor
          const successor = this.findMin(findNode.currentNode.right);
          findNode.currentNode.key = successor.subtree.key;
          successor.parent.left = null;
          this.length--;
        }
      } else {
        return new Error("Node not found.");
      }
    }
  }

  /**
   * Find minimum node of the given subtree. If subtree is not passed then
   * @param {BST} subtree
   * @returns {BST, BST} returns min node and its parent
   */
  findMin(subtree = this.root) {
    let parent;
    while (subtree.left) {
      parent = subtree;
      subtree = subtree.left;
    }
    return { subtree, parent };
  }

  /**
   * Looks for a value in the BST.
   * @param {string|number} val
   * @return {object} response
   */
  lookup(val: T) {
    let response: {
      hasVal: boolean;
      currentNode: BSTNode<T>;
      parentNode: BSTNode<T>;
    } = { hasVal: false, currentNode: null, parentNode: null };
    const lookRecursively = (node = this.root, parent: BSTNode<T> = null) => {
      if (node) {
        if (node.key === val) {
          response.hasVal = true;
          response.currentNode = node;
          response.parentNode = parent;
        } else if (node.left && node.key > val) {
          lookRecursively(node.left, node);
        } else if (node.right && node.key < val) {
          lookRecursively(node.right, node);
        }
      }
    };

    lookRecursively();
    return response;
  }

  /**
   * Returns height of the Node
   * @param {BSTNode<T>} node
   * @return {number} height
   */
  height(node: BSTNode<T> = this.root): number {
    if (node === null) {
      return -1;
    }

    return Math.max(this.height(node.left), this.height(node.right)) + 1;
  }

  /**
   * Print the values of the BST in specific order
   * @param {string} type - value of type can be inOrder, preOrder, postOrder, levelOrder
   */
  traverse(type: string) {
    let retVal;
    switch (type) {
      case "inOrder":
        retVal = this[inOrderTraversal]();
        break;
      case "preOrder":
        retVal = this[preOrderTraversal]();
        break;
      case "postOrder":
        retVal = this[postOrderTraversal]();
        break;
      case "levelOrder":
        retVal = this[levelOrderTraversal]();
        break;
      default:
        retVal = new Error(
          "Type should be one of inOrder, preOrder, postOrder or levelOrder"
        );
        break;
    }

    return retVal;
  }

  /**
   * Inorder traversal - Left, Root, Right
   * Always returns a sorted array
   */
  [inOrderTraversal](subtree = this.root) {
    const traversalList: T[] = [];
    const recurseTraversal = (node: BSTNode<T>) => {
      if (node) {
        recurseTraversal(node.left);
        traversalList.push(node.key);
        recurseTraversal(node.right);
      }
    };

    recurseTraversal(subtree);
    return traversalList;
  }

  /**
   * Preorder traversal - Root, Left, Right
   */
  [preOrderTraversal](subtree = this.root) {
    const traversalList: T[] = [];
    const recurseTraversal = (node: BSTNode<T>) => {
      if (node) {
        traversalList.push(node.key);
        recurseTraversal(node.left);
        recurseTraversal(node.right);
      }
    };

    recurseTraversal(subtree);
    return traversalList;
  }

  /**
   * Postorder traversal - Left, Right, Root
   */
  [postOrderTraversal](subtree = this.root) {
    const traversalList: T[] = [];
    const recurseTraversal = (node: BSTNode<T>) => {
      if (node) {
        recurseTraversal(node.left);
        recurseTraversal(node.right);
        traversalList.push(node.key);
      }
    };

    recurseTraversal(subtree);
    return traversalList;
  }

  /**
   * Levelorder traversal - BFS
   */
  [levelOrderTraversal]() {
    const bfsTraversalList = [];
    const traversalQueue = new Queue<BSTNode<T>>();

    if (this.root !== null) {
      traversalQueue.enqueue(this.root);
    }

    while (!traversalQueue.isEmpty()) {
      let presentNode = traversalQueue.top();
      if ((presentNode as BSTNode<T>).left) {
        traversalQueue.enqueue((presentNode as BSTNode<T>).left);
      }
      if ((presentNode as BSTNode<T>).right) {
        traversalQueue.enqueue((presentNode as BSTNode<T>).right);
      }
      bfsTraversalList.push((presentNode as BSTNode<T>).key);

      traversalQueue.dequeue();
    }

    return bfsTraversalList;
  }
}
