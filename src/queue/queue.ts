export class Queue<T> {
  private _queue: T[];
  constructor() {
    this._queue = [];
  }
  get queue(): T[] {
    return this._queue;
  }
  enqueue(o: T) {
    this._queue.unshift(o);
  }
  dequeue(): void | Error {
    if (this.isEmpty()) {
      return new Error("The Queue is Empty");
    } else {
      this._queue.pop();
    }
  }

  size(): number {
    return this._queue.length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  top(): T | Error {
    return !this.isEmpty()
      ? this._queue[this.size() - 1]
      : new Error("The Queue is Empty");
  }

  clear() {
    this._queue.length = 0;
  }
}
