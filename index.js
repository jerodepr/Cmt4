var express = require("express");
var path = require("path");
request = require('request-json');
var app = express();
var postsFile = require('./data/posts.json');
var pagesFile = require('./data/pages.json');
const instagramPosts = require('instagram-posts');
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");


app.use(express.static('public'))

// Dit is de route naar de homepage.
// Let erop hoe ik hier de blogposts uit de datafile de ejs-view binnensmokkel


// Dit is de route naar de instagram pagina.
app.get('/', function(req, res) {
  instagramPosts('depraeterejeroen').then(afbeeldingen => {
      res.render("index", {
        afbeeldingen: afbeeldingen
      });
  });
});


// de server starten op poort 3000
app.listen(3000);