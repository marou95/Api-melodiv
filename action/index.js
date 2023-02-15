module.exports = function (app) {
    app.actions = {};
    app.actions.songs = require('./songs')(app);
    

};
