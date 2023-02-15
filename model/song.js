'use strict';
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

module.exports = function (app) {

    var songSchema = new Schema(
        {
            json: {
                type: String,
                required: true,
                unique: false,
            },
        });

    var song = model('song', songSchema);
    return song;
};