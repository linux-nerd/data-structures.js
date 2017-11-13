![Data Structures Logo](logo-small.jpg?raw=true "Title")


Data Structures in Javascript
-----------------------------
![Build Status](https://travis-ci.org/linux-nerd/data-structures.js.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/linux-nerd/data-structures.js/badge.svg)](https://coveralls.io/github/linux-nerd/data-structures.js)

# Background
There are neither a lot of resources on internet nor any book which guides and dictates best practices in the implementation of popular Data Structures using Javascript. The purpose of this library is to provide cooked implementation of populare data structures in javascript.

# Getting hands dirty
Clone the repo
```git clone https://github.com/linux-nerd/data-structures.js.git```

Install the dependencies
```npm install```

Run dev build
```npm run dev```

To execute unit test cases
```npm test```

Trigger production build
```npm run build```

# List of Data Structures
Data structures covered so far -
- [Binary Search Tree](#binary-search-tree)

# Contribution
Your contribution is highly appreciated. You can contribute in several ways -
* Opening an issue in the tracker
* Updating and adding documentaion
* Adding new features
* Adding demo

# Vision
Once development is complete. This library will work in -
* All supported Browsers
* Node

and can be written in -
* es5
* es6
* typescript

and will be published in
- npm
- bower


# <a name="binary-search-tree"></a>Binary Search Tree
Import BST class and instantiate it
```js
import { BST } from 'data-structures.js/lib/data-structures';
const bst = new BST
```

Insert values in binary search Tree
```js
bst.insert(5);
bst.insert(20);
bst.insert(10);
```
Find size of the binary search tree
```js
bst.len() // 3
```

Find an item in the binary search tree
```js
bst.lookup(10) // returns an object with keys hasVal, currentNode and parentNode
```

Height of the binary search tree or a node
```js
bst.height() //gives height of the BST 1
bst.height(bst.lookup(10).currentNode) // gives the height of the node - 0
```

Traverse the BST and return a List
```js
bst.traverse('inOrder') // traverse method expects a parameter - inOrder|preOrder|postOrder| levelOrder
```
Delete elements from binary search tree
```js
bst.delete(10);
bst.delete(20);
```
