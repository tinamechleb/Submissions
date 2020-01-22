let express = require("express");
let app = express();

let t = new Date().toTimeString().split(":");
let time = t[0] + ":" + t[1];

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

app.listen(3000);
