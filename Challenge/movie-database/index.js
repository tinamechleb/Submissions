let express = require("express");
let app = express();

let today = new Date();
let time = today.getHours() + ":" + today.getSeconds();

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

app.get("/hello/*", function(req, res) {
  let id = req.url.split("/")[2];
  res.send({ status: 200, message: `Hello, ` + id });
});

app.get("/search*", function(req, res) {
  let search = req.url.split("=")[1];
  if (search == "") {
    res.send({
      status: 500,
      error: true,
      message: "you have to provide a search"
    });
  } else {
    res.send({ status: 200, message: "ok", data: search });
  }
});

app.listen(3000);
