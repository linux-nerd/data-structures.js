import { AVLTree } from "../avl"
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

describe("AVL Tree", () => {
  describe("Insert operation", () => {
    const avlTree = new AVLTree<number>();

    it("should have null node", () => {
      const root = avlTree.getRoot();
      expect(root).toBe(null);
    });

    it("should add a node as root node in an empty tree", () => {
      const isNodeInsterted = avlTree.insert(new Int(5));
      const root = avlTree.getRoot();
      expect(isNodeInsterted).toBeTruthy();
      expect(root.getValue()).toBe(5);
      expect(root.nodeHeight()).toBe(0);
    });

    it("should add a left child to the avl tree", () => {
      const isNodeInsterted = avlTree.insert(new Int(3));
      const left = avlTree.getRoot().getLeft();
      expect(isNodeInsterted).toBeTruthy();
      expect(left.getValue()).toBe(3);
      expect(avlTree.getRoot().nodeHeight()).toBe(1);
    });

    it("should add a right child to the avl tree", () => {
      const isNodeInsterted = avlTree.insert(new Int(9));
      const right = avlTree.getRoot().getRight();
      expect(isNodeInsterted).toBeTruthy();
      expect(right.getValue()).toBe(9);
      expect(avlTree.getRoot().nodeHeight()).toBe(1);
    });
  })
})