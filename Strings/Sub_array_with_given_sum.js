let arr = [1, 22, 5, 3, 16, 7, 2, 9, 1]

let sum = 24
let subArr
for (let i = 0; i < arr.length; i++) {
    let newSum = sum
    for (let j = i; j < arr.length; j++) {
        newSum -= arr[j]
        if (newSum < 0) {
            break;
        }
        if (newSum=== 0) {
            subArr = arr.slice(i, j+1)
            break
        }
    }
    if(subArr){
        break
    }
}
console.log(subArr)