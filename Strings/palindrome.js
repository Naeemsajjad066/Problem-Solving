let str='5555'
function Palindrom(str){
    let left=0
    let right=str.length-1
    while(left<right){
        if(str==="") return
        if(str.length==1) return true
        if(str[left]!==str[right]){
            return false
        }
        left++;
        right--
    }
    return true
}

if(Palindrom(str)){
    console.log("This is palindrome")
}else{
    console.log("This is not palindrome")
}