var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.use(express.static('images'));
app.use(express.static('css'));
app.use(express.static('js'));
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('app listening on port ' + port);
});
