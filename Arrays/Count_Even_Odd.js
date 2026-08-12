let arr=[1,2,3,4,5,3,5,6,3,325,4,3,2,1,2,2,2]
let even=0
let odd=0
for (let num of arr){
    num%2===0?even++:odd++
}
console.log(`Odd:${odd} Even:${even}`)