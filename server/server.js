// Require express and create an instance of it
var express = require("express");
var app = express();

// on the request to root (localhost:3000/)
app.get("/", function(req, res) {
  res.send("<b>My</b> first express http server");
});

// On localhost:3000/welcome
app.get("/welcome", function(req, res) {
  res.send("<b>Hello</b> welcome to my http server made with express");
});


// route with parameters
// matches to : /books/stephenking/category/horror
app.get('/books/:user/category/:categorySlug', function(req, res) {
    console.log(req.params);
    var username = req.params.user;
    var category = req.paramas.categorySlug;
    res.send(req.params);
});

// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
  res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

// start the server in the port 3000 !
app.listen(8080, function() {
  console.log("Example app listening on port 8080.");
});
