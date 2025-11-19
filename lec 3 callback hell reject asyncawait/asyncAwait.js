 //its a way to write async code like  sync and suger at the top of the promises


function setTimeoutPromisified(duration) {  //this in below is an async function that we defined by our own
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}

async function solve(){
    await setTimeoutPromisified(1000);
    console.log("hi");
await setTimeoutPromisified(3000);
console.log("hello");
await setTimeoutPromisified(5000);
console.log("hi there");
}
solve();
console.log("after solve function")























