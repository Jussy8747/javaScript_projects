function Range(start,end){
  let arr = []
  for(i=start;i<=end;i++){
    arr.push(i)
  }
return arr
}


function sum(arr){
  let sum = 0
  for(i=0;i<arr.length;i++){
    sum+=arr[i]
  }
  return sum
}

let arrr = [1,2,3,4,5,6,7,7,8,9]

console.log(Range(10,20))
console.log(sum(Range(1,10)))