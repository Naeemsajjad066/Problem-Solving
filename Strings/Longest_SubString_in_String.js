let str="i am naeem sajjad which is following the string concept"
if(str.trim()===""){
    console.log("Empty string not allowed");
    return
}
let arr=str.split(" ")
let longest=arr[0]
for (let item of arr){
    if(item.length>longest.length){
        longest=item
    }
}
console.log(longest)