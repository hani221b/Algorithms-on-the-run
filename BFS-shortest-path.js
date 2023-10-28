class Graph
{
    constructor(){
        this.graph = new Map();
    }

    addVertex(vertex){
        this.graph.set(vertex, []);
    }

    addEdges(vertex1, vertex2){
        this.graph.get(vertex1).push(vertex2);
        this.graph.get(vertex2).push(vertex1);
    }

    BFS(startVertex, target){
        let visited = new Set();
        let queue = [];
        let prev = {};

        visited.add(startVertex);
        queue.push(startVertex);

        while(queue.length > 0){
            let currentVertex = queue.shift();
            if(currentVertex == target){
                return this.getShortestPath(prev, startVertex, target)
            };
            let neighbors = this.graph.get(currentVertex);
            
            for(let neighbor of neighbors){
                if(!visited.has(neighbor)){
                    visited.add(neighbor);
                    queue.push(neighbor);
                    prev[neighbor] = currentVertex;
                }
            }
        }
        return "No possible path!";
    }

    getShortestPath(prev, startVertex, targetVertex){
        let path = [];
        let currentVertex = targetVertex;

        while(currentVertex != startVertex) {
            path.unshift(currentVertex);
            currentVertex = prev[currentVertex];
        }

        path.unshift(startVertex);
        return path;
    }
}

const g = new Graph();
g.addVertex("a")
g.addVertex("b")
g.addVertex("c")
g.addVertex("d")
g.addVertex("e")
g.addVertex("f")
g.addVertex("g")
g.addVertex("h")
g.addEdges("a", "b")
g.addEdges("a", "c")
g.addEdges("b", "c")
g.addEdges("d", "c")
g.addEdges("d", "b")
g.addEdges("d", "a")
g.addEdges("d", "e")
g.addEdges("e", "g")
g.addEdges("g", "h")
console.log(g.BFS("a", "g"));
