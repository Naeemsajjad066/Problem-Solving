let expression = '2-(4+(3*2/2)+1)'
let opr = ["^", "-", "+", "*", "/"]
let presidence = {
    "^": 3,
    "*": 2,
    "/": 2,
    "+": 1,
    "-": 1
}
let operators = []
let operands = []

for (let i of expression) {
    if (i === ")") {
        while (operators[operators.length - 1] !== "(") {
            let b = operands.pop()
            let op = operators.pop()
            let a = operands.pop()
            operands.push(eval(a + op + b))
        }
        operators.pop()
    } else {
        if (i === "(") {
            operators.push(i)
        } else {
            if (opr.includes(i)) {
                if (presidence[operators[operators.length - 1]] >= presidence[i]) {
                    let b = operands.pop()
                    let op = operators.pop()
                    let a = operands.pop()
                    operands.push(eval(a + op + b))
                    operators.push(i)
                }else{
                    operators.push(i)
                }
            }
            else{
                operands.push(i)
            }
        }
    }
}
while (operators.length > 0) {
    let b = operands.pop()
    let op = operators.pop()
    let a = operands.pop()
    operands.push(eval(a + op + b))
}
console.log(operands[0]);