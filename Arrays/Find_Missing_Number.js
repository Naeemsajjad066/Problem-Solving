let arr=[1,0,3,4,2,8,5,6]
let n=arr.length
let sum=(n*(n+1))/2
let arrsum=0
for (let num of arr){
arrsum+=num
}
let missing=sum-arrsum
console.log(missing)