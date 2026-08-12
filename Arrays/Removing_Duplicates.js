let arr=[1,2,3,4,2,3,4,5,6,7,8,4]

// for (let i=0;i<arr.length-1;i++){
//     for (let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j])
//             arr.splice(j,1)
//     }
// }
// console.log(arr)


let seen={}
let unique=[]

for(let num of arr){
    if(!seen[num]){
        seen[num]=true;
        unique.push(num)
    }
}
console.log(unique)