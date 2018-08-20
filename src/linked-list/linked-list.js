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
const _tail = Symbol('tail');

export class LinkedList {
  constructor() {
    this[_size] = 0;
    this[_head] = null;
    this[_tail] = null;
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

  get tail() {
    return this[_tail];
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
    if (this.isEmpty()) {
      this.insertFirst(item);
    } else {
      this.insertLast(item);
    }

  }

  insertLast(item) {
    let el = this[_head];
    while (el && el.next !== null) {
      el = el.next;
    }

    el.next = new Node(item);
    this[_tail] = el.next;
    this[_size] += 1;
  }

  insertFirst(item) {
    if (this.isEmpty()) {
      this[_head] = new Node(item);
      this[_tail] = this[_head];
    } else {
      const currNode = this[_head];
      this[_head] = new Node(item);
      this[_head].next = currNode;
    }
    this[_size] += 1;
  }

  insertBefore(item, before) {
    const { prev, curr, found } = this._search(before);

    if (found) {
      const node = new Node(item);
      if (prev === null) {
        this[_head] = node;
      } else {
        prev.next = node;
      }
      node.next = curr;
      this[_size] += 1;
    }
  }
  insertAfter(item, after) {
    const { curr, next, found } = this._search(after);

    if (found) {
      curr.next = new Node(item);
      curr.next.next = next;
      if (next === null) {
        this[_tail] = curr.next;
      }
      this[_size] += 1;
    }
  }
  remove(item) {
    const { prev, next, found } = this._search(item);
    if (found) {
      if (prev === null) {
        this[_head] = next;
      } else {
        prev.next = next;
        if (next === null) {
          this[_tail] = prev;
        }
      }
      this[_size] -= 1;
    }
  }

  removeFirst() {
    if (!this.isEmpty()) {
      const currNode = this[_head];
      this[_head] = currNode.next;
      currNode.next = null;
      this[_size] -= 1;
      if (this[_head] === null) {
        this[_tail] = null;
      }
      return currNode;
    }
  }

  _search(item) {
    let prev = null, curr = this.head, next = null, found = false;
    while (curr !== null && !found) {
      // TODO: Check for Object and Array as well
      if (curr.key === item) {
        next = curr.next;
        found = true;
        break;
      }
      prev = curr;
      curr = curr.next;
    }

    return { prev, curr, next, found };
  }
}
