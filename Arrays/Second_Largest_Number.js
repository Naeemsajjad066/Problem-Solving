let arr = [1, 2, 9, 5, 6, 17, 8, 11,11]
let largest=arr[0]
let secondLargest=arr[0]

for (let i = 1; i < arr.length; i++) {
    if(arr[i]>largest){
        secondLargest=largest
        largest=arr[i]
    }else if(arr[i]>secondLargest){
        secondLargest=arr[i]
    }
}
console.log(`Largest: ${largest} SecondLarrgest:${secondLargest}`)