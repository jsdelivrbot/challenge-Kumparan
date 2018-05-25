var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
});

http.listen(process.env.PORT || 8080, function(){
  console.log('listening on', http.address().port);
});