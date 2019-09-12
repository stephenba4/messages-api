'use strict';

var mongoose = require('mongoose'),
    Message = mongoose.model('Messages');

var totalWordCount = 0; 

exports.create_a_message = function(req, res) {
    var new_message = new Message(req.body); 
    new_message.save(function(err, message) {
        if (err) {
            res.send(err);
        } else {
            //Saves total words per server session
            var wordArray = message.message.split(" ");;
            var localWordCount = wordArray.length;
            totalWordCount = totalWordCount + localWordCount;
            var total = { 
                total_words: totalWordCount 
            };
            console.log("Total words: " + total.total_words);       
            res.json(total);
        }
    });
};
