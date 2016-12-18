var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Articles = require('./article');

var hostname = 'localhost';
var port = 3000;

var app = express();
var dataRouter;
var url = 'mongodb://localhost:27017/news';
var db;

//-----connect to MongoDB---------//
mongoose.connect(url);
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to MongoDB");
});

//var collection = db.collection("articles");

//------set up router response-----//
dataRouter = express.Router();
dataRouter.use(bodyParser.json());

dataRouter.route('/website/:website')
.get(function (req, res, next) {
    Articles.find({'website': req.params.website}, function (err, article) {
        if (err) throw err;
        res.json(article);
    });
    
});

dataRouter.route('/all/:itemName')
.get(function (req, res, next) {

    Articles.distinct(req.params.itemName, function (err, items) {
        if (err) throw err;
        res.json(items);
    });
});


//-----load static index page
/*
app.get('/', function(req, res, next) {
    console.log('Router Succeed!')
    console.log('Redirect to test.html!')
    next()
}, function(req, res) {
    res.sendFile(req.url, {root: __dirname });
});
*/
app.use('/data',dataRouter);

app.use(express.static(__dirname));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});
