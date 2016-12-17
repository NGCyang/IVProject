var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var hostname = 'localhost';
var port = 3000;

var app = express();
var dataRouter;
var url = 'mongodb://localhost:27017/news';
var db;

//-------Define Schemas-----//
var topicSchema = mongoose.Schema({
    group: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

var articleSchema = mongoose.Schema({
    website: {
        type: String,
        required: true
    },
    corp: [{
        type: String,
        required: true
    }],
    id: {
        type: String,
        required: true,
        unique: true
    },
    time: {
        type: Date,
        required: true
    },
    topic: [topicSchema],
    firstMention: {
        type: Boolean,
        required: true
    }
});

var Articles = mongoose.model('Article', articleSchema);

//-----connect to MongoDB---------//
mongoose.connect(url);
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to MongoDB");
});

var collection = db.collection("articles");
//------set up router response-----//
dataRouter = express.Router();
dataRouter.use(bodyParser.json());

dataRouter.route('/*.json')
.get(function (req, res, next) {
    //res.json({"website": "http://www.sachem.ca/news-story/6215115-facebook-glitch-celebrates-46-years-of-online-friendship/\n", "first_mention": "false", "topic": [{"type": "Mistakes", "group": "Business Concerns"}], "corp": ["Facebook  Inc."], "time": {"$date": 1451606683000}, "id": "5685c18b3a8ffe55b90031c1"});
    
    collection.findOne({}, function (err, article) {
        if (err) throw err;
        res.json(article);
    });
    
});


dataRouter.route('/all')
.get(function (req, res, next) {
    collection.distinct('website', function (err, items) {
        if (err) throw err;
        res.json(items);
    });
    
});


dataRouter.route('/:articleId')
.get(function (req, res, next) {
    Articles.findById(req.params.articleId, function (err, article) {
        if (err) throw err;
        res.json(article);
    });
});

//----
//var pageRouter= express.Router();
//pageRouter.route('/')

//-----load static index page
app.get('/', function(req, res) {
    res.sendFile('test.html', {root: __dirname });
});

app.use('/',dataRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});
