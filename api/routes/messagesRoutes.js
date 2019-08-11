'use strict';
module.exports = function(app) {
    var messages = require('../controllers/messagesController');

    //messages Route
    app.route('/message/:messageId')
        .post(messages.create_a_message);
};