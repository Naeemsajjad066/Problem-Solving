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

        this.inOrderTraversal(2*index+1)
        console.log(this.BST[index]);
        this.inOrderTraversal(2*index+2)
    }
    searchValue(value,index=0){
        if(this.BST[index]===undefined) return false
        if(this.BST[index]===value) return true

        if(value<this.BST[index]){
            const left=2*index+1
            return this.searchValue(value,left)
        }
        else{
            const right=2*index+2
            return this.searchValue(value,right)
        }   }
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
console.log(bst.searchValue(7));