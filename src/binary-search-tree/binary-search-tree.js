/**
 * This creates a node
 * @name BSTNode
 * @param key
 * @param left
 * @param right
 * @return BSTNode
 */
export class BSTNode {
  constructor(key, left = null, right = null) {
    // the constructor creates the leaf node
    this._key = key;
    this._left = left;
    this._right = right;
  }

  /* Getter and Setter for key */
  get key() { return this._key; }
  set key(key) { this._key = key; }

  /* Getter and Setter for left sub tree */
  get left() { return this._left; }
  set left(left) { this._left = left; }

  /* Getter and Setter for right sub tree */
  get right() { return this._right; }
  set right(right) { this._right = right; }
}

const inOrderTraversal = Symbol('inorder');
const preOrderTraversal = Symbol('preorder');
const postOrderTraversal = Symbol('postorder');
const length = Symbol('length');

export class BST {
  constructor() {
    this.root = null;
    this[length] = 0;
  }

  get len() {
    return this[length];
  }

  /**
   * Insert value in the BST
   * @param {*} val
   */
  insert(val) {
    // create a BST node
    const bstNode = new BSTNode(val);

    /**
     * @name recurseBST
     * @param {*} node - optional, default value is this.root
     */
    const recurseBST = (node = this.root) => {
      if (node.key > val && !node.left) {
        node.left = bstNode;
        this[length]++;
      } else if (node.key > val) {
        recurseBST(node.left);
      } else if (node.key < val && !node.right) {
        node.right = bstNode;
        this[length]++;
      } else if (node.key < val) {
        recurseBST(node.right);
      }
    }

    if (!this.root) {
      // if the root is null then assign the created node to the root.
      this.root = bstNode;
      this[length]++;
    } else {
      recurseBST();
    }
  }

  delete(val) {
    if (!this.root) {
      return new Error('BST is empty. Cannot delete from empty BST');
    } else {
      let findNode = this.lookup(val);
      if (findNode.hasVal) {
        // case 1
        // when the node has no children or when its a leaf
        // then simply delete the node
        if (!findNode.currentNode.left && !findNode.currentNode.right) {
          const direction = findNode.parentNode.key > val ? 'left' : 'right';
          findNode.parentNode[direction] = null;
          this[length]--;
        }
        // case 2
        // when node has just 1 child
        // Simply delete the key and point the parent to the child
        else if (!!findNode.currentNode.left ^ !!findNode.currentNode.right) {
          const parentToCurNodeDir = findNode.parentNode.key > val ? 'left' : 'right';
          const curNodeToChildDir = findNode.currentNode.left ? 'left' : 'right';
          findNode.parentNode[parentToCurNodeDir] = findNode.currentNode[curNodeToChildDir];
          this[length]--;
        }
        // case 3
        // when node has both left and right children
        // Find minimum value in the right subtree of the node containing the key to be deleted.
        // Replace the key to be deleted with the min value.
        // Then delete the min val from the right subtree.
        else if (findNode.currentNode.left && findNode.currentNode.right) {

        }
      } else {
        return new Error('Node not found.');
      }
    }
  }

  /**
   * Looks for a value in the BST.
   * @param {string|number} val
   * @return {object} response
   */
  lookup(val) {
    let response = { hasVal: false, currentNode: null, parentNode: null };
    const lookRecursively = (node = this.root, parent = null) => {
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

    lookRecursively();
    return response;
  }

  /**
   * Print the values of the BST in specific order
   * @param {string} type - value of type can be inOrder, preOrder, postOrder
   */
  traverse(type) {
    let retVal;
    switch (type) {
      case 'inOrder':
        retVal = this[inOrderTraversal]();
        break;
      case 'preOrder':
        retVal = this[preOrderTraversal]();
        break;
      case 'postOrder':
        retVal = this[postOrderTraversal]();
        break;
      default:
        retVal = new Error('Type should be one of inOrder, preOrder or postOrder');
        break;
    }

    return retVal;
  }

  [inOrderTraversal]() {

  }

  [preOrderTraversal]() {

  }

  [postOrderTraversal]() {

  }
}