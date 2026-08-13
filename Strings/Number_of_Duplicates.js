// let str= "what is going on with you asghar?"
let str="what is?"
let dict={}
let count=0
for (let s of str){
    if(s===" ") continue
    dict[s]?dict[s]+=1:dict[s]=1
}
for (s in dict){
    if(dict[s]>1){
        count++
        console.log(`${s} : ${dict[s]}`)
    }
}
if(count===0){
    console.log("No duplicate found")
    return
}
console.log(`Total Duplicates: ${count}`)