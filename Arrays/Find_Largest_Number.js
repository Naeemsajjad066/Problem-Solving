let arr=[1,5,9,67,7,8,3]
let largest=arr[0]
for (let num of arr){
    if(num>largest){
        largest=num
    }
}
console.log(largest)