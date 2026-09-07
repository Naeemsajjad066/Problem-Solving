class Heap{
    constructor(){
        this.Heap=[]
    }

    insert(value){
        this.Heap.push(value)
        let index=this.Heap.length-1

        while(index>0){
            let parent=Math.floor((index-1)/2)
            if(this.Heap[index]<=this.Heap[parent]){
                break;
            }
            [this.Heap[index],this.Heap[parent]]=[this.Heap[parent],this.Heap[index]]
            index=parent
        }
    }
}

const heap=new Heap()

heap.insert(10)
heap.insert(20)
heap.insert(5)


console.log(heap.Heap);