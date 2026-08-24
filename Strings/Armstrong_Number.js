let number=153
let sum =0
let duplicate=number
while(duplicate>0){
    let remainder=duplicate%10
     sum=sum+(remainder*remainder*remainder)
    duplicate=Math.floor(duplicate/10)
}

if(sum===number){
    console.log("this is armstrong number")
}else{
    console.log("Not armStrong number")
}