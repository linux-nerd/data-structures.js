const _stack = Symbol('stack');
import { LinkedList } from "../linked-list/linked-list";

/**
 * Linked List implementation of Stack
 */
export class Stack {
  constructor() {
    this[_stack] = new LinkedList;
  }

  get stack() {
    return this[_stack];
  }

  push(item) {
    this[_stack].insertFirst(item);
  }

  pop() {
    if (!this.isEmpty()) {
      return this[_stack].removeFirst().key;
    }

  }

  peek() {
    if (!this.isEmpty()) {
      return this[_stack].head.key;
    }
  }

  size() {
    return this[_stack].size();
  }

  isEmpty() {
    return this.size() === 0;
  }
}