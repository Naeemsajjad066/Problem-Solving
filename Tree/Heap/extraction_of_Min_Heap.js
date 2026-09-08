// class Heap {
//     constructor() {
//         this.Heap = []
//     }
//     insert(value) {
//         this.Heap.push(value)
//         let index = this.Heap.length - 1

//         while (index > 0) {
//             let parent = Math.floor((index - 1) / 2)

//             if (this.Heap[index] >= this.Heap[parent]) {
//                 break;

//             }
//             [this.Heap[index], this.Heap[parent]] = [this.Heap[parent], this.Heap[index]]
//             index = parent
//         }
//     }
//     extractMin() {
//         if (this.Heap.length === 0) {
//             return null
//         }
//         if (this.Heap.length === 1) {
//             return this.Heap.pop()
//         }
//         let min = this.Heap[0]
//         this.Heap[0] = this.Heap.pop()

//         let index=0

//         while(true){
//             let left = 2*index+1
//             let right=2*index+2

//             if(left>=this.Heap.length){
//                 break;
//             }
//             let smallestChild=left

//             if(right<this.Heap.length && this.Heap[right]<this.Heap[left]){
//                 smallestChild=right
//             }
//             if(this.Heap[index]<=this.Heap[smallestChild]){
//                 break;
//             }
//             [this.Heap[index],this.Heap[smallestChild]]=[this.Heap[smallestChild],this.Heap[index]]

//             index=smallestChild

//         }
//         return min
//     }
// }

// const heap = new Heap()

// heap.insert(10)
// heap.insert(20)
// heap.insert(30)
// heap.insert(12)
// heap.insert(15)

// console.log(heap.Heap);
// console.log(heap.extractMin());
// console.log(heap.Heap);

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

    extractMin(){
        if(this.Heap.length===0)return null
        if(this.Heap.length===1) return this.Heap.pop()
        let min =this.Heap[0]
        this.Heap[0]=this.Heap.pop()

        let index=0
        while(true){
            let left=2*index+1
            let right=2*index+2
            if(left>=this.Heap.length) break

            let smallestChild=left
            if(right<this.Heap.length && this.Heap[right]<this.Heap[left]){
                smallestChild=right
            }
            if(this.Heap[index]<=this.Heap[smallestChild]){
                break;
            }
            [this.Heap[index],this.Heap[smallestChild]]=[this.Heap[smallestChild],this.Heap[index]]

            index=smallestChild
        }


        return min
    }
}

const heap=new Heap()
heap.insert(5)
heap.insert(20)
heap.insert(30)
heap.insert(12)
heap.insert(25)
console.log(heap.Heap);
console.log(heap.extractMin());
console.log(heap.Heap);