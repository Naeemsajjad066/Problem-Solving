function rotate(arr, k) {
    k = k % arr.length
    reverseArray(arr,0,arr.length-1)
    reverseArray(arr,0,k-1)
    reverseArray(arr,k,arr.length-1)

}

function reverseArray(arr,start,end){
    while(start<end){
    [arr[start],arr[end]]=[arr[end],arr[start]]
    start++;
    end--
    }
}

let arr=[1,2,3,4,5,6,7,8]
rotate(arr,4)
console.log(arr)