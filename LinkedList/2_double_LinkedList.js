class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
    }
    append(value){
        const newNode=new Node(value)
        if(this.head===null){
            this.head=newNode
            this.tail=newNode
            return
        }
        this.tail.next=newNode
        newNode.prev=this.tail
        this.tail=newNode
    }
    traverse(){
        if(this.head===null) return this.head
        let current=this.head
        while(current!==null){
            console.log(current.value);
            current=current.next

        }
    }

}
const list= new LinkedList()
list.append(10)
list.append(20)
list.append(30)
list.traverse()
