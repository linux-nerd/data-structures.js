const createList = require('./linked-lists/create-linked-list').createList;
const createLinkedListWithLoop = require('./linked-lists/create-linked-list').createLinkedListWithLoop;

// test for find-nth-from-last
console.log(require('./linked-lists/find-nth-from-last')(createList(), 7));
console.log(require('./linked-lists/find-nth-from-last')(createList(), 3));

// reverse a linked list
console.log(JSON.stringify(require('./linked-lists/reverse-list')(createList().head)));
console.log(JSON.stringify(require('./linked-lists/reverse-list')(createList(2, 3, 6, 1).head)));

console.log(require('./linked-lists/check-for-loop')(createLinkedListWithLoop()));
console.log(require('./linked-lists/check-for-loop')(createList()));