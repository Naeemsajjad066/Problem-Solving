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
list.append(21);
list.append(30);
list.append(40);

function countEvenValues(head){
    let current=head;
    let even = 0
    while(current!==null){
        if(current.value%2==0){
            even+=1
        }
        current=current.next
    }
    return even
}
console.log(countEvenValues(list.head))