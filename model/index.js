var mongoose = require('mongoose');

const uri = "mongodb+srv://admin:zzd6kXf8PKr3Wwdt@app.fzvydyk.mongodb.net/?retryWrites=true&w=majority";

module.exports = function (app) {
    app.mongoose = mongoose.connect(uri,function (err,db) {
        if (err)
            console.log('Unable to connect to the mongoDB server. Error: ',err);
        else
            console.log('Connection established to', uri);
    });
    app.model = {};
    app.model.song = require('./song')(app);

};