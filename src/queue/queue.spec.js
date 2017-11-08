import { Queue } from './queue';

describe('Queue', () => {
  let q;
  beforeEach(() => {
    q = new Queue;
  });

  it('should create a new queue', () => {
    expect(q).toBeDefined();
    expect(q.size()).toBe(0);
    expect(q.isEmpty()).toBeTruthy();
    expect(q.queue).toEqual([]);
  });

  it('should insert values in the queue', () => {
    q.enqueue('a');
    expect(q.size()).toBe(1);
    expect(q.isEmpty()).toBeFalsy();
    expect(q.queue).toEqual(['a']);

    q.enqueue('b');
    expect(q.size()).toBe(2);
    expect(q.isEmpty()).toBeFalsy();
    expect(q.queue).toEqual(['b', 'a']);
  });

  describe('Dequeue, Top and Clear functionality', () => {
    beforeEach(() => {
      q.enqueue('a');
      q.enqueue('b');
      q.enqueue('c');
    });

    it('should dequeue value', () => {
      expect(q.size()).toBe(3);
      expect(q.queue).toEqual(['c', 'b', 'a']);

      q.dequeue();
      expect(q.size()).toBe(2);
      expect(q.queue).toEqual(['c', 'b']);

      q.dequeue();
      expect(q.size()).toBe(1);
      expect(q.queue).toEqual(['c']);

      q.dequeue();
      expect(q.size()).toBe(0);
      expect(q.queue).toEqual([]);

      expect(q.dequeue().message).toBe('The Queue is Empty')
    });

    it('should remove all elements from the queue', () => {
      expect(q.size()).toBe(3);
      expect(q.queue).toEqual(['c', 'b', 'a']);

      q.clear();
      expect(q.size()).toBe(0);
      expect(q.queue).toEqual([]);
    });

    it('should return top element from the queue', () => {
      expect(q.size()).toBe(3);
      expect(q.queue).toEqual(['c', 'b', 'a']);
      expect(q.top()).toBe('a');
    });

    it('should return error message The Queue is Empty when top is fetched from an empty queue', () => {
      expect(q.size()).toBe(3);

      q.clear();
      expect(q.size()).toBe(0);

      expect(q.top().message).toBe('The Queue is Empty');
    });
  });
});