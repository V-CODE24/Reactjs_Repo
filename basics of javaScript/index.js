//   let user1 = "vaibhav"
//   let user2 = "harkirat"
//   let user3 = "asd"

// console.log(user1)
// let users = ["vaibhav","harkirat","asd"];

// console.log(users[1])

// function greet(name) {
//   return "Hello " + name;
// }

// let ans = greet("vaibhav");
// let ans1 = greet("vaibhav1");
// let ans2 = greet("vaibhav2");

// console.log(ans);
// console.log(ans1);
// console.log(ans2);

// function sum(a, b) {
//   let total = a + b;
//   return total;
// }
// let ans = sum(1, 2);
// let ans1 = sum(4, 5);

// console.log(ans)
// console.log(ans1)

// function canVote(age){
//     if(age>18){
//         console.log("you can vote!!!");
//     }
//     if(age<18){
//         console.log("Good You are not eligible")
//     }
// }
// canVote(9);
// let users = ["harkirat","vaibhav","Rohan","nitin"];
// for(i=0;i<4;i++){
//     console.log(users[i]);
// }
// function greet(user) {
//   console.log("Hi " + user.name1 + " your age is " + user.age1);
// }

// let user = {
// //   name: "vaibhav",
//   name1: "Raman",
// //   age: 20,
//   age1:19
// }

// greet(user);
// console.log(user.name); //user.name
// console.log(user["name"]); //user of name

// let arr = ["vaibhav",20,true];

// array of object
// let arr = [
//   "vaibhav",
//   20,
//   {
//     name: "vaibhav",
//     age: 20,
//   }
// ];

// const val1 = arr[2];
// const val2 = {
//   name: "vaibhav",
//   age: 20,
// }
// console.log(val1)
// console.log(val2)
// let arr = [
//   "vaibhav",
//   20,
//   {
//     name: "vaibhav",
//     age: 20,
//     cities:["delhi","chandigarh","Banglore",{
//         country:"malaysia",
//         city:"kaula lampur"
//     }]
//   }
// ];
// console.log(arr[2].cities[3].city);



//create a function that takes an array of object as input,
//  and returns the user whose age >  18 and male

function solve(arr){
    //initialise a new array, push to a new array
    //OR you can use the filter function inside an array. ,map, reduce
let arr2= [];
for(let i = 0;i<arr.length;i++){
    if(arr[i].gender=="male" && arr[i].age > 10){
        arr2.push(arr[i])
    }
}
return arr2;
}

const users = [{
    name:"vaibhav",
    age:20,
    gender: "male"
},{
  name:"suhani",
    age:19,
    gender: "female"   
},{
     name:"Ram",
    age:20,
    gender: "male"
}]
const ans = solve(users);
console.log(ans)
