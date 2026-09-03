let priorityQueue = [];

const enQueue=(name,priority)=>{
priorityQueue.push({name,priority})
}

const deQueue=()=>{
    if(priorityQueue.length===0){
        console.log("Queue is empty");
        return null
    }
    let max=priorityQueue[0].priority
    let index=0
    for(let i =0;i<priorityQueue.length;i++){
        if(priorityQueue[i].priority>max){
            index=i
        }
    }
    console.log(`${priorityQueue[index].name} is served` );
    priorityQueue.splice(index,1)
}

enQueue("Yasir",2)
enQueue("naeem",2)
enQueue("Waseem",3)
enQueue("Asghar",4)

deQueue()
deQueue()
deQueue()
deQueue()