declare namespace DataStructures {
  interface BST {
    insert(val: string | number): void;
    lookup(val: string | number): { hasValue: boolean, currentNode: BST, parentNode: BST };
    traverse(type: string): Array<number | string> | Error;
    delete(val: string | number): Error | void;
    len(): number;
  }

  class BSTNode {
    constructor(key: string | number, left?: BST, right?: BST);
    key(): number | string;
    key(val: number | string): void;
    left(): BST;
    left(node: BST): void;
    right(): BST;
    right(node: BST): void;
  }
}