declare namespace DataStructures {
  interface BST {
    insert(val: string | number): void;
    lookup(val: string | number): { hasValue: boolean, currentNode: BST, parentNode: BST };
    print(type: string): void;
    delete(val: string | number): Error | void;
  }

  class BSTNode {
    constructor(key: string | number, left?: BST, right?: BST);
  }
}