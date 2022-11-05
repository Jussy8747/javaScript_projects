let score = [10,20,10,20,30,40,50,40,30,60,70,30,50,80,90,90,80,90,10];
// forEach method
let elementCnt = {}
score.forEach(val =>{
  elementCnt[val] = (elementCnt[val] || 0) + 1
})


//reduce method

elementcnt = score.reduce((acc, val)=>{
  acc[val] = (acc[val] || 0)+1
return acc
},{})

console.log(elementCnt, elementcnt)