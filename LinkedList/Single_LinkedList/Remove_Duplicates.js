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
        console.log("\n")
    }
}
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(20);
list.append(10);
list.append(20)
list.traverse()


function removeDuplicates(head) {
    if (head===null) return null
    if (head.next===null) return head

    let current =head
    let seen = new Set()
    seen.add(current.value)
    while(current.next!==null){
        if(seen.has(current.next.value)){
            current.next=current.next.next
        }else{
            seen.add(current.next.value)
            current=current.next
        }
    }
    return head
}

list.head=removeDuplicates(list.head)
list.traverse()