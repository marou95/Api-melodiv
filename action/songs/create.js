module.exports = function (app) {
  return function (req, res) {
    var song = new app.model.song({
      json: req.body.json,
    });
    song.save(function (err, result) {
      if (result) {
        return res.status(201).send({ _id: result._id });
      } else {
        console.log(err);
        return res.status(500).send({ error: "song creation failed" });
      }
    });
  };
};
