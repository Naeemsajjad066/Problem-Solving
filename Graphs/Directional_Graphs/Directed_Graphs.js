class Graph {
	constructor() {
		this.graph = {}
	}

	addVertex(vertex) {
		if (!this.graph[vertex]) {
			this.graph[vertex] = []
		}
	}

	addEdge(source, destination) {
		this.graph[source].push(destination)
	}

	removeEdge(source, destination) {
		if (!this.graph[source]) return

		const edgeIndex = this.graph[source].indexOf(destination)
		if (edgeIndex !== -1) {
			this.graph[source].splice(edgeIndex, 1)
		}
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

g.addVertex('5')
g.addVertex('6')

g.addEdge('5', '6')
console.log(g.graph)
