class BST {
    constructor() {
        this.BST = []
    }

    insert(value) {
        this.insertValue(value, 0)
    }

    insertValue(value, index) {
        if (this.BST[index] === undefined) {
            this.BST[index] = value
            return
        }

        if (value < this.BST[index]) {
            const left = 2 * index + 1
            this.insertValue(value, left)
        }
        else if (value > this.BST[index]) {
            const right = 2 * index + 2
            this.insertValue(value, right)
        }

        else {
            return
        }
    }
    inOrderTraversal(index=0){
        if(this.BST[index]===undefined) return

        const left = 2 * index + 1
        const right = 2 * index + 2
        this.inOrderTraversal(left)
        console.log(this.BST[index]);
        this.inOrderTraversal(right)
    }
    moveSubtree(source, target){
        if(this.BST[source]===undefined) return

        this.BST[target] = this.BST[source]
        this.moveSubtree(2 * source + 1, 2 * target + 1)
        this.moveSubtree(2 * source + 2, 2 * target + 2)
        this.BST[source] = undefined
    }

    deleteNode(index){
        const left = 2 * index + 1
        const right = 2 * index + 2

        if(this.BST[left]===undefined && this.BST[right]===undefined){
            this.BST[index] = undefined
        } else if(this.BST[left]===undefined){
            this.moveSubtree(right, index)
        } else if(this.BST[right]===undefined){
            this.moveSubtree(left, index)
        } else {
            let successor = right
            while(this.BST[2 * successor + 1]!==undefined){
                successor = 2 * successor + 1
            }

            this.BST[index] = this.BST[successor]
            this.deleteNode(successor)
        }
    }

    delete_by_value(value, index=0){
        if(this.BST[index]===undefined) return

        if(value < this.BST[index]){
            this.delete_by_value(value, 2 * index + 1)
        } else if(value > this.BST[index]){
            this.delete_by_value(value, 2 * index + 2)
        } else {
            this.deleteNode(index)
        }
    }

}

const bst=new BST()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.insert(12)
bst.insert(17);
console.log(bst.BST);

bst.inOrderTraversal()