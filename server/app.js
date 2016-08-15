var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var calculations = require('./routes/serverCalculations.js');


app.use(bodyParser.urlencoded({extended: true}));
app.use('/calculations', calculations);

app.get('/*', function(req, res){
  console.log('request params', req.params);
  var file = req.params[0] || 'views/index.html';
  res.sendFile(path.join(__dirname, './public', file));
});

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function() {
  console.log('server is running on port', app.get('port'));
})
