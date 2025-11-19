//Example to understand promise easily
//  function waitFor3S(resolve){//resolves became main
//     setTimeout(resolve,3000)
//  }
//  function main(){
//     console.log("main is called")
//  }
//  waitFor3S(main);// here we have given main function as argument and then afer 3 seconds the main function is being is called

//  function waitFor3S(resolve){
//     setTimeout(resolve,3000)
//  }

//  function setTimeoutProisified(){
//     return new Promise(waitFor3S);//we passed waitfor3s function as an argument
// //promise is supposed to return something
// }

// function main(){
//     console.log("main is called")
// }

// setTimeoutProisified().then(main)

//promise class says jo function input dere ho uska jo first argument hoga (resolves)..whenever the resolve argument is called it will call the .then function

/*one more example  */
// function random(resolve) {
//   //  resolve is also a function
//   setTimeout(resolve, 3000);
// }
// const p = new Promise(random);

// // using the eventual value returned by the promise
// function callback() {
//   console.log("Promise succeded");
// }
// p.then(callback);

// Create the promisified version of fs.readFile, fs.WriteFile, cleanFile

// const fs =  require("fs");

// function readTheFile(sendTheFinalValueHere){
//     fs.readFile("a.txt","utf-8",function(error,data){
//         sendTheFinalValueHere(data);//calling the first argument of function and passing the data in it we got by doing asynchronous function in that function
//     // and then this data will get passed in the callback
//     })
// }

// function readFile(FileName){
//     //read the file and return its value
//     return new Promise(readTheFile);//it gives a proxy,, eventually iski ek value ayegi
// }

// const p = readFile();//p is proxy of the eventuak completion of a value ...jo value aani h proise se
// //by this variable we can lead to that value
// function callBack(contents){
//     console.log(contents);
// }
// p.then(callBack);

/*Now we will define our own promise to understand data transfer  */

// class Promise2 {
//   constructor(fn) {//constructor ko function readTheFile function diya aur usko ekdum call kr dega vo usko... aur badle me argument diya joki resolve variable h yha pr
//     //aur fir afterdone argument ko call krenge then it will call this.resolve
//     //then this.resolve get set to callback
//     function afterDone() {
//       this.resolve();
//     }
//     fn(afterDone);
//   }

//   then(callback) {
//     this.resolve = callback;//jo bhi callback diya h gets stored here
//   }
// }

// function readTheFile(resolve) {// afterDone agrument is resolve function here
//     //afterDone it will go here
//   setTimeout(function () {
//     console.log("call Back based setTimeout completed");
//     resolve();
//   }, 3000);
// }

// function setTimeoutPromisified() {
//   return new Promise2(readTheFile);
// }

// let p = setTimeoutPromisified();

// function callback() {
//   console.log("callBack has been called!!");
// }
// p.then(callback);//this will set this.resove to callback
