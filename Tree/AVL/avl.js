class AVL{
    constructor(){
        this.AVL=[]
    }
    insert(value){
        this.insertValue(value,0)
    }
    insertValue(value,index){
        if(this.AVL[index]===undefined){
            this.AVL[index]=value
            return
        }
        if(value<this.AVL[index]){
            const left=2*index+1
            this.insertValue(value,left)
        }else if(value>this.AVL[index]){
            const right=2*index+2
            this.insertValue(value,right)
        }else return 
    }
}

const avl=new AVL()
avl.insert(1)
avl.insert(2)
avl.insert(12)
avl.insert(34)
avl.insert(3)
avl.insert(5)
console.log(avl.AVL);