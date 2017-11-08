const _queue = Symbol('queue');

export class Queue {
  constructor() {
    this[_queue] = [];
  }
  get queue() {
    return this[_queue];
  }
  enqueue(o) {
    this[_queue].unshift(o);
  }
  dequeue() {
    if (this.isEmpty()) {
      return new Error('The Queue is Empty');
    } else {
      this[_queue].pop();
    }
  }

  size() {
    return this[_queue].length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  top() {
    return !this.isEmpty() ? this[_queue][this.size() - 1] : new Error('The Queue is Empty');
  }

  clear() {
    this[_queue].length = 0;
  }
}