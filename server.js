var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');



var index = require('./routes/index');
var reviews = require('./routes/reviews');

var app = express();

// Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api/v1/', reviews);


app.use(function(req, res, next) {
    res.status(404);
    res.json({
        message: 'Not Found',
        error: 'Not Found'
    });
});

//dev errors
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

app.listen(3000, function(){
    console.log("Server Running Todos on 3000");
})


