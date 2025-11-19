//   Try these out yourself.

// Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it

const express = require("express");
const app = express();

let requestCount = 0;

app.use(function (req, res, next) {
  // this is global middleware accessable by all the requests below
  requestCount = requestCount + 1;
  next();
});

app.get("/user", function (req, res) {
  res.status(200).json({ name: "vaibhav" });
});
app.post("/surprise", function (req, res) {
  res.status(200).json({ msg: "hurr!" });
});
app.get("/requestCount", function (req, res) {
  res.status(200).json(requestCount);
});

app.listen(3002, function () {
  console.log("server is running!");
});
