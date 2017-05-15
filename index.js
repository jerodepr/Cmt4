var express = require("express");
var path = require("path");
request = require('request-json');
var app = express();
const instagramPosts = require('instagram-posts');
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', (process.env.PORT || 5000));
app.use(express.static('public'))


app.get('/', function(req, res) {
  instagramPosts('depraeterejeroen').then(afbeeldingen => {
      res.render("index", {
        afbeeldingen: afbeeldingen
      });
  });
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
