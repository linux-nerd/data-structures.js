declare namespace DataStructures {
  interface BST {
    insert(val: string | number): void;
    lookup(val: string | number): { hasValue: boolean, currentNode: BST, parentNode: BST };
    traverse(type: string): Array<number | string> | Error;
    delete(val: string | number): Error | void;
  }

  class BSTNode {
    constructor(key: string | number, left?: BST, right?: BST);
  }
}