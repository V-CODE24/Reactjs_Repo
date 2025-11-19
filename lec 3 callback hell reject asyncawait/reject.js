const fs = require("fs");

function setTimeoutPromisified(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}
function readFileAsync() {
  return new Promise(function (resolve, reject) {
    fs.readFile("ad.txt", "utf-8", function (err, data) {
      if (err) {
        reject("File not found");
      }else{
          resolve(data);
        }
    })
  })
}

readFileAsync()
  .then(function (x) {
    console.log("File has been read "+ x);
  })
  .catch(function (e) {//control will reach there if there is ever reject
    console.log("Error")
    console.log(e);
  });
