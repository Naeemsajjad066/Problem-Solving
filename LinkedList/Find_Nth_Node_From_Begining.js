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
list.append(40);
list.append(23);
list.append(48);
list.append(25);


function FindNthNode(head, n) {
    let count = 1
    if (head === null) return null
    let current=head;
    while(current!==null){
        if(count===n){
            return current.value
        }
        count++
        current=current.next
    }
    return null
}
console.log(FindNthNode(list.head,3))