function PredictNextNumber(arr){
        if(arr.length<2){
        return "Cant predict next"
    }
    let multiple=arr[1]/arr[0]
    for(let i=1;i<arr.length-1;i++){
        if(arr[i+1]/arr[i]!==multiple){
            return "Cant find next number as no pattern"
        }
    }
    return arr[arr.length-1]*multiple
}
let arr=[-2,-4,-8,-16,-32,-64]
console.log(PredictNextNumber(arr))