(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("data-structures", [], factory);
	else if(typeof exports === 'object')
		exports["data-structures"] = factory();
	else
		root["data-structures"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _binarySearchTree = __webpack_require__(1);
	
	Object.keys(_binarySearchTree).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _binarySearchTree[key];
	    }
	  });
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * This creates a node
	 * @name BSTNode
	 * @param key
	 * @param left
	 * @param right
	 * @return BSTNode
	 */
	var BSTNode = exports.BSTNode = function () {
	  function BSTNode(key) {
	    var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	    var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	
	    _classCallCheck(this, BSTNode);
	
	    // the constructor creates the leaf node
	    this._key = key;
	    this._left = left;
	    this._right = right;
	  }
	
	  /* Getter and Setter for key */
	
	
	  _createClass(BSTNode, [{
	    key: 'key',
	    get: function get() {
	      return this._key;
	    },
	    set: function set(key) {
	      this._key = key;
	    }
	
	    /* Getter and Setter for left sub tree */
	
	  }, {
	    key: 'left',
	    get: function get() {
	      return this._left;
	    },
	    set: function set(left) {
	      this._left = left;
	    }
	
	    /* Getter and Setter for right sub tree */
	
	  }, {
	    key: 'right',
	    get: function get() {
	      return this._right;
	    },
	    set: function set(right) {
	      this._right = right;
	    }
	  }]);
	
	  return BSTNode;
	}();
	
	var BST = exports.BST = function () {
	  function BST() {
	    _classCallCheck(this, BST);
	
	    this.root = null;
	  }
	
	  /**
	   * Insert value in the BST
	   * @param {*} val
	   */
	
	
	  _createClass(BST, [{
	    key: 'insert',
	    value: function insert(val) {
	      var _this = this;
	
	      // create a BST node
	      var bstNode = new BSTNode(val);
	
	      /**
	       * @name recurseBST
	       * @param {*} node - optional, default value is this.root
	       */
	      var recurseBST = function recurseBST() {
	        var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.root;
	
	        if (node.key > val && !node.left) {
	          node.left = bstNode;
	        } else if (node.key > val) {
	          recurseBST(node.left);
	        } else if (node.key < val && !node.right) {
	          node.right = bstNode;
	        } else if (node.key < val) {
	          recurseBST(node.right);
	        }
	      };
	
	      if (!this.root) {
	        // if the root is null then assign the created node to the root.
	        this.root = bstNode;
	      } else {
	        recurseBST();
	      }
	    }
	  }, {
	    key: 'delete',
	    value: function _delete(val) {
	      if (!this.root) {
	        return new Error('BST is empty. Cannot delete from empty BST');
	      } else {
	        var findNode = this.lookup(val);
	        if (findNode.hasVal) {
	          // case 1
	          // when the node has no children or when its a leaf
	          // then simply delete the node
	          if (!findNode.currentNode.left && !findNode.currentNode.right) {
	            var direction = findNode.parentNode.key > val ? 'left' : 'right';
	            findNode.parentNode[direction] = null;
	          }
	          // case 2
	          // when node has just 1 child
	          // Simply delete the key and point the parent to the child
	          else if (!!findNode.currentNode.left ^ !!findNode.currentNode.right) {
	              var parentToCurNodeDir = findNode.parentNode.key > val ? 'left' : 'right';
	              var curNodeToChildDir = findNode.currentNode.left ? 'left' : 'right';
	              findNode.parentNode[parentToCurNodeDir] = findNode.currentNode[curNodeToChildDir];
	            }
	            // case 3
	            // when node has both left and right children
	            // Find minimum value in the right subtree of the node containing the key to be deleted.
	            // Replace the key to be deleted with the min value.
	            // Then delete the min val from the right subtree.
	            else if (findNode.currentNode.left && findNode.currentNode.right) {}
	        } else {
	          return new Error('Node not found.');
	        }
	      }
	    }
	
	    /**
	     * Looks for a value in the BST.
	     * @param {string|number} val
	     * @return {object} response
	     */
	
	  }, {
	    key: 'lookup',
	    value: function lookup(val) {
	      var _this2 = this;
	
	      var response = { hasVal: false, currentNode: null, parentNode: null };
	      var lookRecursively = function lookRecursively() {
	        var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this2.root;
	        var parent = arguments[1];
	
	        if (node.key === val) {
	          response.hasVal = true;
	          response.currentNode = node;
	          response.parentNode = parent;
	        } else if (node.left && node.key > val) {
	          lookRecursively(node.left, node);
	        } else if (node.right && node.key < val) {
	          lookRecursively(node.right, node);
	        }
	      };
	
	      lookRecursively();
	      return response;
	    }
	
	    /**
	     * Print the values of the BST in specific order
	     * @param {string} type - value of type can be inOrder, breadthFirst, depthFirst
	     */
	
	  }, {
	    key: 'print',
	    value: function print(type) {
	      switch (type) {
	        case 'inOrder':
	          break;
	        case 'breadthFirst':
	          break;
	        case 'depthFirst':
	          break;
	        default:
	          break;
	      }
	    }
	  }]);

	  return BST;
	}();

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data-structures.js.map