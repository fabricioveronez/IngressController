var express = require('express');
var app = express();

app.use(express.static('html'));

app.get('/*', function(req, res) {
    res.send('<html><header><Title>Blue Home</Title></header><body style="background-color: green"><h1>Home Page</h1></body></html>');
});

app.listen(8080, function() {
    console.log('Servidor rodando.');
});