declare namespace DataStructures {
  interface BST {
    insert(val: string | number, details?: object): void;
    lookup(val: string | number): { hasValue: boolean, currentNode: BST, parentNode: BST };
    traverse(type: string): Array<number | string> | Error;
    delete(val: string | number): Error | void;
    findMin(subtree: BST): { subtree: BST, parent; BST };
    len(): number;
  }

  class BSTNode {
    constructor(key: string | number, details?: object, left?: BST, right?: BST);
    key(): number | string;
    key(val: number | string): void;
    left(): BST;
    left(node: BST): void;
    right(): BST;
    right(node: BST): void;
  }
}