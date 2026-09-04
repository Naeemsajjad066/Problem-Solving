class TreeNode{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BinaryTree{
    constructor(){
        this.root=null
    }
    inOrder(node){
        if(node===null){
            return 
        }
        this.inOrder(node.left)
        console.log(node.value)
        this.inOrder(node.right)
    }
}

const tree=new BinaryTree()
tree.root=new TreeNode(10)

tree.root.left=new TreeNode(5)
tree.root.right=new TreeNode(20)
tree.inOrder(tree.root)