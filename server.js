var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Message = require('./api/models/messagesModel'), //loads created model
    bodyParser = require('body-parser');


//connects to database my adding url to mongoose instance
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Messagesdb');

//installs bodyParser to make request bodies available under req.body property
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//registers the routes in the server
var routes = require('./api/routes/messagesRoutes');
routes(app);

app.listen(port);

console.log('messages RESTful Api started on port: ' + port);