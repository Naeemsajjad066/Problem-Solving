let arr = [1, 2, 9, 6, 3, 5, 5, 6, 11, 11, 10, 11]
let target = 12
let found = false
for (let i = 0; i < arr.length - 1; i++) {
    if ((arr[i] + arr[i + 1]) === target) {
        console.log(`${arr[i]} & ${arr[i + 1]}`)
        return found=true;
    }
}
if (!found) {
    console.log("Not Found")
}



