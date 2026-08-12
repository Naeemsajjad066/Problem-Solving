//Time complexity O(n)

let arr=[-1,0,3,2,-1,2,4,5,6,4,6,8,9,3]

let newArr=[]
let dict={}
for(let i=0;i<arr.length; i++){
    let num=arr[i]
    dict[num]?(dict[num]+=1):(dict[num]=1)
    dict[num]===1 &&   newArr.push(arr[i])
}
console.log(newArr)



// Complexity O(n2)
let arr1=[-1,2,3,1,3]

for(let i = 0; i<arr1.length-1; i++){
    for(let j=i+1;j<arr1.length;j++){
        if(arr1[i]===arr1[j]){
            arr1.splice(j,1)
    }}
}
console.log(arr1)