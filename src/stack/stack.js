const _stack = Symbol('stack');
import { LinkedList } from "../linked-list/linked-list";

/**
 * Linked List implementation of Stack
 */
export class Stack {
  constructor() {
    this[_stack] = new LinkedList;
  }

  /**
   * getter for _stack object
   */
  get stack() {
    return this[_stack];
  }

  /**
   * Push an item on top of the stack.
   * Ideally the insertFirst method of linked list is called to add the item in the first position in linked list
   * @param {any} item 
   */
  push(item) {
    this[_stack].insertFirst(item);
  }

  /**
   * Pop the top item from the stack
   * Ideally removeFirst method of stack is called
   */
  pop() {
    if (!this.isEmpty()) {
      return this[_stack].removeFirst().key;
    }
  }

  /**
   * Returns the top item of the stack without popping it
   */
  peek() {
    if (!this.isEmpty()) {
      return this[_stack].head.key;
    }
  }

  /**
   * Returns the size of the stack
   */
  size() {
    return this[_stack].size();
  }

  /**
   * Checks if the stack is empty
   */
  isEmpty() {
    return this.size() === 0;
  }
}