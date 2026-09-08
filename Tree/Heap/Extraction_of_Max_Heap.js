

class Heap{
    constructor(){
        this.Heap=[]
    }

    insert(value){
        this.Heap.push(value)
        let index=this.Heap.length-1
        while(index>0){
            let parent=Math.floor((index-1)/2)

            if(this.Heap[index]>=this.Heap[parent]){
                break;
            }
            [this.Heap[parent],this.Heap[index]]=[this.Heap[index],this.Heap[parent]]
            index=parent
        }
    }

    extractMax(){
        if(this.Heap.length===0)return null
        if(this.Heap.length===1) return this.Heap.pop()
        let max =this.Heap[0]
        this.Heap[0]=this.Heap.pop()

        let index=0
        while(true){
            let left=2*index+1
            let right=2*index+2
            if(left>=this.Heap.length) break

            let largestChild=left
            if(right<this.Heap.length && this.Heap[right]>this.Heap[left]){
                largestChild=right
            }
            if(this.Heap[index]>=this.Heap[largestChild]){
                break;
            }
            [this.Heap[index],this.Heap[largestChild]]=[this.Heap[largestChild],this.Heap[index]]

            index=largestChild
        }


        return max
    }
}

const heap=new Heap()
heap.insert(5)
heap.insert(20)
heap.insert(30)
heap.insert(12)
heap.insert(25)
console.log(heap.Heap);
console.log(heap.extractMax());
console.log(heap.Heap);