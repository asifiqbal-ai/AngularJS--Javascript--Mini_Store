var path = require("path");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");



app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, './static')));

app.listen(8000, function(){
	console.log("Listening on port: 8000");
});