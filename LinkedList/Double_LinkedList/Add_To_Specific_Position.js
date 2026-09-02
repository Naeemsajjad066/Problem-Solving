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

    addToSpecificPosition(value,position){

        const newNode=new Node(value) // creating new node

        if(this.head===null && position===1)  // when linkedlist is empty
            {
            this.head=newNode
            this.tail=newNode
            return this.head
        } 

        if(position===1){
            newNode.next=this.head
            this.head.prev=newNode
            this.head=newNode
            return this.head
        }

        if(position<1){
            console.log("Enter position greater than 0");
            return this.head
        }
        if(this.head===null){
            console.log("LinkedList is empty position should be 1");
            return this.head
        }
        let curr=this.head
        let count=1

        while(curr.next!==null && count<position-1){
            curr=curr.next
            count++
        }

        if(count!==position-1){
            console.log("Position not found");
            return this.head
        }

        newNode.next=curr.next
        newNode.prev=curr

        if(curr.next!==null){
            curr.next.prev=newNode
        }else{
            this.tail=newNode
        }

        curr.next=newNode
        return this.head
    }

}
const list= new LinkedList()
list.traverse()
list.addToSpecificPosition(40,5)
list.traverse()