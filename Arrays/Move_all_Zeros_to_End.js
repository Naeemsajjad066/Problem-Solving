let arr=[0,1,2,0,9,0,0,0,0,0,4,3,5]
let count=0
let length=arr.length
// for(let i=0;i<length;i++){
//     if(arr[i]==0){
//         arr.splice(i,1)
//         arr.push(0)
//         length-=1
//         i--
//     }
// }

for (let i=0;i<arr.length;i++){
    if(arr[i]!==0){
        [arr[i],arr[0]]=[[arr[0],arr[i]]]
        count++
    }
}
console.log(arr)