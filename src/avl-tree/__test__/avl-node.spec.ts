import { AVLNode } from "../avl-node";

class Int extends AVLNode<number> {
  constructor(value: number) {
    super(value)
  }

  public compareTo(o: AVLNode<number>): number {
    if (this.getValue() < o.getValue()) {
      return -1;
    } else if (this.getValue() > o.getValue()) {
      return 1;
    } else {
      return 0;
    }
  }
}

describe("Test for AVLNode", () => {
  let node: AVLNode<number>;
  let node1: AVLNode<number>;
  let node2: AVLNode<number>;
  let node3: AVLNode<number>;

  beforeEach(() => {
    node = new Int(5);
    node1 = new Int(4);
    node2 = new Int(5);
    node3 = new Int(6);
  });

  it("should create an AVL node of type number", () => {
    expect(node).toBeDefined();
    expect(node.getValue()).toBe(5);
    expect(node.getLeft()).toBe(null);
    expect(node.getRight()).toBe(null);
    expect(node.getLeftHeight()).toBe(0);
    expect(node.getRightHeight()).toBe(0);
    expect(node.nodeHeight()).toBe(0);
    expect(node.balanceFactor()).toBe(0);
    expect(node.compareTo(node1)).toBe(1);
    expect(node.compareTo(node2)).toBe(0);
    expect(node.compareTo(node3)).toBe(-1);
  });

  it("should calculate the hight correctly", () => {
    node.setLeft(node1);
    node.setRight(node3);
    node.setLeftHeight(1);
    node.setRightHeight(1)

    expect(node.getLeft()).toEqual(node1);
    expect(node.getRight()).toEqual(node3);
    expect(node.getLeftHeight()).toBe(1);
    expect(node.getRightHeight()).toBe(1);
    expect(node.nodeHeight()).toBe(1);
    expect(node.balanceFactor()).toBe(0);
  })
});