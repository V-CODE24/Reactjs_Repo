//promice also work as setTimeout(fxn,4000)
//That it will return  or promice to return something in future

//  function logName(){
//     console.log("Vaibhav");
//  }
//  setTimeout(logName,3000);
/*we can use the callback based approach
 Or promice based approach...Promice area the cleaner way to use */

//defining a primice is hard
//using a promice is easy
// A promice in JavaScript  is an object that represents the eventaul completion(or failure) of an asynchronous operation and its resulting value.

//lets see callback based approach
//  function main(){

//  }
//  setTimeout(main,3000);//callBack the main function

//setTimeoutProisified is returning Object or instance of promise class
function setTimeoutProisified(ms){//ms = mili seconds
    let p = new Promise(resolve => setTimeout(resolve,ms));
    return p ;
}

function callBack(){
    console.log("3 seconds have passed");
}
setTimeoutProisified(3000).then(callBack)