/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let results=[]
    for (let i =0;i<=rowIndex;i++){
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
    return results[rowIndex]
};

