var express = require('express');
var bodyParser = require('body-parser');
var port = 8003;
var app = express();
var server = require('http').Server(app);

(function init() {

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    require('./model')(app);
    require('./action')(app);
    require('./routes')(app);
}());

    server.listen(process.env.PORT || port, function (err) {
    if (err)
        console.log("unable to listening on port " + port + " " + err);
    else
        console.log("Express SmartJug listening on port " + port);
});