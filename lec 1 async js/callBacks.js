// const fs = require("fs");

// const { ByteLengthQueuingStrategy } = require("stream/web");

// function print(err, data) {
//   console.log(data);
// }

/*ye dono ek sath execute kr rhe h */
// fs.readFile("a.txt", "utf-8", print); //asynchronously
//jb bhi ye complete ho jaye(reading the file) it will call print function that is what we call the call back

// fs.readFile("b.txt", "utf-8", print);

// console.log("Done!!!"); /*Ye hone me kam time lagta h */

/*Below is how readfile is working here */
// function readFile(FilePath,encoding,op){
//   //read file
//   op("Error!!","hi there")
// }

// function print(error, data) {
//   console.log("error is")
//   console.log(error)
//   console.log("Data is")
//   console.log(data);
// }
//error will come if we pass the file that doesn't even exist
// and if the file exist the error will be null

// function print(error,data){
//   if(error){
//     console.log("File is not found")
//   }
//   else{
//     console.log(data)
//   }
// }

function timeout() {
  console.log("Click the button!");
}

console.log("Hi!!");
//and this is I/O intensive task
setTimeout(timeout, 1000); //SetTimeout is a global asynchronous function available 15000ms=15sec

console.log("Welcome to Loupe!!");

let c = 0;
//3-4sec its a CPU intensive task 
for (let i = 0; i < 1000000000; i++) {
  c = c + i;
}
console.log("Expensive operation is done!!!");
/*
CPU intensive task ke baad hi I/O intensive task hoga
*/