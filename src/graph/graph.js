import { AdjacencyList } from './adj-list';

export class Graph {
  constructor(directed) {
    this.diGraph = directed === 'directed';
  }
  /**
   * Create a presentation of type adjList and returns the created object
   * @param {string} presentationType
   * @returns {AdjacencyList} graph
   * @example
   * ```
   * const graph = new Graph;
   * const adjList = graph.createGraph('adjList');
   * ```
   */
  createGraph(presentationType) {
    let graph;
    if (presentationType === 'adjList') {
      graph = new AdjacencyList(this.diGraph);
    } else {
      return new Error('Graph Type not allowed.');
    }

    graph.type = presentationType;
    return graph;
  }
}