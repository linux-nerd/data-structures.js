import { AVLTree } from './avl-tree';

describe('AVL Tree', () => {
  let avlTree;
  beforeEach(() => {
    avlTree = new AVLTree;
  });

  it('should create an avl tree', () => {
    expect(avlTree).toBeDefined();
    expect(avlTree.len).toBe(0);
    expect(avlTree.root).toBe(null);
  });

  it('should insert nodes in the tree', () => {
    avlTree.insert(5);
    expect(avlTree.len).toBe(1);
    expect(avlTree.root.key).toBe(5);
    expect(avlTree.root.height).toBe(0);

    avlTree.insert(9);
    expect(avlTree.len).toBe(2);
    expect(avlTree.root.right.key).toBe(9);
    expect(avlTree.root.right.height).toBe(0);
    expect(avlTree.root.height).toBe(1);

    avlTree.insert(9);
    expect(avlTree.len).toBe(2);
    expect(avlTree.root.right.key).toBe(9);
    expect(avlTree.root.right.height).toBe(0);
    expect(avlTree.root.height).toBe(1);
  });
});

