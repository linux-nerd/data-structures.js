var ds = require('../lib/data-structures.js');
var BST = ds.BST;

var bst = new BST;

bst.insert(11);
bst.insert(6);
bst.insert(8);
bst.insert(4);
bst.insert(5);
bst.insert(10);
bst.insert(19);
bst.insert(17);
bst.insert(43);
bst.insert(31);
bst.insert(49);

console.log(bst.traverse('inOrder'));