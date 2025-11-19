//every line is run by thread at a time

/*his all code is synchronous code execution which  is executed line by line "in the order" in which it is written */
function sum(n) {//1.
    let ans = 0;//3.
  for (let i = 1; i <= n; i++) {
    ans = ans + i;
  }
  return ans;//4.
}

const ans = sum(10);//2.
console.log(ans);//5.
