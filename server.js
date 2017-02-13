var express = require('express');
var app = express();

app.use(express.static(__dirname + "/"));
app.listen(8080||process.env.PORT);
console.log("running at 8080");
