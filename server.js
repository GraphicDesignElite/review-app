var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var reviews = require('./routes/reviews');
var googleAPI = require('./routes/googleAPI');
var cors = require('cors');

var port = process.env.port || 5000;
var app = express();

// Apply Cors
app.use(cors());



// Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// API Routes
app.use('/', index);
app.use('/api/v1/', reviews);
app.use('/api/google/', googleAPI);

// Basic Error Handling
app.use(function(req, res, next) {
    res.status(404);
    res.json({
        message: 'Not Found',
        error: 'Not Found'
    });
});
//dev
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
    });
  });
}
// production error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
    });
});

app.listen(port, function(){
    console.log("Server Running Review API on " + port);
})


