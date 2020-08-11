import { AVLNode } from "./avl-node";

export interface IAVLTree<T> {
  insert(node: AVLNode<T>): boolean
  search(node: AVLNode<T>): boolean
  delete(node: AVLNode<T>): boolean
}

export class AVLTree<T> implements IAVLTree<T> {
  constructor(private root: AVLNode<T> = null) { }

  public insert(node: AVLNode<T>): boolean { }
  public search(node: AVLNode<T>): boolean { }
  public delete(node: AVLNode<T>): boolean { }

  private detectRotation(node: AVLNode<T>): void { }
  private leftRotation(node: AVLNode<T>): void { }
  private rightRotation(node: AVLNode<T>): void { }
  private leftRightRotation(node: AVLNode<T>): void { }
  private rightLeftRotation(node: AVLNode<T>): void { }
}