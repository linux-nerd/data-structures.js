const LinkedList = require('@js-labs/data-structures/lib/ds').LinkedList;

// items for default linked list
const defaultList = [10, 20, 11, 2, 74, 12, 117, 112, 7]

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
}

module.exports = { createList };