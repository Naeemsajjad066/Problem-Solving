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
console.log("\n");


function DeleteNodeByValue(head,value){
    let current = head
    if(head===null) return null
    if(head.value===value){
        head=head.next;
        return head
    }
    while(current.next!==null){
        if(current.next.value===value){
            current.next=current.next.next
            return head
        }
        current=current.next
    }
    return head
}
list.head=DeleteNodeByValue(list.head,20)
list.traverse()
