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

}

const tree=new BinaryTree()
tree.root=new TreeNode(10)

tree.root.left=new TreeNode(5)
tree.root.right=new TreeNode(20)
tree.root.left.left=new TreeNode(3)
tree.root.left.right=new TreeNode(7)
tree.root.right.right=new TreeNode(30)