import { Graph, GraphType, PresentationType } from "./graph";

describe("Graph Factory", () => {
  it("should create an object of Graph Factory", () => {
    const graph = new Graph();
    expect(graph).toBeDefined();
  });

  describe("Adjacency List", () => {
    let graph: Graph<string>;
    beforeEach(() => {
      graph = new Graph(GraphType.DIRECTED);
    });
    it("should create adjacency list object", () => {
      const adjList = graph.createGraph(PresentationType.ADJLIST);
      expect(adjList).toBeDefined();
    });
    it('should have type "adjList"', () => {
      const adjList = graph.createGraph(PresentationType.ADJLIST);
      expect(adjList.type).toBeDefined();
      expect(adjList.type).toBe("adjList");
    });
    it("should return error when graph type does not match", () => {
      const adjList = graph.createGraph();
      expect(adjList.message).toBe("Graph Type not allowed.");
    });

    it("should create a directed graph", () => {
      const adjList = graph.createGraph(PresentationType.ADJLIST);
      expect(adjList.diGraph).toBeTruthy();
    });
    it("should create a un-directed graph", () => {
      const graph = new Graph();
      const adjList = graph.createGraph(PresentationType.ADJLIST);
      expect(adjList.diGraph).toBeFalsy();
    });
  });
});
