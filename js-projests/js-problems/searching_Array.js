function getIndexToIns(arr, num) {
  let sum = []
  let arr1 = arr.sort((a,b)=>{
    return a-b
    
  })
  let arr2 = arr1.findIndex(move=>{
    return move >= num
  })
  if(arr2 == -1){
  for(i=0;i<arr.length;i++){
    
  }
  return i
}else {
  return arr2
}
}

console.log(getIndexToIns([2, 5, 10], 10));