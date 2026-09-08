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
        const values = []

        const collect = (sourceIndex, targetIndex) => {
            if(this.BST[sourceIndex]===undefined) return

            values.push([targetIndex, this.BST[sourceIndex]])
            collect(2 * sourceIndex + 1, 2 * targetIndex + 1)
            collect(2 * sourceIndex + 2, 2 * targetIndex + 2)
        }

        const clear = (index) => {
            if(this.BST[index]===undefined) return

            const left = 2 * index + 1
            const right = 2 * index + 2
            this.BST[index] = undefined
            clear(left)
            clear(right)
        }

        collect(source, target)
        clear(source)
        values.forEach(([index, value]) => {
            this.BST[index] = value
        })
    }
    delete_by_value(value,index=0){
        if(this.BST[index]===undefined) return
        const left = 2 * index + 1
        const right = 2 * index + 2

        if(value<this.BST[index]){
            this.delete_by_value(value,left)
        }   
        else if(value>this.BST[index]){
            this.delete_by_value(value,right)
        }
        else{
            if(this.BST[left]===undefined && this.BST[right]===undefined){
                this.BST[index]=undefined
            }
            else if(this.BST[left]===undefined){
                this.moveSubtree(right, index)
            }else if (this.BST[right]===undefined){
                this.moveSubtree(left, index)
            }
            else{
                let successor = right
                let successorLeft = 2 * successor + 1
                while(this.BST[successorLeft]!==undefined){
                    successor = successorLeft
                    successorLeft = 2 * successor + 1
                }
                this.BST[index] = this.BST[successor]
                const successorRight = 2 * successor + 2
                if(this.BST[successorRight]===undefined){
                    this.BST[successor] = undefined
                } else {
                    this.moveSubtree(successorRight, successor)
                }
            }
           }}

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