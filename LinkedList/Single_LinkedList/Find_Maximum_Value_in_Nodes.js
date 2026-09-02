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


function Max_Value(head) {
    let current = head
    let max = current.value
    while (current !== null) {
        if (current.value > max) {
            max = current.value
        }
        current = current.next
    }
    return max
}
console.log(Max_Value(list.head))