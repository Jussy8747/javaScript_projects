// using a loop to solve the problem

let fib = function(arr,lent){
  let num = arr[0];
  let num2 = arr[1]
  let next;
for(i=2;i<lent;i++){
next = num + num2;
num = num2;
num2 = next;
arr.push(next)
}
return arr
}

// using a recursion to solve the problem

let fib2 = function fib2(arr,lent){
if(arr.length >= lent){
  return arr
}else{
  arr.push(arr[arr.length -2] + arr[arr.length - 1])
  return fib2(arr,lent)
}
};

console.log(fib([2,3], 10))
console.log(fib2([2,3], 10))