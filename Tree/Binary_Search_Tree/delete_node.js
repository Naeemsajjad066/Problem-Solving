class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insertNode(root, value) {
        if (root === null) return new TreeNode(value)

        if (value < root.value) {
            root.left = this.insertNode(root.left, value)

        } else {
            root.right = this.insertNode(root.right, value)
        }
        return root
    }
    inOrder(node) {
        if (node === null) {
            return
        }
        this.inOrder(node.left)
        console.log(node.value)
        this.inOrder(node.right)
    }
    deleteNode(root, value) {
        if(root===null) return null
        if(value<root.value){
            root.left=this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right=this.deleteNode(root.right,value)
        }else{
            if(root.left===null && root.right===null){
                return null
            }
            if(root.left!==null && root.right===null){
                return root.left
            }
            if(root.right!==null && root.left===null){
                return root.right
            }
        }
        return root
    }

}

const tree = new BinarySearchTree()
tree.root = new TreeNode(10)
tree.insertNode(tree.root, 20)
tree.insertNode(tree.root, 2)
tree.insertNode(tree.root, 15)
tree.insertNode(tree.root, 7)
tree.inOrder(tree.root)
tree.deleteNode(tree.root,2)
tree.inOrder(tree.root)