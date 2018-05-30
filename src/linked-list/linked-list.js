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
  set next(node) {
    this._next = node;
  }
}


const _size = Symbol('size');
const _head = Symbol('head');

export class LinkedList {
  constructor() {
    this[_size] = 0;
    this[_head] = null;
  }

  *[Symbol.iterator]() {
    let element = this.head;

    while (element !== null) {
      yield element.key;
      element = element.next;
    }
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

  search(item) {
    return this._search(item).found;
  }

  insert(item) {
    if(this.isEmpty()) {
      this.insertFirst(item);
    } else {
      this.insertLast(item);
    }
    this[_size] += 1;
  }

  insertLast(item) {
    let el = this[_head];
    while(el && el.next !== null) {
      el = el.next;
    }

    el.next = new Node(item);
  }

  insertFirst(item) {
    this[_head] = new Node(item);
  }

  insertBefore(item, before) {
    const {prev, curr, found} = this._search(before);

    if(found) {
      const node = new Node(item);
      if(prev === null) {
        this[_head] = node;
      } else {
        prev.next = node;
      }
      node.next = curr;
      this[_size] += 1;
    }
  }
  insertAfter(item, after) {
    const {curr, next, found} = this._search(after);

    if(found) {
      curr.next = new Node(item);
      curr.next.next = next;
      this[_size] += 1;
    }
  }
  remove(item) {
    const {prev, next, found} = this._search(item);
    if(found) {
      if(prev === null) {
        this[_head] = next;
      } else {
        prev.next = next;
      }
      this[_size] -= 1;
    }
  }

  _search(item) {
    let prev = null, curr = this.head, next = null, found = false;
    while(curr !== null && !found) {
      // TODO: Check for Object and Array as well
      if(curr.key === item) {
        next = curr.next;
        found = true;
        break;
      }
      prev = curr;
      curr = curr.next;
    }

    return {prev, curr, next, found};
  }
}
