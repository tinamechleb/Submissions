let express = require("express");
let app = express();

app.get("/", function(req, res) {
  res.send("ok");
});

app.listen(3000, function() {});
