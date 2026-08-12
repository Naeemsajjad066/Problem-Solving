let str="Hello How are You"
let newStr="";
let arr=str.split(" ")
let l=arr.length-1
while(l>=0){
    newStr+=" ";
    newStr+=arr[l];
    l--


}

console.log(newStr)

//issue is that it is adding Space at start 
// I can use if for condition l=0 just add word not space before it.