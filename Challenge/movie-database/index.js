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

app.get("/movies/add", function(req, res) {
  res.send("add");
});

app.get("/movies/get", function(req, res) {
  res.send({ status: 200, data: movies });
});

app.get("/movies/edit", function(req, res) {
  res.send("edit");
});

app.get("/movies/delete", function(req, res) {
  res.send("delete");
});

app.listen(3000);

const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 }
];
