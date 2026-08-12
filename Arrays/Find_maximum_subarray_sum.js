let arr=[22,21,-2,1,-5,4,-1,2,-1,-5,-4,-2,-11,2,-4,9]

let max_sum=0
let new_sum=0
for (let i=0;i<arr.length;i++){
    new_sum+=arr[i]
    if(new_sum<=0){
        new_sum=0
        continue
    }
    if (new_sum>max_sum){
        max_sum=new_sum
    }

}
console.log(max_sum)