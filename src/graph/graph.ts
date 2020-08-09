import { AdjacencyList } from "./adj-list";

export enum GraphType {
  DIRECTED = "directed"
}

export enum PresentationType {
  ADJLIST = "adjList"
}

export class Graph<T> {
  private diGraph: boolean;

  constructor(directed?: GraphType) {
    this.diGraph = directed === GraphType.DIRECTED;
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
  createGraph(presentationType?: PresentationType) {
    let graph: any;
    if (presentationType === PresentationType.ADJLIST) {
      graph = new AdjacencyList<T>(this.diGraph);
    } else {
      return new Error("Graph Type not allowed.");
    }

    graph.type = presentationType;
    return graph;
  }
}
