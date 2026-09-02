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


function delete_node_at_last(head){
    if(head===null || head.next===null) return null
    let current=head
    while(current.next.next!==null){
        current=current.next
    }
    current.next=null;
    return head
}
list.head=delete_node_at_last(list.head)

list.traverse()