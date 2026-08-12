let original=87783
 number = original
let result=0
while(number!=0){
let remainder=0
remainder=number%10
result*=10
result+=remainder;
number=Math.floor(number/10)
}
if (result===original){
    console.log("palindrom")
}else{
    console.log("Not palindrome")
}