/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
//[7,8,9,10]
//[5,6,7,8]
var findContentChildren = function(g, s) {
    g.sort((a,b)=>a-b)
    s.sort((a,b)=>a-b)
    let count=0
    let child=0
    let cookie=0
    while(child<g.length && cookie<s.length){
        if(s[cookie]>=g[child]){
            count++
            child++
            cookie++
        }else{
            cookie++
        }
    }
    return count
};

console.log(findContentChildren([1,2,3],[1,1]))