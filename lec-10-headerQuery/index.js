const express = require("express");

const app = express();
// ------my code----------
// function calculator(req, res, next) {
//   const a = parseInt(req.query.a);//here const a is local variable in the middleware so it can't be accessed by routes
//   const b = parseInt(req.query.b);//parseInt is converting he string into Integer
//   if (a>0 && b>0) {
// //      req.query.a;  // now these are accessable for later use
// //   req.query.b; // and after getting both of them we will store them in const val1 and val2 

// req.a=a;     // attach to request so routes can use it
// req.b=b;    
// next();
//   } else {
//     res.json({
//       msg: "Sorry numbers should be positive!",
//     });
//   }
// }

// app.get("/sum", calculator, function (req, res) {
//   res.json({
//     ans: req.a + req.b,
//   });
// });

// app.get("/multiply", calculator, function (req, res) {
//   res.json({
//     ans: req.a * req.b,
//   });
// });

// app.get("/divide", calculator, function (req, res) {
//   res.json({
//     ans: req.a / req.b,
//   });
// });

// app.get("/subtract", calculator, function (req, res) {
//   res.json({
//     ans: req.a - req.b,
//   });
// });

// app.listen(3000, function () {
//   console.log("sever is running!");
// });

// ------Expected solution--------
 app.get("/sum/:firstArg/:secondArg",function(req,res){ // sum/10/5
  const a = parseInt(req.params.firstArg);
  const b = parseInt(req.params.secondArg);
  
  // const a = parseInt(req.query.a);
  // const b = parseInt(req.query.b);

  res.json({
    answer: a+ b
  })
 })
 
//  app.get("/subs",function(req,res){
//  const a = parseInt(req.query.a);
//   const b = parseInt(req.query.b);

//   res.json({
//     answer: a -b
//   })
//  })
//  app.get("/multiply",function(req,res){
//   const a = parseInt(req.query.a);
//   const b = parseInt(req.query.b);

//   res.json({
//     answer: a * b
//   })
//  })

//  app.get("/division",function(req,res){
//   const a = parseInt(req.query.a);
//   const b = parseInt(req.query.b);

//   res.json({
//     answer: a / b 
//   })
//  })
 app.listen(3001,function(){
  console.log("server is running!!")
 })