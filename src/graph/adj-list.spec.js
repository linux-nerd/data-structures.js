import { AdjacencyList } from './adj-list';

describe('Adjacency List', () => {
  let adjList;
  beforeEach(() => {
    adjList = new AdjacencyList();
  });

  it('should create adjacency list object', () => {
    expect(adjList).toBeDefined();
    expect(adjList.edges).toBeDefined();
  });

  it('should have empty edges when adjacency list object is created', () => {
    expect(adjList.edges.size).toBe(0);
  });

  it('should add node through addNode method', () => {
    expect(adjList.edges.size).toBe(0);

    adjList.addNode('A');
    expect(adjList.edges.size).toBe(1);
    expect(adjList.edges.get('A').len).toBe(0);

    adjList.addNode('B');
    expect(adjList.edges.size).toBe(2);
    expect(adjList.edges.get('B').len).toBe(0);
  });

  it('should delete the node from the map', () => {
    expect(adjList.edges.size).toBe(0);

    adjList.addNode('A');
    expect(adjList.edges.size).toBe(1);

    adjList.removeNode('A');
    expect(adjList.edges.size).toBe(0);
    expect(adjList.edges.has('A')).toBeFalsy();
  });

  describe('Insert Operation', () => {
    let unDirectedGraph;
    beforeEach(() => {
      unDirectedGraph = new AdjacencyList(false);

      adjList.addNode('A');
      adjList.addNode('B');
    });

    it('should add an edge of weight 20 between A and B', () => {
      adjList.addEdge('A', 'B', 200);
      const vertexA = adjList.edges.get('A');
      expect(vertexA.len).toBe(1);

      const lookupB = vertexA.lookup('B');
      expect(lookupB.hasVal).toBeTruthy();
      expect(lookupB.currentNode.details.weight).toBe(200);
    });
    it('should add edge between B and C', () => {
      expect(adjList.edges.size).toBe(2);

      adjList.addEdge('B', 'C');
      expect(adjList.edges.size).toBe(3);
      const vertexB = adjList.edges.get('B');
      expect(vertexB.len).toBe(1);

      const lookupC = vertexB.lookup('C');
      expect(lookupC.hasVal).toBeTruthy();
      expect(lookupC.currentNode.details.weight).toBe(undefined);
    });
    it('should add edge A and B in undirected graph', () => {
      expect(unDirectedGraph.edges.size).toBe(0);

      unDirectedGraph.addEdge('A', 'B');
      expect(unDirectedGraph.edges.size).toBe(2);

      const vertexA = unDirectedGraph.edges.get('A');
      expect(vertexA.len).toBe(1);
      const lookupB = vertexA.lookup('B');
      expect(lookupB.hasVal).toBeTruthy();

      const vertexB = unDirectedGraph.edges.get('B');
      expect(vertexB.len).toBe(1);
      const lookupA = vertexB.lookup('A');
      expect(lookupA.hasVal).toBeTruthy();
    });
  });
});