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

function SearchByValue(head,value){
    let found=false;
    let current=head;
    while(current!==null){
        if(current.value===value) {
            return found=true
        }
        current=current.next
    }
    return found
}

const found=SearchByValue(list.head,21)
found?console.log("Value found"):console.log("Value not found")