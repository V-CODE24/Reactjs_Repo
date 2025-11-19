// function promiseFxn(resolve){
//     let c=0;
//     for(let i =0 ;i<10000000;i++){
//         c++;
//     }
//     resolve("Hi there vaibhav");//jis bhi cheez ke sath ye call hoga same cheez ke sath callback function call hoga
// }

// const p  = new Promise(promiseFxn);//here we are defining the promise

// function callback(str){//str cuz this resolve is a sort of teleport to the callback function
//     console.log(str);
// }
// p.then(callback);//here we are using the promise



function doAsyncOp(resolve) {
//   resolve();
setTimeout(resolve,5000);
}
function setTimeoutPromisified() {
  return new Promise(doAsyncOp);
}
function callback() {
  console.log("resolved");
}
setTimeoutPromisified().then(callback);
