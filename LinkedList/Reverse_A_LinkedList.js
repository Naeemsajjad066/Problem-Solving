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
list.traverse()

function Reverse_A_LinkedList(head){
    let prev=null
    let current=head
    let next;
    if(head===null) return null
    while(current!==null){
        next=current.next
        current.next=prev
        prev=current
        current=next
    }
    return prev
}

list.head= Reverse_A_LinkedList(list.head)
list.traverse()