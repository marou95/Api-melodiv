module.exports = function (app) {
    return function (req, res) {
        var song =  app.model.song;
        var songId = req.params.songId;

        song.update({_id: songId}, req.body, function (err, result) {
            if(err){
                return res.status(500).send({error: err});
            }
            else{
                if (result!=null) {
                    res.send({});
                }
                else
                    res.send({error: "Song update failed"});
            }
        });

    }
};