
let naeem_marks=[1,2,3,8,3,2,1]
let haris_marks=[8,2,6,5,6,7,8,9]
let naeem_points=0
let haris_points=0
let grades=[]
let max=Math.max(naeem_marks.length,haris_marks.length)
let min=Math.min(naeem_marks.length,haris_marks.length)
for(let i=0;i<min;i++){
    if(naeem_marks[i]===haris_marks[i]) continue
    naeem_marks[i]>haris_marks[i]?naeem_points++:haris_points++
}
grades.push(naeem_points)
grades.push(haris_points)
naeem_marks.length>haris_marks.length?grades[0]+=max-min:grades[1]+=max-min
console.log(grades)
