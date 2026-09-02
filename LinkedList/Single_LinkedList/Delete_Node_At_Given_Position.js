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
            console.log(current.value,"")
            current=current.next
        }
        console.log("\n");
    }
}
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.traverse()


function Delete_Node_At_Given_Position(head,pos){
    if (head===null) return null
    if(pos===1) return head.next
    let current=head;
    let count=1
    while(current.next!==null && count<pos-1){
        current=current.next;
        count++
    }
    if(current.next===null)  return head
    
    current.next=current.next.next
    return head
}

list.head=Delete_Node_At_Given_Position(list.head,1)
list.traverse()
list.head=Delete_Node_At_Given_Position(list.head,3)
list.traverse()