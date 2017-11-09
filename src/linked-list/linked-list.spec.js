import { LinkedList } from './linked-list';

describe('Linked List', () => {
  let list;
  beforeEach(() => {
    list = new LinkedList
  });

  it('should create a linked list object', () => {
    expect(list).toBeDefined();
    expect(list.size()).toBe(0);
    expect(list.head).toBe(null);
    expect(list.isEmpty()).toBeTruthy();
  });
});