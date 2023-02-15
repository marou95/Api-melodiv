module.exports = function (app) {
    app.use('/songs', require('./songs')(app));
};