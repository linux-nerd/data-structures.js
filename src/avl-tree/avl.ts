import { AVLNode } from "./avl-node";

export interface IAVLTree<T> {
  insert(node: AVLNode<T>): boolean
  search(node: AVLNode<T>): boolean
  delete(node: AVLNode<T>): boolean
}

export class AVLTree<T> implements IAVLTree<T> {
  constructor(private root: AVLNode<T> = null) { }

  public insert(node: AVLNode<T>, root: AVLNode<T> = this.root): boolean {
    if (root == null) {
      this.root = node;
      return true;
    }

    if (node.compareTo(root) === 0) {
      return false;
    } else if (node.compareTo(root) > 0) {
      if (root.getRight() == null) {
        root.setRight(node);
        this.updateNodeAfterInsert(node, root);
        return true;
      } else {
        return this.insert(node, root.getRight());
      }
    } else {
      if (root.getLeft() == null) {
        root.setLeft(node);
        this.updateNodeAfterInsert(node, root);
        return true;
      } else {
        return this.insert(node, root.getLeft());
      }
    }
  }

  public search(node: AVLNode<T>): boolean {
    // TODO: Implement search
    return true;
  }
  public delete(node: AVLNode<T>): boolean {
    // TODO: Implement delete
    return true;
  }

  public getRoot(): AVLNode<T> {
    return this.root;
  }

  private updateNodeAfterInsert(node: AVLNode<T>, parent: AVLNode<T>): void {
    node.setParent(parent);
    node.setNodeHeights();
    parent.setNodeHeights()
  }
  private detectRotation(node: AVLNode<T>): void {
    // TODO: add logic
  }
  private leftRotation(node: AVLNode<T>): void {
    // TODO: add logic
  }
  private rightRotation(node: AVLNode<T>): void {
    // TODO: add logic
  }
  private leftRightRotation(node: AVLNode<T>): void {
    // TODO: add logic
  }
  private rightLeftRotation(node: AVLNode<T>): void {
    // TODO: add logic
  }
}