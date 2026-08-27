class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }
        traverse(){
        let current=this.head
        while(current!==null){
            console.log(current.value," ")
            current=current.next
        }
    }
}
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);


function insertAtPosition(head,value,pos){
    const newNode=new Node(value)

    if(pos<1) return head;
    if(head===null){
        if(pos===1){
            return newNode
        }
        return head
    }
    if(pos===1){
        newNode.next = head
        return newNode
    }

    let current=head;
    let count=1

    while(current.next!==null && count<pos-1){
        current=current.next;
        count++
    }
    if(count!==pos-1){
        return head
    }
    newNode.next=current.next
    current.next=newNode
    return head
}

list.head=insertAtPosition(list.head,23,0)
list.traverse()