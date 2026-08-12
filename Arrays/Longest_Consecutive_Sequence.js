let arr=[32,3,4,5,54,2,50,1]
let set =new Set(arr)

let max_count=1

for (let num of set){
    let length=1
    if(!set.has(num-1)){
        while(set.has(num+1)){
            num++
            length++
        }
        if(length>max_count){
            max_count=length
        }
    }
}
console.log(max_count)