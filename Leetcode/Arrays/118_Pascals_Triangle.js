/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let results=[]
    for (let i =0;i<numRows;i++){
        let result=[]
        for(let j=0;j<=i;j++){
            if(j===0 || j===i){
                result.push(1)
            }else{
                result.push(results[i-1][j-1]+results[i-1][j])
            }
        }
        results.push(result)
    }
    return results
};

console.log(generate(5))