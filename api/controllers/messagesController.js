'use strict';

var mongoose = require('mongoose'),
    Message = mongoose.model('Messages');

exports.create_a_message = function(req, res) {
    var new_message = new Message(req.body); 
    new_message.save(function(err, message) {
        if (err) {
            res.send(err);
        } else {
            //Need to find a way to get the word count from other documents here
            var wordArray = message.message.split(" ");;
            var wordcount = wordArray.length;
            var total = { 
                total_words: wordcount 
            };
            res.json(total);
        }
    });
};
