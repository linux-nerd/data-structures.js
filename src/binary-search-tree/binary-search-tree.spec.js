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
    expect(bst.len).toBe(0);
  });

  describe('Insertion operation', () => {
    it('should insert values in the BST', () => {
      bst.insert(5);
      expect(bst.root.key).toBe(5);
      expect(bst.len).toBe(1);

      bst.insert(7);
      expect(bst.root.right.key).toBe(7);
      expect(bst.len).toBe(2);

      bst.insert(3);
      expect(bst.root.left.key).toBe(3);
      expect(bst.len).toBe(3);
    });
  });

  describe('Lookup operation', () => {
    beforeEach(() => {
      bst.insert(5);
      bst.insert(6);
      bst.insert(4);
      bst.insert(2);
    });

    it('should lookup for value 6 in the bst and return the node with key 6 and its parent node', () => {
      const findNode = bst.lookup(6);
      expect(findNode.hasVal).toBeTruthy();
      expect(findNode.currentNode.key).toBe(6);
      expect(findNode.parentNode.key).toBe(5);
    });

    it('should lookup for value 100 in the bst and should return the currentNode and parentNode as null', () => {
      const findNode = bst.lookup(100);
      expect(findNode.hasVal).toBeFalsy();
      expect(findNode.currentNode).toBe(null);
      expect(findNode.parentNode).toBe(null);
    });

    it('should lookup for value 5 and should return currentNode as 5 and parentNode as null', () => {
      const findNode = bst.lookup(5);
      expect(findNode.hasVal).toBeTruthy();
      expect(findNode.currentNode.key).toBe(5);
      expect(findNode.parentNode).toBe(null);
    });
  });

  describe('Delete operation', () => {
    beforeEach(() => {
      bst.insert(11);
      bst.insert(6);
      bst.insert(8);
      bst.insert(4);
      bst.insert(5);
      bst.insert(10);
      bst.insert(19);
      bst.insert(17);
      bst.insert(43);
      bst.insert(31);
      bst.insert(49);
    });

  });
});