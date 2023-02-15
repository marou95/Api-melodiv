var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser').json();

module.exports = function (app) {
    router.get('/',
        app.actions.songs.list
    );

    router.get('/:songId',
        app.actions.songs.getById
    );

    router.post('/',
        bodyParser,
        app.actions.songs.create
    );

    // router.put('/:songId',
    //     bodyParser,
    //     app.actions.songs.update
    // );

    router.delete('/',
        app.actions.songs.deleteAll
    );

    router.delete('/:songId',
        app.actions.songs.delete
    );

    return router;
};