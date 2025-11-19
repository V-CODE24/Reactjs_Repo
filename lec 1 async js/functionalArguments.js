//Approach 1
// function sum(a, b) {
//   return a + b;
// }
// function subs(a, b) {
//   return a - b;
// }
// function divide(a, b) {
//   return a / b;
// }
// function mult(a, b) {
//   return a * b;
// }
// const ans =sum(25,5);
// console.log(ans);

//Approach 2
//Passing a function as an arguments to another function 

function sum(a, b) {
  return a + b;
}
function subs(a, b) {
  return a - b;
}
function divide(a, b) {
  return a / b;
}
function mult(a, b) {
  return a * b;
}

// function doOperation(a, b, op) {// so op is here a functional argument jo upar humne function bnaye vo
  //if input is sum then it will call (a,b)
  // function op(a,b){
  //     return a + b
  // }
  
  // a =1
  //b =2
  //op = divide
//   let val = op(a, b); //divide(1,2)
//   return val;
// }

// // const ans = doOperation(1, 2, sum);
// const ans = doOperation(1, 2, divide);
// console.log(ans);
  
function doOperation(a,b,op){// op calls the funcion on those arguments
  return op(a,b)
}
console.log(doOperation(1,2,divide))