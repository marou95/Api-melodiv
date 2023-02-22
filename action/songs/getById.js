module.exports = function (app) {
    return function (req, res) {
        var song =  app.model.song;
        song.findById(req.params.songId ,function (err,result) {
            if(err){
                return res.status(404).send({error: err});
            }
            else{
                if (result) {
                    return res.send(result)
                }
                else {
                    return res.status(404).send({error: 'Resource not found'});
                }
            }
        });

    }
};