import { LinkedList } from './linked-list';

describe('Linked List', () => {
  let list;
  beforeEach(() => {
    list = new LinkedList;
  });

  it('should create a linked list object', () => {
    expect(list).toBeDefined();
    expect(list.size()).toBe(0);
    expect(list.head).toBe(null);
    expect(list.isEmpty()).toBeTruthy();
  });

  it('should insert first item in the linked list', () => {
    spyOn(list, 'insertFirst').and.callThrough();
    list.insert('firstVal');

    expect(list.insertFirst).toHaveBeenCalled();
    expect(list.insertFirst).toHaveBeenCalledWith('firstVal');
    expect(list.size()).toBe(1);
    expect(list.isEmpty()).toBeFalsy();
    expect(list.head.key).toContain('firstVal');
    expect(list.head.next).toBe(null);
  });

  describe('When first item is inserted', () => {
    beforeEach(() => {
      list.insert('firstVal');
    });

    it('should insert items at the end', () => {
      spyOn(list, 'insertLast').and.callThrough();
      expect(list.size()).toBe(1);
      list.insert('secondVal');

      expect(list.insertLast).toHaveBeenCalled();
      expect(list.insertLast).toHaveBeenCalledWith('secondVal');
      expect(list.size()).toBe(2);
      expect(list.head.next.key).toBe('secondVal');
      expect(list.head.next.next).toBe(null);
    });

    it('should insert item after specified item', () => {
      list.insertAfter('secondVal', 'firstVal');
      expect(list.size()).toBe(2);
      expect(list.search('secondVal')).toBeTruthy();

      list.insertAfter('thirdVal', 'xyz');
      expect(list.size()).toBe(2);
      expect(list.search('thirdVal')).toBeFalsy();

      list.insertAfter('thirdVal', 'firstVal');
      expect(list.size()).toBe(3);
      expect(list.search('thirdVal')).toBeTruthy();

      expect([...list][1]).toContain('thirdVal');
      expect([...list][2]).toContain('secondVal');
    });

    it('should insert item before specified item', () => {
      list.insertBefore('secondVal', 'firstVal');
      expect(list.size()).toBe(2);
      expect(list.search('secondVal')).toBeTruthy();

      list.insertBefore('thirdVal', 'firstVal');
      expect(list.size()).toBe(3);
      expect(list.search('thirdVal')).toBeTruthy();

      list.insertBefore('forthVal', 'xyz');
      expect(list.size()).toBe(3);
      expect(list.search('forthVal')).toBeFalsy();
    });
  });

  it('should search for item', () => {
    expect(list.search('A')).toBeFalsy();

    list.insert('A');
    list.insert('B');
    list.insert('C');

    expect(list.search('B')).toBeTruthy();
    expect(list.search('C')).toBeTruthy();
    expect(list.search('D')).toBeFalsy();
  });

  it('should remove items from list', () => {
    expect(list.size()).toBe(0);

    list.insert('A');
    list.insert('B');
    list.insert('C');
    expect(list.size()).toBe(3);

    list.remove('B');
    expect(list.size()).toBe(2);
    expect(list.search('B')).toBeFalsy();

    list.remove('A');
    expect(list.size()).toBe(1);
    expect(list.search('A')).toBeFalsy();

    list.remove('C');
    expect(list.size()).toBe(0);
    expect(list.search('C')).toBeFalsy();
  });

});
