const score = [900,40,50,64,35,,56,9,20,76,73]
let minMax = score.reduce((acc,scr)=>{
return [Math.min(acc[0], scr), Math.max(acc[1], scr)]
},[100, 0])

console.log(minMax)