export abstract class AVLNode<T> {
  private left: AVLNode<T>;
  private right: AVLNode<T>;
  private leftHeight: number;
  private rightHeight: number;
  private value: number;

  constructor(value: number) {
    this.left = null;
    this.right = null;
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
  /* #endregion */

}