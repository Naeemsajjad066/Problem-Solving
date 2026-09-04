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

}

const tree = new BinarySearchTree()
tree.root = new TreeNode(10)
tree.insertNode(tree.root, 20)
tree.insertNode(tree.root, 2)
tree.insertNode(tree.root, 15)
tree.insertNode(tree.root, 7)
