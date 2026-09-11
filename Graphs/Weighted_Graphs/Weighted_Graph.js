class Graph {
    constructor() {
        this.graph = {}
    }

    addVertex(vertex) {
        if (!this.graph[vertex]) {
            this.graph[vertex] = []
        }
    }

    addEdge(source, destination, weight) {
        if (!this.graph[source] || !this.graph[destination]) return

        this.graph[source].push({ vertex: destination, weight })
    }

    removeEdge(source, destination) {
        if (!this.graph[source]) return

        this.graph[source] = this.graph[source].filter(
            edge => edge.vertex !== destination
        )
    }

    removeVertex(vertex) {
        if (!this.graph[vertex]) return

        for (const source of Object.keys(this.graph)) {
            this.removeEdge(source, vertex)
        }

        delete this.graph[vertex]
    }
}

const g = new Graph()

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')

g.addEdge('A', 'B', 4)
g.addEdge('A', 'C', 7)
g.addEdge('B', 'C', 2)

console.log(g.graph)

g.removeEdge('A', 'C')
g.removeVertex('B')

console.log(g.graph)
