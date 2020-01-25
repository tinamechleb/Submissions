let express = require("express");
let app = express();

let today = new Date();
let time = today.getHours() + ":" + today.getSeconds();

var url = require("url");

app.get("/", (req, res) => {
  res.send("ok");
});

app.get("/test", (req, res) => {
  res.send({ status: 200, message: "ok" });
});

app.get("/time", (req, res) => {
  res.send({ status: 200, message: time });
});

app.get("/hello/:id", (req, res) => {
  let id = req.params.id;
  res.send({ status: 200, message: `Hello, ` + id });
});

app.get("/search", (req, res) => {
  let search = req.query.s;
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

app.get("/movies/add?", (req, res) => {
  let rating = req.query.rating;
  let ratingINT = parseInt(rating);
  let year = req.query.year;
  let yearINT = parseInt(year);
  let title = req.query.title;

  if (
    title == "" ||
    year == "" ||
    year.split("").length != 4 ||
    year != parseInt(year)
  ) {
    res.send({
      status: 403,
      error: true,
      message: "you cannot create a movie without providing a title and a year"
    });
  } else if (rating == "" || rating == null) {
    ratingINT = 4;
    movies.push({ title: title, year: yearINT, rating: ratingINT });
    res.send({ status: 200, data: movies });
  } else {
    movies.push({ title: title, year: yearINT, rating: ratingINT });
    res.send({ status: 200, data: movies });
  }
});

app.get("/movies/get", (req, res) => {
  res.send({ status: 200, data: movies });
});

app.get("/movies/get/by-date", (req, res) => {
  res.send({ status: 200, data: movies.sort((a, b) => a.year - b.year) });
});

app.get("/movies/get/by-rating", (req, res) => {
  res.send({ status: 200, data: movies.sort((a, b) => b.rating - a.rating) });
});

app.get("/movies/get/by-title", (req, res) => {
  res.send({
    status: 200,
    data: movies.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    })
  });
});

app.get("/movies/get/id/:id", (req, res) => {
  let movieID = req.params.id;
  if (movieID < movies.length && movieID >= 0) {
    res.send({ status: 200, data: movies[movieID] });
  } else {
    res.send({
      status: 404,
      error: true,
      message: `the movie ${movieID} does not exist`
    });
  }
});

app.get("/movies/edit", (req, res) => {
  res.send("edit");
});

app.get("/movies/edit/:id?", (req, res) => {
  let movieID = req.params.id;
  let rating = req.query.rating;
  let ratingINT = parseInt(rating);
  let year = req.query.year;
  let yearINT = parseInt(year);
  let title = req.query.title;

  let newTitle;
  let newYear;
  let newRating;

  if (title != null) {
    newTitle = title;
  } else {
    newTitle = movies[movieID].title;
  }
  if (year != null) {
    newYear = yearINT;
  } else {
    newYear = movies[movieID].year;
  }
  if (rating != null) {
    newRating = ratingINT;
  } else {
    newRating = movies[movieID].rating;
  }
  movies[movieID] = { title: newTitle, year: newYear, rating: newRating };
  res.send({ status: 200, data: movies });
});

app.get("/movies/delete", (req, res) => {
  res.send("delete");
});

app.get("/movies/delete/:id", (req, res) => {
  let movieID = req.params.id;
  if (movieID < movies.length && movieID >= 0) {
    movies.splice(movieID, 1);
    res.send({ status: 200, data: movies });
  } else {
    res.send({
      status: 404,
      error: true,
      message: `the movie ${movieID} does not exist`
    });
  }
});

app.listen(3000);

const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 }
];
