let expression = '[5+(3*2)]*5--2'
expression = expression.trim(" ")

let opr = ["^", "-", "+", "*", "/", "%"]
let wasLastClosingBrace = false
const allowedInside = {
    "(": ["("],
    "[": ["(", "["],
    "{": ["(", "[", "{"]
}
const validBraces = []

let brackets = {
    ")": "(",
    "]": "[",
    "}": "{"
}

let operators = []
let operands = []
let number = ""

function calculate(left, operator, right) {
    left = Number(left)
    right = Number(right)

    switch (operator) {
        case "+":
            return left + right
        case "-":
            return left - right
        case "*":
            return left * right
        case "/":
            return left / right
        case "%":
            return left % right
        case "^":
            return left ** right
        default:
            throw new Error(`Unsupported operator: ${operator}`)
    }
}

if (expression.length === 0) {
    console.log("Invalid Expression")
    return
}

for (let i of expression) {

    if (i === ")" || i === "]" || i === "}") {

        wasLastClosingBrace = true


        if (validBraces[validBraces.length - 1] !== brackets[i]) {
            console.log("Invalid Expression")
            return
        }
        if (
            number === "" &&
            operators[operators.length - 1] === brackets[i]
        ) {
            console.log("Invalid Expression")
            return
        }

        if (number !== "") {
            operands.push(number)
            number = ""
        }
        while (operators[operators.length - 1] !== brackets[i]) {
            let b = operands.pop()
            let op = operators.pop()
            let a = operands.pop()

            operands.push(calculate(a, op, b))
        }

        operators.pop()
        validBraces.pop()

    } else {
        if (i === "(" || i === "[" || i === "{") {
            wasLastClosingBrace = false
            if (number !== "") {
                console.log("Invalid Expression")
                return
            }
            if (!opr.includes(operators[operators.length - 1]) && operators.length > 0) {
                console.log("Invalid Expression")
                return
            }
            operators.push(i)

            if (validBraces.length > 0) {
                if (
                    !allowedInside[
                        validBraces[validBraces.length - 1]
                    ].includes(i)
                ) {
                    console.log("Invalid Expression")
                    return
                }
            }

            validBraces.push(i)

        } else {
            if (!isNaN(i)) {
                if (wasLastClosingBrace) {
                    console.log("Invalid Expression")
                    return
                }
                number += i
            } else if (i === ".") {
                console.log("Invalid Expression")
                return
            }
            else if (opr.includes(i)) {
                let lastOperator = operators[operators.length - 1]

                let isUnary =
                    (i === "-") &&
                    number === "" &&
                    !wasLastClosingBrace &&
                    (
                        operands.length === 0 ||
                        opr.includes(lastOperator) ||
                        lastOperator === "(" ||
                        lastOperator === "[" ||
                        lastOperator === "{")

                if (isUnary) {
                    wasLastClosingBrace = false
                    number = i
                    continue
                }
                if (number === "" && opr.includes(operators[operators.length - 1]) && !isUnary && !wasLastClosingBrace) {
                    console.log("Invalid Expression")
                    return

                }
                wasLastClosingBrace = false
                if (number !== "") {
                    operands.push(number)
                    number = ""
                }
                if (i === expression[expression.length - 1]) {
                    console.log("Invalid Expression")
                    return
                }


                if (
                    (
                        (i === "+" || i === "-" || i === "*" ||
                            i === "/" || i === "%" || i === "^") &&
                        lastOperator === "^"
                    ) ||
                    (
                        (i === "+" || i === "-" || i === "*" ||
                            i === "/" || i === "%") &&
                        (lastOperator === "*" || lastOperator === "/")
                    ) ||
                    (
                        (i === "+" || i === "-") &&
                        (lastOperator === "+" || lastOperator === "-")
                    )
                ) {
                    let b = operands.pop()
                    let op = operators.pop()
                    let a = operands.pop()

                    operands.push(calculate(a, op, b))
                    operators.push(i)

                } else {
                    operators.push(i)
                }
            }
        }
    }
}

if (number !== "") {
    operands.push(number)
    number = ""
}

if (validBraces.length > 0) {
    console.log("Invalid Expression")
    return
}

console.log("operands:", operands)
console.log("operators:", operators)
console.log("number:", number)

while (operators.length > 0) {
    let b = operands.pop()
    let op = operators.pop()
    let a = operands.pop()

    operands.push(calculate(a, op, b))
}

console.log(operands[0])