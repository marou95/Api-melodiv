var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser').json();

module.exports = function (app) {
    app.get('/',
        app.actions.songs.list
    );

    app.get('/:songId',
        app.actions.songs.getById
    );

    app.post('/',
        bodyParser,
        app.actions.songs.create
    );

    // router.put('/:songId',
    //     bodyParser,
    //     app.actions.songs.update
    // );

    app.delete('/',
        app.actions.songs.deleteAll
    );

    app.delete('/:songId',
        app.actions.songs.delete
    );

    return router;
};