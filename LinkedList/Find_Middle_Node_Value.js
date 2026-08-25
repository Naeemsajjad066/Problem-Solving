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
list.append(40);
list.append(50);
list.append(23)

function findMiddleNodeValue(head){
    let slow =head;
    let fast=head;
    if(head===null) return null;
    while(fast!==null && fast.next!==null){
        slow=slow.next;
        fast=fast.next.next
    }
    return slow.value
}

console.log(findMiddleNodeValue(list.head))
