//fs library gives two types of fxn 1.read file 2.readFileSync fxn
const fs =  require("fs");/* fs(file system) library is part of node js  */

// const contents = fs.readFileSync("a.txt","utf-8");
//utf-8 its a way in which we are read  data ex=> byte,hex and readfilesync is a function which is the attribute and fs is also an modulewith readfilesync key or can say utf-8 is a format in which we read
const contents = fs.readFile("a.txt","utf-8");
///read file asynchorously mtlb all the files will run parellely jo phele read ho gyi vo ho jayegi logged
console.log(contents);

const data = fs.readFilesync("b.txt","utf-8");//utf-8 its a way in which we are read  data ex=> byte,hex and radfilesync is a function which is the attribute and fs is also an modulewith readfilesync key*/
/*const data = fs.readFileSync("b.txt");//gives array of bytes, mtlb unn words ka jo file me h unka byte representation*/
console.log(data);