declare namespace DataStructures {
  class BST {
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

  class AdjacencyList {
    constructor(isDiGraph: boolean);
    diGraph: boolean;
    edges: Map<string | number, BST>;
    addNode(node: string | number): void;
    removeNode(node: string | number): void;
    addEdge(fromVertex: string | number, toVertex: string | number, weight: number): void;
    removeEdge(fromVertex: string | number, toVertex: string | number): void | Error;
    getEdgeWeight(fromVertex: string | number, toVertex: string | number): number | Error;
  }

  class Queue {
    queue(): Array<any>;
    enqueue(o): void;
    dequeue(): Error | void;
    size(): number;
    isEmpty(): void;
    top(): any;
    clear(): void;
  }
}