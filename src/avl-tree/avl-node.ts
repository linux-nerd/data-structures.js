export abstract class AVLNode<T> {
  private left: AVLNode<T>;
  private right: AVLNode<T>;
  private leftHeight: number;
  private rightHeight: number;
  private value: number;
  private parent: AVLNode<T>


  constructor(value: number) {
    this.left = null;
    this.right = null;
    this.parent = null;
    this.leftHeight = 0;
    this.rightHeight = 0;
    this.value = value;
  }

  public balanceFactor(): number {
    return (this.rightHeight - this.leftHeight);
  }

  public nodeHeight(): number {
    return (this.rightHeight > this.leftHeight) ? this.rightHeight : this.leftHeight;
  }

  public setNodeHeights(): void {
    if (this.right == null) {
      this.rightHeight = 0;
    } else {
      this.rightHeight = this.right.nodeHeight() + 1;
    }

    if (this.left == null) {
      this.leftHeight = 0;
    } else {
      this.leftHeight = this.left.nodeHeight() + 1;
    }
  }

  public abstract compareTo(o: AVLNode<number>): number

  /* #region(collapsed) Getter and Setter */
  public getLeft(): AVLNode<T> {
    return this.left;
  }

  public setLeft(left: AVLNode<T>): void {
    this.left = left;
  }

  public getRight(): AVLNode<T> {
    return this.right;
  }

  public setRight(right: AVLNode<T>): void {
    this.right = right;
  }

  public getLeftHeight(): number {
    return this.leftHeight;
  }

  public setLeftHeight(leftHeight: number): void {
    this.leftHeight = leftHeight;
  }

  public getRightHeight(): number {
    return this.rightHeight;
  }

  public setRightHeight(rightHeight: number): void {
    this.rightHeight = rightHeight;
  }

  public getValue(): number {
    return this.value;
  }
  public getParent(): AVLNode<T> {
    return this.parent;
  }

  public setParent(parent: AVLNode<T>): void {
    this.parent = parent;
  }

  /* #endregion */

}