function reverseArr(arr,start,end){
    while(start<end){
        [arr[start],arr[end]]=[arr[end],arr[start]]
        start++;
        end -- 
    }
}
let arr=[1,2,3,4,5,6]
reverseArr(arr,0,arr.length-1)
console.log(arr)