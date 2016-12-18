var mongoose     = require('mongoose');

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

var Articles = mongoose.model('Article', articleSchema, 'articles');

module.exports = Articles;