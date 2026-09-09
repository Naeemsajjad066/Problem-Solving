function checkBST(BST,index,min=-Infinity,max=Infinity){

    if(BST[index]===undefined){
        return true
    }
    const value=BST[index]
    if(value<=min || value>=max){
        return false
    }
    const left=2*index+1
    const right=2*index+2
    return (
        checkBST(BST,left,min,value) &&
        checkBST(BST,right,value,max)
    )
}

const valid=[10, 5, 15, 3, 7, 12, 20]
const invalid=[10, 5, 15, 3, 7, 12, 9]

console.log(checkBST(valid,0)) // true
console.log(checkBST(invalid,0)) // false