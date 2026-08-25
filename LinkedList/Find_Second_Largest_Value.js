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
list.append(39)
list.append(20);
list.append(30);
list.append(34);
list.append(40);

function SecondLargest(head) {
    let current = head;
    let largest = -Infinity
    let secondLargest = -Infinity
    while (current !== null) {
        if (current.value > largest) {
            secondLargest = largest
            largest = current.value;
        } else if (
            current.value > secondLargest && largest !== current.value
        ) {
            secondLargest = current.value
        }
        current = current.next
    }
    return secondLargest
}
console.log(SecondLargest(list.head))