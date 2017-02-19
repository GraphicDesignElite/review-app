var express= require('express');
var router = express.Router();
var request = require('request');

var googleMapsClient = require('@google/maps').createClient({
  key: process.env.GOOGLE_MAPS_API_KEY
});
router.get('/', function(req, res, next){
    res.send('The Google API is active');
});

router.get('/places/search/:place', function(req, res, next){
    request('https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + req.params.place + '&key=' + process.env.GOOGLE_MAPS_API_KEY, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.json(body); // Show the HTML for the Google homepage.
        }
    })
});


module.exports = router;