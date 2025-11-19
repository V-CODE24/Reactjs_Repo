//promisified version of setTimeout
function setTimeoutPromisified(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}

//we get rid of the unnecessary inendation
//promise chaining
setTimeoutPromisified(1000)
  .then(function () {
    console.log("hi");
    return setTimeoutPromisified(3000);//returns a promise
  })
  .then(function () {
    console.log("hello");
    return setTimeoutPromisified(5000);
  })
  .then(function () {
    console.log("hi there");
  });

console.log("hello im outside");

let str1 = "asd";
// const sortedString = str1.split("s").sort().join("").toLocaleLowerCase();//here we chained function calls
// we have given delimeter of s

