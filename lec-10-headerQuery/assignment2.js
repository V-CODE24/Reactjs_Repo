// Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console

const express = require("express");
const app = express();

let requestCount = 0;

app.use(function (req, res, next) {
  const date = new Date();
  console.log(date);
  next(); // now it proceeds to routes
});

app.use(function (req, res, next) {
  // this is global middleware accessable by all the requests below
  console.log("Request received!!")
  requestCount = requestCount + 1;
  next();
});

app.get("/user", function (req, res) {
  res.status(200).json({ name: "vaibhav" });
});
app.get("/surprise", function (req, res) {
  res.status(200).json({ msg: "hurr!" });
});
// app.post("/surprise", function (req, res) {
//   res.status(200).json({ msg: "hurr!" });
// });
app.get("/requestCount", function (req, res) {
  res.status(200).json(requestCount);
});

app.listen(3002, function () {
  console.log("server is running!");
});
