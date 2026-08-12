let number = -48
let var1 = 4
let var2 = 6

//Method 1 which print 4 6 and both's multiples 

// for(let i=1 ;i<=number;i++){
//     if(i%var1==0){
//         console.log(`Fill- ${i} is multiple of ${var1}\n` )
//         if(i%var2==0){
//             console.log(`Done by Naem ${i} is multiple of ${var1} & ${var2}\n`)
//         }
//     }
//     if(i%var2==0){
//         console.log(`Increment ${i} is multiple of ${var2}\n`)
//     }
// }

//method 2 which prints 4 and 6 multiples if 
number=Math.abs(number)
for (let i = 1; i <= number; i++) {
    if (i % var1 == 0 && i % var2 == 0) {
        console.log(`Both -${i} `)
        continue
    }
    if (i % var2 == 0) {
        console.log(`6 value -${i} `)
    }
    if(i%var1==0){
        console.log(`4 value ${i} `)
    }
}
