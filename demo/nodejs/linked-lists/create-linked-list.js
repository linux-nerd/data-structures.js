const LinkedList = require('@js-labs/data-structures/lib/ds').LinkedList;

// items for default linked list
const defaultList = [10, 20, 11, 2, 74, 12, 117, 112, 7];
const defaultLoopAt = 12;

/**
 * Create a linked list
 * If the list items are provided then the list will be created based on those items else
 * a default list will be created
 * @param {number|string} list 
 */
const createList = (...list) => {
  const llist = new LinkedList;
  if (list.length === 0) {
    list = defaultList;
  }
  list.forEach(item => llist.insert(item));
  return llist;
};

const createLinkedListWithLoop = (loopAt, ...list) => {
  const llist = new LinkedList;
  let loopNode = null;
  if (list.length === 0) {
    list = defaultList;
    loopAt = defaultLoopAt;
  }

  const identifyLoopNode = (item) => {
    let head = llist.head;
    while (head !== null) {
      if (head.key === item) {
        loopNode = head;
        return;
      }
      head = head.next;
    }
  }

  list.forEach(item => {
    llist.insert(item);
    if (item === loopAt) {
      identifyLoopNode(item);
    }
  });

  let currentNode = llist.head;
  while (currentNode !== null) {
    if (currentNode.next === null) {
      currentNode.next = loopNode;
      return llist;
    }
    currentNode = currentNode.next;
  }

};

module.exports = { createList, createLinkedListWithLoop };