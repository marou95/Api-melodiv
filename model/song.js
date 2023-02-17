'use strict';
const { json } = require('body-parser');
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

module.exports = function (app) {

    var songSchema = new Schema(
        {
            melodic: {
                type: JSON,
                required: true,
                unique: false,
            },
            rythm: {
                type: JSON,
                required: true,
                unique: false,
            },
            bpm: {
                type: String,
                required: true,
                unique: false,
            },
            measureNb: {
                type: String,
                required: true,
                unique: false,
            },



        });

    var song = model('song', songSchema);
    return song;
};