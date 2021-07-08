import { BST, BSTNode } from './binary-search-tree';

export class AVLNode extends BSTNode {
  constructor(key, details = null, left = null, right = null, height = 0) {
    super(key, details, left, right);
    this._height = height;
  }

  get height() { return this._height; }
  set height(h) { this._height = h; }
}

export const ROTATION = {
  LEFT_LEFT: 'll',
  LEFT_RIGHT: 'lr',
  RIGHT_RIGHT: 'rr',
  RIGHT_LEFT: 'rl'
};

export class AVLTree extends BST {
  insert(el, root = this.root) {

    if (this.root === null) {
      const node = new AVLNode(el);
      this.root = node;
      this.len = ++this.len;
      return;
    }

    if (root === null) {
      this.len = ++this.len;
      return new AVLNode(el);
    }

    if (el < root.key) {
      root.left = this.insert(el, root.left);
    } else if (el > root.key) {
      root.right = this.insert(el, root.right);
    } else {
      return root;
    }

    root.height = this.height(root);
    const balanceFactor = this.getBalanceState(root);

    if (balanceFactor > 1 || balanceFactor < -1) {
      this.rebalance(node);
    }
  }

  rebalance(node) {
    if (node.left.height - node.right.height > 1) {
      if (this.height(node.left.left) > this.height(node.left.right)) {
        this.rightRotate(node);
      } else {
        this.leftRightRotate(node);
      }
    } else {
      if (this.height(node.right.left) > this.height(node.right.right)) {
        this.leftRotate(node);
      } else {
        this.rightLeftRotate(node);
      }
    }
  }

  leftRotate(node) { }
  rightRotate(node) { }
  leftRightRotate(node) { }
  rightLeftRotate(node) { }

  getBalanceState(node) {
    const leftHeight = node.left ? node.left.height : 0;
    const rightHeight = node.right ? node.right.height : 0;

    return leftHeight - rightHeight;
  }
}