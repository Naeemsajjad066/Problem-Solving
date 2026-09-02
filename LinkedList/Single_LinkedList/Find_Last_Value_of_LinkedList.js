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
}
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);


function findLastValue(head){
    let current=head
    if(current===null) return null
    if(current.next===null) return current.value
    while(current.next!==null){
        current=current.next
    }
    return current.value
}

console.log(findLastValue(list.head))