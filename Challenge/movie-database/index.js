let express = require("express");
let app = express();

let currdatetime = new Date();
let t1 = currdatetime.toTimeString();
let t2 = t1.split(":");
let time = t2[0] + ":" + t2[1];

var url = require("url");

app.get("/", function(req, res) {
  res.send("ok");
});

app.get("/test", function(req, res) {
  res.send({ status: 200, message: "ok" });
});

app.get("/time", function(req, res) {
  res.send({ status: 200, message: time });
});

app.listen(3000, function() {});
