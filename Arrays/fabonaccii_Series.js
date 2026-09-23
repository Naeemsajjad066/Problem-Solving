let arr=[1,1,2,3,5,8]

let isfabonacci=true
if (arr.length<1){
console.log("Empty array!!!")
return
}
for( let i=1;i<arr.length;i++){
    let sum=0

    if(i===1){
        if(arr[i]!==arr[i-1]){
             isfabonacci=false
             break
        }
        continue
    }
    sum+=arr[i-1]+arr[i-2]
    if(arr[i]!==sum){
         isfabonacci=false
         break;
    }
}

if(isfabonacci){
    console.log("Series is fabonacci seriess")
}else{
    console.log("Series is not fabonacci series");
}
