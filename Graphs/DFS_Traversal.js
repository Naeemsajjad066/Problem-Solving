class Graph {
    constructor() {
        this.graph = {}
    }
    addVertex(vertex) {
        if (!this.graph[vertex]) {
            this.graph[vertex] = []
        }
    }
    addEdge(vertex1, vertex2) {

        this.graph[vertex1].push(vertex2)
        this.graph[vertex2].push(vertex1)
    }
    removeEdge(vertex1, vertex2) {
        if (!this.graph[vertex1] || !this.graph[vertex2]) return
        const index1 = this.graph[vertex1].indexOf(vertex2)
        const index2 = this.graph[vertex2].indexOf(vertex1)

        this.graph[vertex1].splice(index1, 1)
        this.graph[vertex2].splice(index2, 1)
    }

    removeVertex(vertex) {
        if (!this.graph[vertex]) return
        while (this.graph[vertex].length > 0) {
            this.removeEdge(vertex, this.graph[vertex][i])
        }
        delete this.graph[vertex]
    }

    dfs(start) {
        const visited = {}
        const traverse = (vertex) => {
            visited[vertex] = true
            console.log(vertex)
            for (let neighbour of this.graph[vertex]) {
                if (!visited[neighbour]) {
                    traverse(neighbour)
                }
            }
        }
        traverse(start)
    }
}

const g = new Graph()

g.addVertex('5')
g.addVertex('6')

g.addEdge('5', '6')
console.log(g.graph);

g.dfs("5")