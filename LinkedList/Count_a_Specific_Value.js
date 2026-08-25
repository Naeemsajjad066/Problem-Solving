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
list.append(40);
list.append(40);
list.append(40);

function countSpecificValue(head,value){
    let count =0
    let current=head
    while(current!==null){
        if(current.value===value){
            count++
        }
        current=current.next
    }
    return count
}

console.log(countSpecificValue(list.head,40))

