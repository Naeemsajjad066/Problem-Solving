let arr=[[1,2,3],
         [4,5,6],
         [7,8,9]]

// let arr=[[1,2],[9,4]]
let length=arr.length-1
let sum1=0
let sum2=0
for (let i=0;i<arr.length;i++){
    sum1+=arr[i][i];
    sum2+=arr[i][length-i]
}
console.log(`${sum1},${sum2}`)
