const llist = require('./linked-lists/create-linked-list');

// test for find-nth-from-last
console.log(require('./linked-lists/find-nth-from-last')(llist, 7));
console.log(require('./linked-lists/find-nth-from-last')(llist, 3));