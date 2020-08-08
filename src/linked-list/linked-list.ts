export class Node<T> {
  private _key: T;
  private _next: Node<T> | null;

  constructor(key: T, next: Node<T> | null = null) {
    this._key = key;
    this._next = next;
  }

  get key(): T {
    return this._key;
  }
  get next(): Node<T> {
    return this._next;
  }
  set next(node: Node<T>) {
    this._next = node;
  }
}

interface SearchReturn<T> {
  prev: Node<T>;
  curr: Node<T>;
  next: Node<T>;
  found: boolean;
}

export class LinkedList<T> {
  private _size: number;
  private _head: Node<T> | null;
  private _tail: Node<T> | null;

  constructor() {
    this._size = 0;
    this._head = null;
    this._tail = null;
  }

  *[Symbol.iterator]() {
    let element = this.head;

    while (element !== null) {
      yield element.key;
      element = element.next;
    }
  }

  get head(): Node<T> {
    return this._head;
  }

  get tail(): Node<T> {
    return this._tail;
  }

  size(): number {
    return this._size;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  search(item: T): boolean {
    return this._search(item).found;
  }

  insert(item: T) {
    if (this.isEmpty()) {
      this.insertFirst(item);
    } else {
      this.insertLast(item);
    }
  }

  insertLast(item: T) {
    let el = this._head;
    while (el && el.next !== null) {
      el = el.next;
    }

    el.next = new Node<T>(item);
    this._tail = el.next;
    this._size += 1;
  }

  insertFirst(item: T) {
    if (this.isEmpty()) {
      this._head = new Node(item);
      this._tail = this._head;
    } else {
      const currNode = this._head;
      this._head = new Node(item);
      this._head.next = currNode;
    }
    this._size += 1;
  }

  insertBefore(item: T, before: T) {
    const { prev, curr, found }: SearchReturn<T> = this._search(before);

    if (found) {
      const node = new Node(item);
      if (prev === null) {
        this._head = node;
      } else {
        prev.next = node;
      }
      node.next = curr;
      this._size += 1;
    }
  }
  insertAfter(item: T, after: T) {
    const { curr, next, found }: SearchReturn<T> = this._search(after);

    if (found) {
      curr.next = new Node(item);
      curr.next.next = next;
      if (next === null) {
        this._tail = curr.next;
      }
      this._size += 1;
    }
  }
  remove(item: T) {
    const { prev, next, found } = this._search(item);
    if (found) {
      if (prev === null) {
        this._head = next;
      } else {
        prev.next = next;
        if (next === null) {
          this._tail = prev;
        }
      }
      this._size -= 1;
    }
  }

  removeFirst(): Node<T> {
    if (!this.isEmpty()) {
      const currNode = this._head;
      this._head = currNode.next;
      currNode.next = null;
      this._size -= 1;
      if (this._head === null) {
        this._tail = null;
      }
      return currNode;
    }
  }

  private _search(item: T): SearchReturn<T> {
    let prev = null,
      curr = this.head,
      next = null,
      found = false;
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
