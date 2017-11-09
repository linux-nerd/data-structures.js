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

  describe('Height of the node', () => {
    beforeEach(() => {
      bst.insert(5);
      bst.insert(6);
      bst.insert(4);
      bst.insert(2);
    });

    it('should have height of node 4 as 1', () => {
      expect(bst.height(bst.lookup(4).currentNode)).toBe(1);
    });

    it('should have height of tree = 2', () => {
      expect(bst.height()).toBe(2);
    });

    it('should have height 0 of leaf nodes', () => {
      expect(bst.height(bst.lookup(6).currentNode)).toBe(0);
    });

    it('should have height 0 of leaf nodes', () => {
      expect(bst.height(bst.lookup(2).currentNode)).toBe(0);
    });
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

    it('should have 11 nodes in the bst', () => {
      expect(bst.len).toBe(11);
    });

    it('should delete leaf with value 5', () => {
      expect(bst.len).toBe(11);

      const lookUpFor5 = bst.lookup(5);
      expect(lookUpFor5.hasVal).toBeTruthy();
      expect(lookUpFor5.parentNode.right).toBeDefined();

      bst.delete(5);
      expect(bst.len).toBe(10);
      expect(bst.lookup(5).hasVal).toBeFalsy();
      expect(lookUpFor5.parentNode.right).toBe(null);
    });

    it('should delete node 8, with one child', () => {
      expect(bst.len).toBe(11);

      const lookUpFor8 = bst.lookup(8);
      expect(lookUpFor8.hasVal).toBeTruthy();
      expect(lookUpFor8.parentNode.right).toBeDefined();
      expect(lookUpFor8.currentNode.right).toBeDefined();

      bst.delete(8);
      expect(bst.len).toBe(10);
      expect(bst.lookup(8).hasVal).toBeFalsy();
      expect(lookUpFor8.parentNode.right.key).toBe(10);
    });

    it('should delete node 19, with two children', () => {
      expect(bst.len).toBe(11);

      const lookupFor19 = bst.lookup(19);

      expect(lookupFor19.hasVal).toBeTruthy();
      expect(lookupFor19.parentNode.right).toBeDefined();
      expect(lookupFor19.currentNode.right).toBeDefined();
      expect(lookupFor19.currentNode.left).toBeDefined();

      const successor = bst.findMin(lookupFor19.currentNode.right);
      expect(successor.subtree.key).toBe(31);

      const dir = lookupFor19.currentNode.key > lookupFor19.parentNode.key ? 'right' : 'left';

      bst.delete(19);
      expect(bst.len).toBe(10);
      expect(bst.lookup(19).hasVal).toBeFalsy();
      expect(lookupFor19.parentNode[dir].key).toBe(successor.subtree.key);
    });
  });

  describe('Traversal Operation', () => {
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
    it('should return inorder list', () => {
      expect(bst.traverse('inOrder')).toEqual([4, 5, 6, 8, 10, 11, 17, 19, 31, 43, 49]);
    });

    it('should return preorder list', () => {
      expect(bst.traverse('preOrder')).toEqual([11, 6, 4, 5, 8, 10, 19, 17, 43, 31, 49]);
    });

    it('should return postorder list', () => {
      expect(bst.traverse('postOrder')).toEqual([5, 4, 10, 8, 6, 17, 31, 49, 43, 19, 11]);
    });

    it('should return bfs list', () => {
      expect(bst.traverse('levelOrder')).toEqual([11, 6, 19, 4, 8, 17, 43, 5, 10, 31, 49]);
    });
  });
});