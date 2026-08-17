let arr=[1,3,5,6,-1,0,3,8]

let target=1

let dict={}
for (let num of arr){
    let number=target-num
    if(num===dict[number]){
        console.log(`${number} & ${num}`)
        break;
    }
    dict[num]=number
}

