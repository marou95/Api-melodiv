module.exports = function (app) {
    return function (req, res) {
        var song = app.model.song;
        var songId = req.params.songId ;

        song.remove({}, function (err) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else {
                return res.status(200).send({});
            }
        });
    }
};