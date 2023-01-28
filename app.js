const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
    res.render("home");
})

app.get('/about', function(req, res) {
    res.render("about");
})

app.get('/store', function(req, res) {
    res.render("store");
})

app.get('/contact', function(req, res) {
    res.render("contact");
})

app.listen(3000, function() {
    console.log("Server started");
})