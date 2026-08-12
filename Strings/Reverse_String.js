let str="Hello How are You"

let l=str.length-1; //issue: i used .length() but correct is .length
let newStr="";
while(l>=0){
    newStr+=str[l]
    l--;
}
console.log(newStr)