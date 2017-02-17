require('dotenv').config();
var express= require('express');
var router = express.Router();
var mongojs = require('mongojs');

var db = mongojs(process.env.DB_HOST, ['reviews']);

//Get all Reviews
router.get('/reviews', function(req, res, next){
    db.reviews.find(function(err, reviews){
        if(err){
            res.send(err);
        }else{
            res.json(reviews);
        }
    });
});

//Get One Review
router.get('/review/:id', function(req, res, next){
    db.reviews.findOne({
        _id : mongojs.ObjectId(req.params.id)
    }, function(err, review){
        if(err){
            res.send(err);
        }else{
            res.json(review);
        }
    });
});
//Add a new Review
router.post('/review', function(req, res, next){
    var review = req.body;
    if(!review.review){
        return next('A review cannot be empty.');
    }
    else{
        db.save(review, function(err, result){
            if(err){
                res.send(err);
            }else{
                res.json(result);
            }
        })
    }
});
//Update a review
router.put('/review/:id', function(req, res, next){
    var review = req.body;
    var updObj = {};
    if(review.score){
        updObj.score = review.score;
    }
    if(review.editeddate){
        updObj.editeddate = review.editeddate;
    }
    if(review.score){
        updObj.ordernumber = review.ordernumber;
    }
    if(!updObj){
        return next("Invalid Update Data");
    }
    else{
        db.reviews.update({
            _id: mongojs.ObjectId(req.params.id)
        },updObj, {}, function(err, result){
            if(err){
                return next(err);
            }
            else{
                res.json(result);
            }
        });
    }
});
//Remove a Review ( TODO admin only )
router.delete('/review/:id', function (req, res, next) {
    db.reviews.remove({
        _id: mongojs.ObjectId(req.params.id)
    },'', function (err, result) {
        if (err) {
            return next(err);
        }
        else {
            res.json(result);
        }
    });

});


module.exports = router;