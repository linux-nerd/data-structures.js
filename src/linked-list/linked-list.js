export class Node {
  constructor(key, next = null) {
    this._key = key;
    this._next = next;
  }

  get key() {
    return this._key
  }
  get next() {
    return this._next;
  }
}


const _size = Symbol('size');
const _head = Symbol('head');

export class LinkedList {
  constructor() {
    this[_size] = 0;
    this[_head] = null;
  }

  get head() {
    return this[_head];
  }

  size() {
    return this[_size];
  }

  isEmpty() {
    return this.size() === 0;
  }

  search(item) { }
  insertLast(item) { }
  insertFirst(item) { }
  insertBefore(item, before) { }
  insertAfter(item, after) { }
  remove(item) { }
}