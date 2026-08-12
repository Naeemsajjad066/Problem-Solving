// let arr = [20, 10, 4,7,4,5,6,7,4,2,10,87]
// let last_index=arr.length-1
// let newArr=[]
// newArr.push(arr[last_index])

// for (let i=0; i<arr.length-1;i++){
//     newArr.push(arr[i])
// }
// console.log(newArr)


let arr=[1,2,3,4,5,6,10]

// for (let i=1; i<arr.length;i++){
//     let temp = arr[i]
//     arr[i]=arr[0]
//     arr[0]=temp
// // }
// let last_index=arr.pop()
// arr.unshift(last_index)
arr.unshift(arr.pop())
console.log(arr)