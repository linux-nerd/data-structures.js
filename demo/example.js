var ds = require('./lib/data-structures.js');
var BST = ds.BST;

var bst = new BST;

bst.insert(5);
bst.insert(4);
bst.insert(6);
bst.insert(7);

bst.delete(6)

console.log(bst);