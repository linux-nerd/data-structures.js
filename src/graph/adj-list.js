import { BST } from '../binary-search-tree/binary-search-tree';

export class AdjacencyList {
  constructor(isDiGraph) {
    this.diGraph = isDiGraph;
    this.edges = new Map();
  }

  /**
   * It adds node to the map and assign an empty list
   * If the node is already added to the map, then nothing happens
   * @param {any} node
   */
  addNode(node) {
    if (!this.edges.get(node)) {
      this.edges.set(node, new BST);
    }
  }

  /**
   * It removes the node from the map
   * @param {any} node
   */
  removeNode(node) {
    this.edges.delete(node);
  }

  addEdge(fromVertex, toVertex, weight) {
    if (!this.edges.has(fromVertex)) {
      this.addNode(fromVertex);
    }

    if (!this.edges.has(toVertex)) {
      this.addNode(toVertex);
    }

    this.edges.get(fromVertex).insert(toVertex, { weight });

    if (!this.diGraph) {
      this.edges.get(toVertex).insert(fromVertex, { weight });
    }
  }
}