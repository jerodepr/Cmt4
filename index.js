var express = require("express");
var path = require("path");
var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', (process.env.PORT || 5000));
app.use(express.static('public'))
app.get('/', function(req, res) {
  res.render("index", {
    naam: "Wereld"
  });
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
