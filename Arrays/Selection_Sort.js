let arr=[2,4,1,5,9,8,-2]

for (let i=0; i<arr.length-1;i++){
    let minIndex=i
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]<arr[minIndex]){
            minIndex=j
        }
    }
    [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
}
console.log(arr)