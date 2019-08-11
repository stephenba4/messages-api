'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    message: {
        type: String,
        required: 'Please enter a message'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    total_words: {
        type: Number, //Need to verify this
        default: 0
    }
});

module.exports = mongoose.model('Messages', MessageSchema);
