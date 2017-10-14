import { BST } from './binary-search-tree';

describe('Binary Search Tree', () => {
  let bst;

  beforeEach(() => {
    bst = new BST();
  });

  it('should create bst object', () => {
    expect(bst).toBeDefined();
  });

  it('should create BST with null root', () => {
    expect(bst.root).toBe(null);
  });

  describe('Insertion', () => {
    it('should insert values in the BST', () => {
      bst.insert(5);
      expect(bst.root.key).toBe(5);

      bst.insert(7);
      expect(bst.root.right.key).toBe(7);

      bst.insert(3);
      expect(bst.root.left.key).toBe(3);
    });
  });
});