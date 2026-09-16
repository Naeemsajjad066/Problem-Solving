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
        console.log("\n");
    }
    findLowestValue(head) {
        let current=head
        let lowest=head
        while(current.next!==null){
            if(current.value>current.next.value){
                lowest=current.next.value
            }
            current=current.next
        }
        return lowest
    }
    addLowestToAllNodes(head){
        let lowest=this.findLowestValue(head)
        let current=head
        while(current!==null){
            current.value+=lowest
            current=current.next
        }
    }
}
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(40);
list.append(12)
list.append(5)
list.append(15)
list.append(25)
list.traverse()

list.addLowestToAllNodes(list.head)
list.traverse()