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

    bfs(start) {
        const queue = [start]
        const visited = {}
        visited[start] = true

        while (queue.length > 0) {
            const current = queue.shift()
            console.log(current)

            for (let neighbour of this.graph[current]) {
                if (!visited[neighbour]) {

                    visited[neighbour] = true
                    queue.push(neighbour)

                }
            }
        }
    }

}

const g = new Graph()

g.addVertex('5')
g.addVertex('6')

g.addEdge('5', '6')
console.log(g.graph);

g.bfs("5")
