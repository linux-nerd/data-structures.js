![Data Structures Logo](logo-small.jpg?raw=true "Title")


Data Structures in Javascript
-----------------------------
![Build Status](https://travis-ci.org/linux-nerd/data-structures.js.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/linux-nerd/data-structures.js/badge.svg)](https://coveralls.io/github/linux-nerd/data-structures.js)

# Background
There are neither a lot of resources on internet nor any book which guides and dictates best practices in the implementation of popular Data Structures using Javascript. The purpose of this library is to provide cooked implementation of populare data structures in javascript.

# Installation
npm - `npm install es6-data-structures`

# Getting hands dirty
Clone the repo
`git clone https://github.com/linux-nerd/data-structures.js.git`

Install the dependencies
`npm install`

Run dev build
- For linux and darwin
`npm run dev`

- For windows
`npm run dev:win32`

To execute unit test cases
- For linux and darwin
`npm test`

- For windows
`npm test:win32`

Trigger production build
- For linux and darwin
`npm run build`

- For windows
`npm run build:win32`

# List of Data Structures
Data structures covered so far -
- [Binary Search Tree](#binary-search-tree)
- [Graph](#graph)
- [Queue](#queue)
- [Linked List](#link-list)

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
- ~~npm~~
- bower


# <a name="binary-search-tree"></a>Binary Search Tree
Import BST class and instantiate it

```js
import { BST } from 'es6-data-structures/lib/ds';
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
bst.len // 3
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

# <a name="graph"></a> Graph
Import Graph class and instantiate it and create an object of adjacency list implementation of Graph. To create a directed graph pass the string argument '**directed**'. If the Graph class is called without a parameter then by default its undirected graph.

```js
import { Graph } from 'es6-data-structures/lib/ds';
const graph = new Graph; // this will create an undirected Graph
const graph = new Graph('directed'); // this will create a directed graph or diGraph

const adjList = graph.createGraph('adjList'); // create Adjacency List implementation of graph
```

Add and remove a node to the graph

```js
// add a node
adjList.addNode('A');
adjList.addNode('B');

// remove a node
adjList.removeNode('A');
adjList.removeNode('B');
```

Add and remove an edge between two nodes to the graph. iF a node is not added, then it first adds the node and then create an edge.

```js
// add an edge
adjList.addEdge('A', 'B', 200); // it will add an edge between A and B of weight 200
adjList.addEdge('B', 'C'); // it will first add node C and then create an edge b/w B and C

// remove an edge
adjList.removeEdge('A', 'B');
adjList.removeEdge('B', 'C');
```

Find size of the graph.

```js
adjList.size // 3
```

Find weight of the edge in weighted graph

```js
adjList.getEdgeWeight('A', 'B');
```

# <a name="queue"></a> Queue

Import Queue class and create a queue object.

```js
import { Queue } from 'es6-data-structures/lib/ds';
const queue = new Queue;
```

Add and remove elements to and from the created queue respectively

```js
// add elements to the queue
queue.enqueue('A');
queue.enqueue(123);

// remove elements from the queue
queue.dequeue();
queue.dequeue();
```

Get size and top element in the queue

```js
queue.size() // 2
queue.top() // A
```

Clear the entire queue at once

```js
queue.clear() // this will empty the queue
```

# <a name="link-list"></a> Linked List

Import LinkedList data structure and create a list object.

```js
import { LinkedList } from 'es6-data-structures/lib/ds';
const list = new LinkedList;
```

Insert and Remove Items from the list

```js
// inserts item at the end of the list
list.insert('firstVal');
list.insert('SecondVal');

list.insertAfter('Mid', 'firstVal');  // insert Mid after firstVal
list.insertBefore('xyz', 'secondVal'); // insert xyz before secondVal

list.remove('firstVal') // removes firstVal from the list.
```

Get size and search for an item and check if the list is empty

```js
list.size() // 3
list.search('xyz') // true
list.search('abc') // false
list.isEmpty() // false
```

Iterate over list using for...of loop

```js
for(const item of list) {
  console.log(item) // 'firstVal', 'Mid', 'xyz', 'secondVal'
}
```

Usage as spread operator

```js
const items = [...list] // ['firstVal', 'Mid', 'xyz', 'secondVal']
```
